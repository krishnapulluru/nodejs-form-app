module.exports = (temp, obj) => {
  let output = temp.replace(/{%IMAGE%}/g, obj.image);
  output = output.replace(/{%TITLE_NAME%}/g, obj.productName);
  output = output.replace(/{%QUANTITY%}/g, obj.quantity);
  output = output.replace(/{%PRICE%}/g, obj.price);
  output = output.replace(/{%FROMWHERE%}/g, obj.from);
  output = output.replace(/{%VITAMINS%}/g, obj.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, obj.description);
  output = output.replace(/{%ID%}/g, obj.id);
  if (!obj.organic) output = output.replace(/{%NOT-ORGANIC%}/g, 'not-organic');
  return output;
};
