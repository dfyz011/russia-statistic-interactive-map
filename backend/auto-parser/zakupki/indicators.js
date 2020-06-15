const puppeteer = require('puppeteer');

const parseIndicators = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      'no-sandbox',
      'disable-setuid-sandbox',
    ]
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://zakupki.gov.ru/epz/main/public/home.html', { waitUntil: 'domcontentloaded' });


  const data = await page.evaluate(() => {
    const placesOfSearch = Array.prototype.slice.call(document.querySelectorAll('div[data-fz]')).map((div) => {
      return { name: div.dataset.fz, title: div.innerText };
    });
    const tabTypes = Array.prototype.slice.call(document.querySelectorAll('div[data-indicator]')).map((div) => {
      return { name: div.dataset.indicator, title: div.innerText };
    });
    // убираем ALLSTATS тк общая статистика и так имеется в регионе с kladr 00000000000
    const modes = Array.prototype.slice.call(document.querySelectorAll('div[data-type]')).map((div) => {
      return div.dataset.type;
    }).filter((type) => type !== 'ALLSTATS');
    const years = Array.prototype.slice.call(document.querySelectorAll('.params-years .dropdown-list__item_range')).map((div) => {
      return parseInt(div.innerText || 0);
    });
    years.push(parseInt(Array.prototype.slice.call(document.querySelectorAll('.params-years .dropdown-list__item_selected'))[0].innerText || 0));
    return {
      placesOfSearch, tabTypes, modes, years
    };
  });

  await browser.close();
  return data;
};

module.exports = {
  parseIndicators,
};
