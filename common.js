/*
Global Variables can be used freely throughout the program.

Thank you Hiroaki.


*/

let pageNum = 0; // 初期値

const $previousButton = $('#mid-button1');
const $nextButton = $('#mid-button2');
let jsonData = "";
firstLoad();

function firstLoad() {
	let cat = 4;
	$.ajax({
	  type: 'GET',
	  url: './data/pageData.json',
	  dataType: 'json',
	  success: function(json) {
      jsonData = json;
      addData();
	  }
	});
	$previousButton.addClass("hideme"); // 初発行なので１ページになり、Prevボタンを非表示にします。
}

function addData() {
	let len = Object.keys(jsonData.People).length;
  $("#here").html(
'<div class="profile"><h3>Name: ' + jsonData.People[pageNum].name + ' </h3><img src="' + jsonData.People[pageNum].images + '"" /><p>Description: ' + jsonData.People[pageNum].description + '</p></div>'
      );
}



function buttonHandler(event) {
	$previousButton.removeClass("hideme");
	$nextButton.removeClass("hideme");
	let buttonId = event.target.id;
	if (buttonId == "mid-button1") {
		pageNum--;
	}
	if (buttonId == "mid-button2") {
		pageNum++;
	}
	if (pageNum < 0) {
		pageNum = 0;
	}
	if (pageNum > 6) {
		pageNum = 6;
	}
	if (pageNum == 0) {
		$previousButton.addClass("hideme");
	}
	if (pageNum == 6) {
		$nextButton.addClass("hideme");
	}
    addData();
}

$previousButton.on('click', buttonHandler);
$nextButton.on('click', buttonHandler);

