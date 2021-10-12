
import coreString from "../lib/coreString";

var redactor = {};

redactor.redact = function(keywordsPharases, document) {

	const replacement = "XXXX";

	if (keywordsPharases && document) {
		const { keywords, phrases } = parseKeywordsPharases(keywordsPharases);
	
		document = coreString.replaceAll(document, phrases, replacement);
		document = coreString.replaceAll(document, keywords, replacement);		
	}

	return document;
}

function parseKeywordsPharases(keywordsPharases) {

	var result = {
		keywords: "",
		phrases: []
	}

	if (keywordsPharases) {

		result["keywords"] = keywordsPharases.replace(/["|']([^"|']+)["|']/gm, function(match, group) {
			result["phrases"].push(group);
			return "";
		});
	
		result["keywords"] = result["keywords"].match(/[^\s|,]+/gm);
	}

	return result;
}

export default redactor