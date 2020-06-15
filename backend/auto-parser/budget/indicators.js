const puppeteer = require('puppeteer');
const { installMouseHelper } = require('../../scripts/install-mouse-helper');

const parseBudget = async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await installMouseHelper(page);
  await page.setDefaultNavigationTimeout(0);
  // http://budget.gov.ru/epbs/faces/p/Бюджет
  await page.goto('http://budget.gov.ru/epbs/faces/p/%D0%91%D1%8E%D0%B4%D0%B6%D0%B5%D1%82', { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('div .switcher0 .view-switcher', {
    visible: true,
  });

  await page.evaluate(async () => {
    const periodSwitcher = document.querySelector('div .switcher0 .view-switcher');
    const yearPeriod = periodSwitcher.children[1];
    await yearPeriod.click();

    const typeSwitcher = document.querySelector('div .switcher1 .view-switcher');
    const regionType = typeSwitcher.children[1];
    await regionType.click();
  });

  await page.waitForSelector('div .visualParamTerritory .x-form-trigger');
  await page.waitForSelector('div .year-list .x-form-field');
  await page.waitForSelector('div .month-list .x-form-field');


  const data = await page.evaluate(async (

  ) => {
    await document.querySelector('div .visualParamTerritory .x-form-trigger').click();
    await new Promise(((resolve) => {
      setTimeout(resolve, 100);
    }));
    await document.querySelector('div .visualParamTerritory .x-form-trigger').click();
    await new Promise(((resolve) => {
      setTimeout(resolve, 100);
    }));
    const regionsDropdownId = await document.querySelector('div .visualParamTerritory input').getAttribute('aria-owns').split(' ')[1];
    const regionsDropdownElements = Array.prototype.slice.call(document.querySelectorAll(`#${regionsDropdownId} li`));
    const statistic = {};
    for (const regionName of regionsDropdownElements) {
      await document.querySelector('div .year-list .x-form-field').click();
      await new Promise(((resolve) => {
        setTimeout(resolve, 100);
      }));
      await document.querySelector('div .year-list .x-form-field').click();
      await new Promise(((resolve) => {
        setTimeout(resolve, 100);
      }));
      const yearDropdownId = await document.querySelector('div .year-list input').getAttribute('aria-owns').split(' ')[1];
      const yearDropdownElements = Array.prototype.slice.call(document.querySelectorAll(`#${yearDropdownId} li`)).reverse();

      await regionName.click();
      await new Promise(((resolve) => {
        setTimeout(resolve, 100);
      }));

      const regionText = regionName.innerText;
      statistic[regionText] = {};
      for (const year of yearDropdownElements) {
        // await document.querySelector('div .year-list .x-form-field').click();
        // await new Promise(((resolve) => {
        //   setTimeout(resolve, 100);
        // }));
        await year.click();
        await new Promise(((resolve) => {
          setTimeout(resolve, 100);
        }));

        const yearText = (year.innerText || '').replace(/\s+/g, '');
        statistic[regionText][yearText] = {};

        await document.querySelector('div .month-list .x-form-field').click();
        await new Promise(((resolve) => {
          setTimeout(resolve, 100);
        }));
        await document.querySelector('div .month-list .x-form-field').click();
        await new Promise(((resolve) => {
          setTimeout(resolve, 100);
        }));
        const newMonthDropdownId = await document.querySelector('div .month-list input').getAttribute('aria-owns').split(' ')[1];
        const monthDropdownElements = Array.prototype.slice.call(document.querySelectorAll(`#${newMonthDropdownId} li`));
        for (const month of monthDropdownElements) {
          // await document.querySelector('div .month-list .x-form-field').click();
          // await new Promise(((resolve) => {
          //   setTimeout(resolve, 100);
          // }));
          await new Promise(((resolve) => {
            setTimeout(resolve, 100);
          }));
          const notWorkingId = await document.querySelector('div .month-list input').getAttribute('aria-owns').split(' ')[1];
          const notWorkingElement = Array.prototype.slice.call(document.querySelectorAll(`#${notWorkingId} li`)).find((m => m.innerText === month.innerText));

          await notWorkingElement.click();
          await new Promise(((resolve) => {
            setTimeout(resolve, 100);
          }));

          const monthText = (month.innerText || '').replace(/\s+/g, '');
          const textStatistic = document.querySelector('.report-view svg').textContent;
          const res = textStatistic.match(/(ИСПОЛНЕНО(.*)ДоходыИСПОЛНЕНО(.*)Расходы)|(УТВЕРЖДЕНО(.*)ИСПОЛНЕНО(.*).*ДоходыУТВЕРЖДЕНО(.*)ИСПОЛНЕНО(.*)Расходы)/);
          let income = {};
          let spent = {};
          if (res[1]) {
            income = { утверждено: ('0,00').replace(/\s+/g, ''), исполнено: (res[2] || '').replace(/\s+/g, '') };
            spent = { утверждено: ('0,00').replace(/\s+/g, ''), исполнено: (res[3] || '').replace(/\s+/g, '') };
          } else {
            income = { утверждено: (res[5] || '').replace(/\s+/g, ''), исполнено: (res[6] || '').replace(/\s+/g, '') };
            spent = { утверждено: (res[7] || '').replace(/\s+/g, ''), исполнено: (res[8] || '').replace(/\s+/g, '') };
          }
          console.log({ textStatistic, income, spent });
          statistic[regionText][yearText][monthText] = { income, spent };
        }
      }
    }
    return { statistic, indicators: ['yтверждено', 'исполнено'] };
  });


  await browser.close();
  return data;
};

module.exports = {
  parseBudget,
};
