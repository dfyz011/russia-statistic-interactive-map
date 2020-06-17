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

export const addOrdinalToNumber = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

    ? `${(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2)} млн.`
  // Six Zeroes for Millions
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? `${(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2)} млрд.`
    // Three Zeroes for Thousands
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? `${(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2)} трлн.`

        : Math.abs(Number(labelValue).toFixed(2));
};
