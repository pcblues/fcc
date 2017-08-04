
function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1 ?)?([0-9][0-9][0-9]|\([0-9][0-9][0-9]\))[ |-]?[0-9][0-9][0-9][ |-]?[0-9][0-9][0-9][0-9]$/gm;
  var result = regex.exec(str);
  if (result===null) return false;
  if (result.length>1) return true;
  return false;
}



console.log(telephoneCheck("5555555555"));
