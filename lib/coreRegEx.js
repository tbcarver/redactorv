
var coreRegEx = {};
var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

coreRegEx.escapeRegEx = function(text) {

	if (typeof text !== "string") {
		throw new TypeError("Expected a string");
	}

	return text.replace(matchOperatorsRe, "\\$&");
}

export default coreRegEx;