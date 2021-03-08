export const getSavedColorList = () => {
  const savedColorList = localStorage.getItem('savedColorList');
  return savedColorList ? JSON.parse(savedColorList) : {};
};

export const validateUniqueColor = (colorList, newColor) => newColor in colorList;

export const validateHex = hexString =>
  new RegExp(/^#([0-9A-F]{3}){1,2}$/i).test(hexString);
