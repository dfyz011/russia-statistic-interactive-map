const puppeteer = require('puppeteer');

const parseIndicators = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('http://fedstat.ru/indicators/', { waitUntil: 'domcontentloaded' });


  const data = await page.evaluate(async () => {
    document.querySelector('#onlyWithData').click();
    const pageSizeSelect = document.querySelector('#pageSize');
    pageSizeSelect.querySelector('option:last-child').selected = true;
    const event = new Event('change', { bubbles: true });
    pageSizeSelect.dispatchEvent(event);
    await new Promise(((resolve) => {
      setTimeout(resolve, 5000);
    }));
    const rawIndicators = document.querySelectorAll('.publ_cont > .publ_item:not(.hide)');
    const rawIndicatorsArray = Array.prototype.slice.call(rawIndicators);
    const indicators = rawIndicatorsArray.map((indicator) => {
      const rawCategories = indicator.querySelectorAll('.indicatorTag > .lnk_teg');
      const rawTitle = indicator.querySelector('.publ_l > .lnk_txt');
      const categoriesArray = Array.prototype.slice.call(rawCategories);
      const id = indicator.id.replace('indicator', '');
      const title = rawTitle.innerText;
      const categories = categoriesArray.map((element) => element.innerText);
      return { id, title, categories };
    });

    return indicators;
  });

  await browser.close();

  return data;
};

// const links_array = Array.prototype.slice.call(links);
// links_array.map((el) => {
//   const id = el.id;
//   const tag=el.
//   return { id: el.href.slice(el.href.lastIndexOf('/') + 1), href: el.href, name: el.innerText };
// });
module.exports = {
  parseIndicators,
};
