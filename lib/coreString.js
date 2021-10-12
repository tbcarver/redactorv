
import coreRegEx from "./coreRegEx";

var coreString = {};

coreString.replaceAllWords = function(value, words, newWord) {

	if (value && words && words.length > 0) {

		words = words.map((value) => {
			return "\\b" + coreRegEx.escapeRegEx(value) + "\\b";
		});

		const substring = words.reduce((result, value) => {
			result += "|" + value;
			return result;
		});
	
		const valuesRegExp = new RegExp(substring, "gi");
		value = value.replace(valuesRegExp, newWord);
	}

	return value;
};

export default coreString;