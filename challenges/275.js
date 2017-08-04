
function convertHTML(str) {
  /*

Name	Character	Unicode code point (decimal)	Standard	Description
quot	"	U+0022 (34)	XML 1.0	double quotation mark
amp	&	U+0026 (38)	XML 1.0	ampersand
apos	'	U+0027 (39)	XML 1.0	apostrophe (apostrophe-quote)
lt	<	U+003C (60)	XML 1.0	less-than sign
gt	>	U+003E (62)	XML 1.0	greater-than sign

  */
var result = "";
  // iterate backwards through string
  for (var i in str) {
    if (str.charAt(i)=='"') {result+="&quot;"}
    else if (str.charAt(i)=='&') {result+="&amp;"}
    else if (str.charAt(i)=='\'') {result+="&apos;"}
    else if (str.charAt(i)=='<') {result+="&lt;"}
    else if (str.charAt(i)=='>') {result += "&gt;"}
    else {result+=str.charAt(i);};
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
