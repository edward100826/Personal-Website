var setLanguage = lang => {
	$.getJSON(`lang/${lang}.json`, translate);
	$(`.lang-btn`).removeClass('d-none');
	$(`#${lang}`).addClass('d-none');
}

var translate = jsdata => $("[key]").each((idx,em) => $(em).html(jsdata [$(em).attr ('key')]));

var lang_list=['en','zh'];
var language = window.navigator.language.substr(0,2);