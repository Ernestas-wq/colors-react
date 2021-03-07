export const getSavedColorList = () => {
  const savedColorList = localStorage.getItem('savedColorList');

  return savedColorList ? [...new Set(JSON.parse(savedColorList))] : [];
};
