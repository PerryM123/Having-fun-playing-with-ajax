
let pageNum = 0; // 初期値

const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

function pageInit() {

	let pageAmount = 0;
	$.ajax({
	  type: 'GET',
	  url: './data/pageData.json',
	  dataType: 'json',
	  success: function(json){
	    let len = Object.keys(json.People).length;
		prevButton.classList.add("hideme");
	    pageAmount = len;
	      $("#here").html(
	'<div class="profile"><h3>Name: ' + json.People[0].name + ' </h3><img src="' + json.People[0].images + '"" /><p>Description: ' + json.People[0].description + '</p></div>'
	      );
	  }
	});
	return pageAmount;
}

function nextButtonHandler() {
	pageNum++;

	if (pageNum > 5) {
		nextButton.classList.add("hideme");
		pageNum = 6; // need a way to get the max to automated...
	}
	if (pageNum > 0 && pageNum < 6) {
		nextButton.classList.remove("hideme");
		prevButton.classList.remove("hideme");
	}
	$.ajax({
	  type: 'GET',
	  url: './data/pageData.json',
	  dataType: 'json',
	  success: function(json){
	    let len = Object.keys(json.People).length;
	      $("#here").html(
	'<div class="profile"><h3>Name: ' + json.People[pageNum].name + ' </h3><img src="' + json.People[pageNum].images + '"" /><p>Description: ' + json.People[pageNum].description + '</p></div>'
	      );
	  }
	});
}

function prevButtonHandler() {
	pageNum--;
	if (pageNum > 0 && pageNum < 6) {
		nextButton.classList.remove("hideme");
		prevButton.classList.remove("hideme");
	}
	if (pageNum < 1) {
		prevButton.classList.add("hideme");
		pageNum = 0; // need a way to get the max to automated...
	}
	// if second to last or less, remove class
	$.ajax({
	  type: 'GET',
	  url: './data/pageData.json',
	  dataType: 'json',
	  success: function(json){
	    let len = Object.keys(json.People).length;
	      $("#here").html(
	'<div class="profile"><h3>Name: ' + json.People[pageNum].name + ' </h3><img src="' + json.People[pageNum].images + '"" /><p>Description: ' + json.People[pageNum].description + '</p></div>'
	      );
	  }
	});
}

prevButton.addEventListener('click', prevButtonHandler);
nextButton.addEventListener('click', nextButtonHandler);