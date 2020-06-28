import { json2excel } from 'js2excel';
import { Parser } from 'json2csv';

export const randomColor = (() => {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return () => {
    const h = randomInt(0, 360);
    const s = randomInt(42, 98);
    const l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };
})();

export const exportToJson = (objectData) => {
  const filename = 'export.json';
  const contentType = 'application/json;charset=utf-8;';
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement('a');
    a.download = filename;
    a.href = `data:${contentType},${encodeURIComponent(JSON.stringify(objectData))}`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

export const exportToCSV = (objectData) => {
  const fields = ['Indicator.title', 'Region.reg_alias_human_name', 'year', 'value', 'measurement_unit'];
  const opts = { fields };
  try {
    const parser = new Parser(opts);
    const csv = parser.parse(objectData);
    const filename = 'export.csv';
    const contentType = 'application/json;charset=utf-8;';
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      const blob = new Blob([decodeURIComponent(encodeURI(csv))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      a.download = filename;
      a.href = `data:${contentType},${encodeURIComponent(csv)}`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (err) {
    console.error(err);
  }
};

export const exportToXLSX = (objectData) => {
  const flattenData = objectData.map((stat) => ({
    Индикатор: stat.Indicator.title, Регион: stat.Region.reg_alias_human_name, Год: stat.year, Значение: stat.value, 'Единицы измерения': stat.measurement_unit,
  }));
  try {
    const filename = 'export';
    const excel = json2excel({
      data: flattenData,
      name: filename,
      formateDate: 'yyyy/mm/dd',
    });
  } catch (err) {
    console.error(err);
  }
};

export const addOrdinalToNumber = (labelValue) => {
  // Nine Zeroes for Trilliards
  return Math.abs(Number(labelValue)) >= 1.0e+12

    ? `${(Number(labelValue) / 1.0e+12).toFixed(2)} трлн.`
  // Nine Zeroes for Billions
    : Math.abs(Number(labelValue)) >= 1.0e+9

      ? `${(Number(labelValue) / 1.0e+9).toFixed(2)} млрд.`
    // Six Zeroes for Millions
      : Math.abs(Number(labelValue)) >= 1.0e+6

        ? `${(Number(labelValue) / 1.0e+6).toFixed(2)} млн.`
      // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

          ? `${(Number(labelValue) / 1.0e+3).toFixed(2)} тыс.`

          : Number(labelValue).toFixed(2);
};
