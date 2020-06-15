const removeSpaces = (str) => {
  return str.replace(/\s/g, '');
};
(() => {
  const rawGrid = `
  {
    id: 33460,
    block: $('#grid'),
    debug: true,
    title: '\u0427\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F \u0441 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u043C\u0438 \u0434\u043E\u0445\u043E\u0434\u0430\u043C\u0438 \u043D\u0438\u0436\u0435 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u044B \u043F\u0440\u043E\u0436\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u0432 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u0445 \u043E\u0442 \u043E\u0431\u0449\u0435\u0439 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F',
    unit: '\u043F\u0440\u043E\u0446\u0435\u043D\u0442',
    filters: {
        0: {
            title: '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C',
            all: true,
            values: {
                33460: {
                    title: '\u0427\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F \u0441 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u043C\u0438 \u0434\u043E\u0445\u043E\u0434\u0430\u043C\u0438 \u043D\u0438\u0436\u0435 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u044B \u043F\u0440\u043E\u0436\u0438\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u0432 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u0430\u0445 \u043E\u0442 \u043E\u0431\u0449\u0435\u0439 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F',
                    order: 0,
                    checked: true
                }
            },
            indicator: true
        },
        3: {
            title: '\u0413\u043E\u0434',
            all: false,
            values: {
                1992: {
                    title: '1992',
                    order: 0,
                    checked: false
                },
                1993: {
                    title: '1993',
                    order: 1,
                    checked: false
                },
                1994: {
                    title: '1994',
                    order: 2,
                    checked: false
                },
                1995: {
                    title: '1995',
                    order: 3,
                    checked: false
                },
                1996: {
                    title: '1996',
                    order: 4,
                    checked: false
                },
                1997: {
                    title: '1997',
                    order: 5,
                    checked: false
                },
                1998: {
                    title: '1998',
                    order: 6,
                    checked: false
                },
                1999: {
                    title: '1999',
                    order: 7,
                    checked: false
                },
                2000: {
                    title: '2000',
                    order: 8,
                    checked: false
                },
                2001: {
                    title: '2001',
                    order: 9,
                    checked: false
                },
                2002: {
                    title: '2002',
                    order: 10,
                    checked: false
                },
                2003: {
                    title: '2003',
                    order: 11,
                    checked: false
                },
                2004: {
                    title: '2004',
                    order: 12,
                    checked: false
                },
                2005: {
                    title: '2005',
                    order: 13,
                    checked: false
                },
                2006: {
                    title: '2006',
                    order: 14,
                    checked: false
                },
                2007: {
                    title: '2007',
                    order: 15,
                    checked: false
                },
                2008: {
                    title: '2008',
                    order: 16,
                    checked: false
                },
                2009: {
                    title: '2009',
                    order: 17,
                    checked: false
                },
                2010: {
                    title: '2010',
                    order: 18,
                    checked: false
                },
                2011: {
                    title: '2011',
                    order: 19,
                    checked: false
                },
                2012: {
                    title: '2012',
                    order: 20,
                    checked: false
                },
                2013: {
                    title: '2013',
                    order: 21,
                    checked: false
                },
                2014: {
                    title: '2014',
                    order: 22,
                    checked: false
                },
                2015: {
                    title: '2015',
                    order: 23,
                    checked: false
                },
                2016: {
                    title: '2016',
                    order: 24,
                    checked: false
                },
                2017: {
                    title: '2017',
                    order: 25,
                    checked: false
                },
                2018: {
                    title: '2018',
                    order: 26,
                    checked: false
                },
                2019: {
                    title: '2019',
                    order: 27,
                    checked: true
                }
            },
            indicator: false
        },
        57831: {
            title: '\u041A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E-\u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0435\u043B\u0435\u043D\u0438\u044F (\u041E\u041A\u0410\u0422\u041E)',
            all: true,
            values: {
                1688487: {
                    title: '\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F',
                    order: 0,
                    checked: true
                },
                1688488: {
                    title: '\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 1,
                    checked: true
                },
                1688489: {
                    title: '\u0411\u0435\u043B\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 2,
                    checked: true
                },
                1688490: {
                    title: '\u0411\u0440\u044F\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 3,
                    checked: true
                },
                1688491: {
                    title: '\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 4,
                    checked: true
                },
                1688492: {
                    title: '\u0412\u043E\u0440\u043E\u043D\u0435\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 5,
                    checked: true
                },
                1688493: {
                    title: '\u0418\u0432\u0430\u043D\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 6,
                    checked: true
                },
                1688494: {
                    title: '\u041A\u0430\u043B\u0443\u0436\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 7,
                    checked: true
                },
                1688495: {
                    title: '\u041A\u043E\u0441\u0442\u0440\u043E\u043C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 8,
                    checked: true
                },
                1688496: {
                    title: '\u041A\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 9,
                    checked: true
                },
                1688497: {
                    title: '\u041B\u0438\u043F\u0435\u0446\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 10,
                    checked: true
                },
                1688498: {
                    title: '\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 11,
                    checked: true
                },
                1688499: {
                    title: '\u041E\u0440\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 12,
                    checked: true
                },
                1688500: {
                    title: '\u0420\u044F\u0437\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 13,
                    checked: true
                },
                1688501: {
                    title: '\u0421\u043C\u043E\u043B\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 14,
                    checked: true
                },
                1688502: {
                    title: '\u0422\u0430\u043C\u0431\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 15,
                    checked: true
                },
                1688503: {
                    title: '\u0422\u0432\u0435\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 16,
                    checked: true
                },
                1688504: {
                    title: '\u0422\u0443\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 17,
                    checked: true
                },
                1688505: {
                    title: '\u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 18,
                    checked: true
                },
                1688506: {
                    title: '\u0413\u043E\u0440\u043E\u0434 \u041C\u043E\u0441\u043A\u0432\u0430 \u0441\u0442\u043E\u043B\u0438\u0446\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0433\u043E\u0440\u043E\u0434 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F',
                    order: 19,
                    checked: true
                },
                1688507: {
                    title: '\u0421\u0435\u0432\u0435\u0440\u043E-\u0417\u0430\u043F\u0430\u0434\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 20,
                    checked: true
                },
                1688508: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0440\u0435\u043B\u0438\u044F',
                    order: 21,
                    checked: true
                },
                1688509: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u043E\u043C\u0438',
                    order: 22,
                    checked: true
                },
                1688510: {
                    title: '\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 23,
                    checked: true
                },
                1688511: {
                    title: '\u041D\u0435\u043D\u0435\u0446\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433 (\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C)',
                    order: 24,
                    checked: true
                },
                1688512: {
                    title: '\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C (\u0431\u0435\u0437 \u0410\u041E)',
                    order: 25,
                    checked: true
                },
                1692939: {
                    title: '\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C (\u043A\u0440\u043E\u043C\u0435 \u041D\u0435\u043D\u0435\u0446\u043A\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u0430)',
                    order: 26,
                    checked: true
                },
                1688513: {
                    title: '\u0412\u043E\u043B\u043E\u0433\u043E\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 27,
                    checked: true
                },
                1688514: {
                    title: '\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 28,
                    checked: true
                },
                1688515: {
                    title: '\u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 29,
                    checked: true
                },
                1688516: {
                    title: '\u041C\u0443\u0440\u043C\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 30,
                    checked: true
                },
                1688517: {
                    title: '\u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 31,
                    checked: true
                },
                1688518: {
                    title: '\u041F\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 32,
                    checked: true
                },
                1688519: {
                    title: '\u0413\u043E\u0440\u043E\u0434 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433 \u0433\u043E\u0440\u043E\u0434 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F',
                    order: 33,
                    checked: true
                },
                1688521: {
                    title: '\u042E\u0436\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433 (\u0441 2010 \u0433\u043E\u0434\u0430)',
                    order: 34,
                    checked: true
                },
                1692937: {
                    title: '\u042E\u0436\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433 (\u0441 29.07.2016)',
                    order: 35,
                    checked: true
                },
                1688522: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u0434\u044B\u0433\u0435\u044F (\u0410\u0434\u044B\u0433\u0435\u044F)',
                    order: 36,
                    checked: true
                },
                1688523: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u043B\u043C\u044B\u043A\u0438\u044F',
                    order: 37,
                    checked: true
                },
                1692938: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0440\u044B\u043C',
                    order: 38,
                    checked: true
                },
                1688524: {
                    title: '\u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 39,
                    checked: true
                },
                1688525: {
                    title: '\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 40,
                    checked: true
                },
                1688526: {
                    title: '\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 41,
                    checked: true
                },
                1688527: {
                    title: '\u0420\u043E\u0441\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 42,
                    checked: true
                },
                1695534: {
                    title: '\u0413\u043E\u0440\u043E\u0434 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0421\u0435\u0432\u0430\u0441\u0442\u043E\u043F\u043E\u043B\u044C',
                    order: 43,
                    checked: true
                },
                1688528: {
                    title: '\u0421\u0435\u0432\u0435\u0440\u043E-\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 44,
                    checked: true
                },
                1688529: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043D',
                    order: 45,
                    checked: true
                },
                1688530: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0418\u043D\u0433\u0443\u0448\u0435\u0442\u0438\u044F*',
                    order: 46,
                    checked: true
                },
                1688531: {
                    title: '\u041A\u0430\u0431\u0430\u0440\u0434\u0438\u043D\u043E-\u0411\u0430\u043B\u043A\u0430\u0440\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430',
                    order: 47,
                    checked: true
                },
                1688532: {
                    title: '\u041A\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043E-\u0427\u0435\u0440\u043A\u0435\u0441\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430',
                    order: 48,
                    checked: true
                },
                1688533: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u041E\u0441\u0435\u0442\u0438\u044F-\u0410\u043B\u0430\u043D\u0438\u044F',
                    order: 49,
                    checked: true
                },
                1688534: {
                    title: '\u0427\u0435\u0447\u0435\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430*',
                    order: 50,
                    checked: true
                },
                1688535: {
                    title: '\u0421\u0442\u0430\u0432\u0440\u043E\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 51,
                    checked: true
                },
                1688536: {
                    title: '\u041F\u0440\u0438\u0432\u043E\u043B\u0436\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 52,
                    checked: true
                },
                1688537: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0430\u0448\u043A\u043E\u0440\u0442\u043E\u0441\u0442\u0430\u043D',
                    order: 53,
                    checked: true
                },
                1688538: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u0430\u0440\u0438\u0439 \u042D\u043B',
                    order: 54,
                    checked: true
                },
                1688539: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041C\u043E\u0440\u0434\u043E\u0432\u0438\u044F',
                    order: 55,
                    checked: true
                },
                1688540: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043D (\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043D)',
                    order: 56,
                    checked: true
                },
                1688541: {
                    title: '\u0423\u0434\u043C\u0443\u0440\u0442\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430',
                    order: 57,
                    checked: true
                },
                1688542: {
                    title: '\u0427\u0443\u0432\u0430\u0448\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 - \u0427\u0443\u0432\u0430\u0448\u0438\u044F',
                    order: 58,
                    checked: true
                },
                1688543: {
                    title: '\u041F\u0435\u0440\u043C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 59,
                    checked: true
                },
                1688545: {
                    title: '\u041A\u0438\u0440\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 60,
                    checked: true
                },
                1688546: {
                    title: '\u041D\u0438\u0436\u0435\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 61,
                    checked: true
                },
                1688547: {
                    title: '\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 62,
                    checked: true
                },
                1688548: {
                    title: '\u041F\u0435\u043D\u0437\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 63,
                    checked: true
                },
                1688549: {
                    title: '\u0421\u0430\u043C\u0430\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 64,
                    checked: true
                },
                1688550: {
                    title: '\u0421\u0430\u0440\u0430\u0442\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 65,
                    checked: true
                },
                1688551: {
                    title: '\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 66,
                    checked: true
                },
                1688552: {
                    title: '\u0423\u0440\u0430\u043B\u044C\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 67,
                    checked: true
                },
                1688553: {
                    title: '\u041A\u0443\u0440\u0433\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 68,
                    checked: true
                },
                1688554: {
                    title: '\u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 69,
                    checked: true
                },
                1688555: {
                    title: '\u0422\u044E\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 70,
                    checked: true
                },
                1688556: {
                    title: '\u0425\u0430\u043D\u0442\u044B-\u041C\u0430\u043D\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433 - \u042E\u0433\u0440\u0430 (\u0422\u044E\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C)',
                    order: 71,
                    checked: true
                },
                1688557: {
                    title: '\u042F\u043C\u0430\u043B\u043E-\u041D\u0435\u043D\u0435\u0446\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433 (\u0422\u044E\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C)',
                    order: 72,
                    checked: true
                },
                1688558: {
                    title: '\u0422\u044E\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C (\u0431\u0435\u0437 \u0410\u041E)',
                    order: 73,
                    checked: true
                },
                1692940: {
                    title: '\u0422\u044E\u043C\u0435\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C (\u043A\u0440\u043E\u043C\u0435 \u0425\u0430\u043D\u0442\u044B-\u041C\u0430\u043D\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u0430-\u042E\u0433\u0440\u044B \u0438 \u042F\u043C\u0430\u043B\u043E-\u041D\u0435\u043D\u0435\u0446\u043A\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u0430)',
                    order: 74,
                    checked: true
                },
                1688559: {
                    title: '\u0427\u0435\u043B\u044F\u0431\u0438\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 75,
                    checked: true
                },
                1688560: {
                    title: '\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 76,
                    checked: true
                },
                1795276: {
                    title: '\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 77,
                    checked: true
                },
                1688561: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u043B\u0442\u0430\u0439',
                    order: 78,
                    checked: true
                },
                1688563: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u044B\u0432\u0430',
                    order: 79,
                    checked: true
                },
                1688564: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0425\u0430\u043A\u0430\u0441\u0438\u044F',
                    order: 80,
                    checked: true
                },
                1688565: {
                    title: '\u0410\u043B\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 81,
                    checked: true
                },
                1688568: {
                    title: '\u041A\u0440\u0430\u0441\u043D\u043E\u044F\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 82,
                    checked: true
                },
                1688571: {
                    title: '\u0418\u0440\u043A\u0443\u0442\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 83,
                    checked: true
                },
                1688573: {
                    title: '\u041A\u0435\u043C\u0435\u0440\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C - \u041A\u0443\u0437\u0431\u0430\u0441\u0441',
                    order: 84,
                    checked: true
                },
                1688574: {
                    title: '\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 85,
                    checked: true
                },
                1688575: {
                    title: '\u041E\u043C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 86,
                    checked: true
                },
                1688576: {
                    title: '\u0422\u043E\u043C\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 87,
                    checked: true
                },
                1688577: {
                    title: '\u0414\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 88,
                    checked: true
                },
                1795277: {
                    title: '\u0414\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 89,
                    checked: true
                },
                1688562: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0443\u0440\u044F\u0442\u0438\u044F',
                    order: 90,
                    checked: true
                },
                1688566: {
                    title: '\u0417\u0430\u0431\u0430\u0439\u043A\u0430\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 91,
                    checked: true
                },
                1688578: {
                    title: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0421\u0430\u0445\u0430 (\u042F\u043A\u0443\u0442\u0438\u044F)',
                    order: 92,
                    checked: true
                },
                1688579: {
                    title: '\u041A\u0430\u043C\u0447\u0430\u0442\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 93,
                    checked: true
                },
                1688581: {
                    title: '\u041F\u0440\u0438\u043C\u043E\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 94,
                    checked: true
                },
                1688582: {
                    title: '\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439',
                    order: 95,
                    checked: true
                },
                1688583: {
                    title: '\u0410\u043C\u0443\u0440\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 96,
                    checked: true
                },
                1688584: {
                    title: '\u041C\u0430\u0433\u0430\u0434\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 97,
                    checked: true
                },
                1688585: {
                    title: '\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 98,
                    checked: true
                },
                1688586: {
                    title: '\u0415\u0432\u0440\u0435\u0439\u0441\u043A\u0430\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C',
                    order: 99,
                    checked: true
                },
                1688587: {
                    title: '\u0427\u0443\u043A\u043E\u0442\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 100,
                    checked: true
                },
                1697988: {
                    title: '\u041A\u0440\u044B\u043C\u0441\u043A\u0438\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433',
                    order: 101,
                    checked: true
                }
            },
            indicator: false
        },
        30611: {
            title: '\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F',
            all: true,
            values: {
                950473: {
                    title: '\u043F\u0440\u043E\u0446\u0435\u043D\u0442',
                    order: 0,
                    checked: true
                }
            },
            indicator: false
        },
        33560: {
            title: '\u041F\u0435\u0440\u0438\u043E\u0434',
            all: true,
            values: {
                1540286: {
                    title: '\u044F\u043D\u0432\u0430\u0440\u044C-\u0434\u0435\u043A\u0430\u0431\u0440\u044C',
                    order: 0,
                    checked: true
                },
                1558883: {
                    title: '\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F \u0437\u0430 \u0433\u043E\u0434',
                    order: 1,
                    checked: true
                }
            },
            indicator: false
        }
    },
    left_columns: [
        33560, 57831, 30611, 3
    ],
    top_columns: [
        0
    ],
    groups: [
        
    ],
    filterObjectIds: [
        
    ]
});
           `;
  const postBody = [];
  const rawGridObjects = rawGrid.slice(rawGrid.indexOf('new FGrid(') + 10);
  const titles = Array.from(rawGridObjects.matchAll(/title: '(.+?)',/));
  postBody.push({ lineObjectIds: '0' });
  const leftColumnsString = rawGridObjects.match(/left_columns: \[\s*(.+)\s*]/);
  if (leftColumnsString) {
    removeSpaces(leftColumnsString[1]).split(',').forEach((column) => {
      postBody.push({ lineObjectIds: column });
    });
  }
  const topColumns = rawGridObjects.match(/top_columns: \[\s*(.+)\s*]/);
  if (topColumns) {
    removeSpaces(topColumns[1]).split(',').forEach((column) => {
      postBody.push({ columnObjectIds: column });
    });
  }

  // const filters = Array.from(rawGridObjects.matchAll(/filter:{(.+?)\',/g));

  let nesting = 0;
  let prefix = '';
  let suffix = '';
  const arrayOfLines = rawGrid.match(/[^\r\n]+/g);
  const filterPostition = arrayOfLines.findIndex((line) => line.includes('filters'));
  for (let i = filterPostition + 1; i < arrayOfLines.length; i++) {
    if (arrayOfLines[i].includes('{')) {
      nesting += 1;
    }
    if (arrayOfLines[i].includes('}')) {
      nesting -= 1;
    }
    if (arrayOfLines[i].match(/\d+: {/g)) {
      if (nesting <= 2) {
        [prefix] = removeSpaces(arrayOfLines[i]).split(':');
      }
      if (nesting > 2) {
        [suffix] = removeSpaces(arrayOfLines[i]).split(':');
        postBody.push({ selectedFilterIds: `${prefix}_${suffix}` });
      }
    }
  }

  postBody.push({ id: 'id' });
  console.log(postBody);
  return postBody;
})();
