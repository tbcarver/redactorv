
import coreRegEx from "./coreRegEx";

var coreString = {};

coreString.replaceAll = function(value, substrings, newSubstring) {

	if (value && substrings && substrings.length > 0) {

		const substring = substrings.reduce((result, value) => {
			result += "|" + coreRegEx.escapeRegEx(value);
			return result;
		});
	
		const valuesRegExp = new RegExp(substring, "gi");
		value = value.replace(valuesRegExp, newSubstring);
	}

	return value;
};

export default coreString;