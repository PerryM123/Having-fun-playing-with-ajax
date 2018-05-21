let pageNum = 0; // 初期値

const $midButton1 = $('#mid-button1');
const $midButton2 = $('#mid-button2');
firstLoad();

function firstLoad() {
	$.ajax({
	  type: 'GET',
	  url: './data/pageData.json',
	  dataType: 'json',
	  success: function(json) {
	    let len = Object.keys(json.People).length;
			$midButton1.addClass("hideme"); // 初発行なので１ページになり、Prevボタンを非表示にします。
      $("#here").html(
	'<div class="profile"><h3>Name: ' + json.People[0].name + ' </h3><img src="' + json.People[0].images + '"" /><p>Description: ' + json.People[0].description + '</p></div>'
      );
	  }
	});
}

function buttonHandler(event) {
	$midButton1.removeClass("hideme");
	$midButton2.removeClass("hideme");
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
		$midButton1.addClass("hideme");
	}
	if (pageNum == 6) {
		$midButton2.addClass("hideme");
	}
	$.ajax({
	  type: 'GET',
	  url: './data/pageData___.json', // 無理やりエラーを発行し、正しいのは：　./data/pageData.json
	  dataType: 'json',
	  success: function(json) {
	    let len = Object.keys(json.People).length;
	      $("#here").html(
	'<div class="profile"><h3>Name: ' + json.People[pageNum].name + ' </h3><img src="' + json.People[pageNum].images + '"" /><p>Description: ' + json.People[pageNum].description + '</p></div>'
	      );
	  },
	  error: function() {
	  	$("#here").html(
	'<div class="profile">error!!!</div>'
	      );
	  }
	});
}

$midButton1.on('click', buttonHandler);
$midButton2.on('click', buttonHandler);

