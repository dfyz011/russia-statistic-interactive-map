const fs = require('fs');
const { parseBudget } = require('./indicators');

(async () => {
  const { statistic, indicators } = await parseBudget();
  console.log('indicators', indicators);
  fs.writeFile('Output2.txt', JSON.stringify(statistic), (err) => {
    if (err) throw err;
  });
})();
