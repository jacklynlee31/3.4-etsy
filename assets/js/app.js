var contentEl = document.querySelector('.content');

function registerByQuery (querySelector) {
	var templateString = document.querySelector(querySelector).innerHTML;
	templateString = templateString.replace('&gt;' , '>');

	return Handlebars.compile(templateString);
}

function registerPartialByQuery (name) {
	var templateString = document.querySelector('#' + name + '-partial').innerHTML;
	templateString = templateString.replace('&gt;' , '>');

	return Handlebars.registerPartial(name, templateString);
}

registerPartialByQuery('article');

// Handlebars.registerHelper('my-date', function (dateString) {
// 	var d = new Date(dateString);

// 	return d.getMonth();
// });

var handlebarsTemplate = registerByQuery('#main-template');

loadEtsy('painting', function (data) {
	var allArticles = '';

	allArticles += handlebarsTemplate(data);

	contentEl.innerHTML = allArticles;
});



// loadEtsy('whiskey', someFunctionIDeclaredToHandleTheData)
// load in the results for whiskey and send those results to a
// function named `someFunctionIDeclaredToHandleTheData

// loadEtsy` is just like today's `loadData` but before our callback we need to pass in a string to say what we want to search for

// {
//   title: 'hey',
//   name: 'Mr. T'
// }
