// ==UserScript==
// @name         4e Qually Power+
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Мультипородный качер для команд
// @author       4eDo + Eva Light команда https://vk.com/botqually
// @match        https://www.lowadi.com/*
// ==/UserScript==

var version = '0.5';

setTimeout(getSinglePause, 100); setTimeout(getDoLesson, 100); setTimeout(getBabyPlay, 100); setTimeout(getWalkOption1, 100); setTimeout(getWalkOption2, 100); setTimeout(getAmountHorses, 100); setTimeout(getTrainOption1, 100); setTimeout(getTrainOption2, 100);  setTimeout(getTrainOption3, 100); setTimeout(getTrainOption4, 100);  setTimeout(getTrainOption5, 100); setTimeout(getTrainOption6, 100);  setTimeout(getTrain2Option1, 100); setTimeout(getTrain2Option2, 100); setTimeout(getTrain2Option3, 100);  setTimeout(getTrain2Option4, 100); setTimeout(getTrain2Option5, 100); setTimeout(getTrain2Option6, 100); setTimeout(getSpecOption, 100); setTimeout(getAmunitionOption, 100); setTimeout(getBandeOption, 100); setTimeout(getBonnetOption, 100);
setTimeout(getCompOption1, 100); setTimeout(getCompOption2, 100); setTimeout(getCompOption3, 100); setTimeout(getCompOption4, 100); setTimeout(getCompOption5, 100); setTimeout(getComp2Option1, 100); setTimeout(getComp2Option2, 100); setTimeout(getComp2Option3, 100); setTimeout(getComp2Option4, 100); setTimeout(getComp2Option5, 100);
setTimeout(getAmountCovers, 100); setTimeout(getBoyName, 100); setTimeout(getGirlName, 100); setTimeout(getAffixeOption, 100); setTimeout(getContainerOption, 100); setTimeout(getKsk, 100); setTimeout(getPlace, 100); setTimeout(getDuree, 100); setTimeout(getKskCarrot, 100);
setTimeout(getKskMash, 100); setTimeout(getPlace2, 100); setTimeout(getDuree2, 100); setTimeout(getKskCarrot2, 100);
setTimeout(getKskMash2, 100); setTimeout(getMyKsk, 100); setTimeout(getReservedKsk, 100);

var startQPower = localStorage.getItem('startQPower');
var pauseQPower = localStorage.getItem('pauseQPower');
var singlePause = +localStorage.getItem('singlePause') + Math.floor(Math.random() * (150 - 150*-1 + 1)) -150;
if (singlePause == null) {singlePause = 500 + Math.floor(Math.random() * (150 - 150*-1 + 1)) -150;}
var doLesson = +localStorage.getItem('doLesson');
var babyPlay = +localStorage.getItem('babyPlay');
var walkOption1 = localStorage.getItem('walkOption1');
if (walkOption1 == null) {walkOption1 = '';}
var walkOption2 = localStorage.getItem('walkOption2');
if (walkOption2 == null) {walkOption2 = '';}
var amountHorses = +localStorage.getItem('amountHorses');
var trainOption1 = localStorage.getItem('trainOption1');
if (trainOption1 == null) {trainOption1 = '';}
var trainOption2 = localStorage.getItem('trainOption2');
if (trainOption2 == null) {trainOption2 = '';}
var trainOption3 = localStorage.getItem('trainOption3');
if (trainOption3 == null) {trainOption3 = '';}
var trainOption4 = localStorage.getItem('trainOption4');
if (trainOption4 == null) {trainOption4 = '';}
var trainOption5 = localStorage.getItem('trainOption5');
if (trainOption5 == null) {trainOption5 = '';}
var trainOption6 = localStorage.getItem('trainOption6');
if (trainOption6 == null) {trainOption6 = '';}
var train2Option1 = localStorage.getItem('train2Option1');
if (train2Option1 == null) {train2Option1 = '';}
var train2Option2 = localStorage.getItem('train2Option2');
if (train2Option2 == null) {train2Option2 = '';}
var train2Option3 = localStorage.getItem('train2Option3');
if (train2Option3 == null) {train2Option3 = '';}
var train2Option4 = localStorage.getItem('train2Option4');
if (train2Option4 == null) {train2Option4 = '';}
var train2Option5 = localStorage.getItem('train2Option5');
if (train2Option5 == null) {train2Option5 = '';}
var train2Option6 = localStorage.getItem('train2Option6');
if (train2Option6 == null) {train2Option6 = '';}
var specOption = +localStorage.getItem('specOption');
var selle = +localStorage.getItem('amunitionOption');
var bride = +localStorage.getItem('amunitionOption');
if ((selle == null) || (bride == null)) {selle = 1; bride = 1;}
var bande = +localStorage.getItem('bandeOption');
var bonnet = +localStorage.getItem('bonnetOption');
var compOption1 = localStorage.getItem('compOption1');
if (compOption1 == null) {compOption1 = '';}
var compOption2 = localStorage.getItem('compOption2');
if (compOption2 == null) {compOption2 = '';}
var compOption3 = localStorage.getItem('compOption3');
if (compOption3 == null) {compOption3 = '';}
var compOption4 = localStorage.getItem('compOption4');
if (compOption4 == null) {compOption4 = '';}
var compOption5 = localStorage.getItem('compOption5');
if (compOption5 == null) {compOption5 = '';}
var comp2Option1 = localStorage.getItem('comp2Option1');
if (comp2Option1 == null) {comp2Option1 = '';}
var comp2Option2 = localStorage.getItem('comp2Option2');
if (comp2Option2 == null) {comp2Option2 = '';}
var comp2Option3 = localStorage.getItem('comp2Option3');
if (comp2Option3 == null) {comp2Option3 = '';}
var comp2Option4 = localStorage.getItem('comp2Option4');
if (comp2Option4 == null) {comp2Option4 = '';}
var comp2Option5 = localStorage.getItem('comp2Option5');
if (comp2Option5 == null) {comp2Option5 = '';}
var amount = +localStorage.getItem('amountCovers');
if (amount == null) {amount = 0;}
var girlName = localStorage.getItem('girlName');
if (girlName == null) {girlName = 'Жен';}
var boyName = localStorage.getItem('boyName');
if (boyName == null) {girlName = 'Муж';}
var affixe = localStorage.getItem('affixeOption');
if (affixe == null) {affixe = '';}
var container = localStorage.getItem('containerOption');
if (container == null) {container = '';}
var ksk = localStorage.getItem('ksk');
var place = localStorage.getItem('place');
var duree = +localStorage.getItem('duree');
var kskCarrot = localStorage.getItem('kskCarrot');
var kskMash = localStorage.getItem('kskMash');
var place2 = localStorage.getItem('place2');
var duree2 = +localStorage.getItem('duree2');
var kskCarrot2 = localStorage.getItem('kskCarrot2');
var kskMash2 = localStorage.getItem('kskMash2');
var myKsk = localStorage.getItem('myKsk');
var reservedKsk = localStorage.getItem('reservedKsk');
var amountNow = +localStorage.getItem('amountNow');
/*----------------------------------------------------------------------------------------------------------------------*/
var walkPoints = 0;
var plusSchet = 0;
var doMash = 1;
var doCare = 0;
var doCarrot = 0;
var doDrink = 0;
var doublePause = singlePause*2;
var triplePause = singlePause*3;
var pause = singlePause;
var maxtime = 1320; //22:00
var kobVal;
var kob = localStorage.getItem('kob');
if ($('body#global #race12').length == 0) {
$('body#global').append('<select class="select" name="race" id="race12"><option value="" selected="selected">не важно</option><optgroup label="Лошади"><option value="58">Американская кучерявая</option><option value="38">Английская чистокровная</option><option value="43">Аппалуза</option><option value="31">Арабская Чистокровная</option><option value="60">Аргентинский Криолло</option><option value="30">Ахалтекинская</option><option value="75">Берберийская лошадь</option><option value="32">Буденновская</option><option value="61">Голландская теплокровная</option><option value="45">Голштинская лошадь</option><option value="33">Донская</option><option value="53">Ирландская охотничья</option><option value="63">Исландская Лошадь</option><option value="74">Камаргская</option><option value="57">Кнабструппер</option><option value="46">Липиццан</option><option value="50">Лошадь лузитанской породы</option><option value="47">Марвари</option><option value="55">Мустанг</option><option value="56">Нокота</option><option value="39">Орловский рысак</option><option value="36">Пейнт</option><option value="59">Теннесийская прогулочная</option><option value="51">Тракененская</option><option value="73">Французская Верховая</option><option value="65">Французский Рысак</option><option value="34">Фриз, Фризская</option><option value="35">Хановериян, Ганноверская</option><option value="52">Цыганская упряжная</option><option value="44">Четвертьмильная лошадь</option><option value="37">Чистокровная испанская</option><option value="54">Шагия</option></optgroup><optgroup label="Пони"><option value="41">Бельгийский</option><option value="72">Керри бог</option><option value="40">Коннемара</option><option value="76">Ньюфаундлендский Пони</option><option value="64">Пони Хайленд</option><option value="42">Уэльский</option><option value="70">Фьорд</option><option value="48">Хафлингер</option><option value="62">Шетландский пони</option></optgroup></select>');
}
for (var i = 0; i < $('#race12 option').length; i++) {
	console.log($('#race12 option').eq(i).text());
	if ($('#race12 option').eq(i).text().indexOf(kob) !== -1) {kobVal = $('#race option').eq(i).attr('value');}
}
kob = kobVal;
/*$.ajax({
	url : "https://www.lowadi.com/equipe/",
	success : function(result) {
        if (result.indexOf('Пейнт') !== -1) {
			if (result.indexOf('Двадцать&nbsp;пятый&nbsp;кадр') !== -1) {
				localStorage.setItem('paintConcurence', 'we');
			}
			else {localStorage.setItem('paintConcurence', 'yes');}
		}
		else {localStorage.setItem('paintConcurence', 'no');}
    }
});*/
if (location.href.indexOf('chevaux/cheval?id') !== -1) {
	if ((place2 == 'Лес') && ($('#center-wrapper .centerLocalisation').hasClass('centerLocalisationForet'))) {localStorage.removeItem('throwedOut');}
	if ((place2 == 'Горы') && ($('#center-wrapper .centerLocalisation').hasClass('centerLocalisationMontagne'))) {localStorage.removeItem('throwedOut');}
	if (enduranceComplet && vitesseComplet && dressageComplet && galopComplet && trotComplet && sautComplet) {doLesson = 1;}
	if (($('#boutonEchographie').length !== 0) && ($('#boutonEchographie').hasClass('action-disabled') === false)) {doLesson = 1;}
	if (getMerch('Ахиллесова пята')) {maxtime = 1440;} //24:00
	if (getCenter() == 'Лес') {var fp = 100 - b3;} else {var fp = 2*(100 - b3);}
	if (getCenter() == 'Горы') {var mp = 100 - b1;} else {var mp = 2*(100 - b1);}
	var pp = beachPercent();
	if (chevalDouche === false) {
		if (chevalAge < 18) {
			switch(chevalAge) {
			case 8: playEnergy = 6; break;
			case 10: playEnergy = 5.5; break;
			case 12: playEnergy = 5; break;
			case 14: playEnergy = 4.5; break;
			case 16: playEnergy = 6; break;
			}
		}
		else {walkEnergy = 9; vitalEnergy = 8; goEnergy = 5; runEnergy = 7;}
	}
	else {
		if (chevalAge < 18) {
			switch(chevalAge) {
			case 8: playEnergy = 5.4; break;
			case 10: playEnergy = 4.95; break;
			case 12: playEnergy = 4.5; break;
			case 14: playEnergy = 4.05; break;
			case 16: playEnergy = 3.6; break;
			}
		}
		else {walkEnergy = 8.1; vitalEnergy = 7.2; goEnergy = 4.5; runEnergy = 6.3;}
	}
}



/*--------------Рабочие переменные--------------*/
var growButton = 0; var compButton = 0; var backButton = 0; var kskButton = 0; var reloadButton = 0; var sluchButton = 0; var breedButton = 0; var takeButton = 0; var showButton = 0; var prevButton = 0; var saveButton = 0;
function clearNulls() {saveButton = 0; prevButton = 0; showButton = 0; takeButton = 0; growButton = 0; compButton = 0; backButton = 0; kskButton = 0; reloadButton = 0; sluchButton = 0; breedButton = 0;}

/*-------------Запись в КСК-------------*/
function kskWrite() {
	if (location.href.indexOf('chevaux/cheval?id') !== -1) {
		if (chevalAge == 6) {
			var a = document.getElementById('cheval-inscription');
			if (a !== null) {a = a.firstChild;}
			if (a !== null) {if ($(a).hasClass('action-disabled') === false) {a.click();}}
		}
		else if (finishWalk(walkOption1) && ((ksk == '10') || (ksk == '11')) && ($('#center-tab-main button:contains("Отменить размещение")').length !== 0)) {localStorage.setItem('throwedOut', 1); $('#center-tab-main button:contains("Отменить размещение")').click();}
		else {
			var a = document.getElementById('cheval-inscription');
			if (a !== null) {a = a.firstChild;}
			if (a !== null) {if ($(a).hasClass('action-disabled') === false) {a.click();}}
		}
	}
	else if (location.href.indexOf('chevaux/centreInscription?id') !== -1) {
		var three;
		var pl;
		switch (ksk) {
			case '00':
				if ($('#abreuvoir').val() !== '1') {$('#abreuvoir').click();}
				else if ($('#douche').val() !== '1') {$('#douche').click();}
				else if ((kskCarrot == '1') && ($('#carotte').val() !== '1')) {$('#carotte').click();}
				else if ((kskMash == '1') && ($('#mash').val() !== '1')) {$('#mash').click();}
				else if ((place == 'Лес') && ($('#foret').val() !== '1')) {$('#foret').click(); three = true;}
				else if ((place == 'Горы') && ($('#montagne').val() !== '1')) {$('#montagne').click(); three = true;}
				else if (three) {$('button:contains("Показать лучшие КСК")').click(); three = false;}
				else if ($('#centresContent img[alt^="ascendant"]').length === 0) {$('td[colspan^="5"] .grid-cell.spacer-small-top a').eq(duree).click();}
				else {
					if (kskButton === 0) {$('#centresContent .highlight:eq(0) button:eq('+duree+')').click(); kskButton = 1;}
				}
			break;
			case '01':
				if (place == 'Лес') {pl = 'centerLocalisationForet';} else if (place == 'Горы') {pl = 'centerLocalisationMontagne';} else {pl = '';}
				if ($('#tab-centre-equestre').hasClass('selected')) {$('#tab-box-reserve a').click();}
				else if ($('#boxContent img[alt^="descendant"]').length === 0) {$('#boxContent .row-1 a:contains("Престиж")').click();}
				else {
					for (var i = 0; i < $('#boxContent .highlight').length; i++) {
						if (($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле имеется душ"]').length !== 0) && ($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле есть автопоилка"]').length !== 0) && ($('#boxContent .highlight .centerLocalisation').eq(i).hasClass(pl)) && ($('#boxContent .highlight:eq('+i+') button:eq('+duree+')').hasClass('disabled') == false)) {
								if (kskButton === 0) {$('#boxContent .highlight:eq('+i+') button:eq('+duree+')').click(); kskButton = 1; break;}
						}
					}
				}
			break;
			case '10':
				if (localStorage.getItem('throwedOut') == '1') {
					if ($('#abreuvoir').val() !== '1') {$('#abreuvoir').click();}
					else if ($('#douche').val() !== '1') {$('#douche').click();}
					else if ((place2 == 'Лес') && ($('#foret').val() !== '1')) {$('#foret').click(); three = true;}
					else if ((place2 == 'Горы') && ($('#montagne').val() !== '1')) {$('#montagne').click(); three = true;}
					else if (three) {$('button:contains("Показать лучшие КСК")').click(); three = false;}
					else if ($('#centresContent img[alt^="ascendant"]').length === 0) {$('td[colspan^="5"] .grid-cell.spacer-small-top a').eq(duree2).click();}
					else {
						if (kskButton === 0) {$('#centresContent .highlight:eq(0) button:eq('+duree2+')').click(); kskButton = 1;}
					}
				}
				else {
					if (place == 'Лес') {pl = 'centerLocalisationForet';} else if (place == 'Горы') {pl = 'centerLocalisationMontagne';} else {pl = '';}
					if ($('#tab-centre-equestre').hasClass('selected')) {$('#tab-box-reserve a').click();}
					else {
						for (var i = 0; i < $('#boxContent .highlight').length; i++) {
							if (($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле имеется душ"]').length !== 0) && ($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле есть автопоилка"]').length !== 0) && ($('#boxContent .highlight:eq('+i+') .align-left a.centerLocalisation').attr('href') == '/centre/fiche?id='+ String(myKsk)) && ($('#boxContent .highlight .centerLocalisation').eq(i).hasClass(pl)) && ($('#boxContent .highlight:eq('+i+') button:eq('+duree+')').hasClass('disabled') == false)) {
									if (kskButton === 0) {$('#boxContent .highlight:eq('+i+') button:eq('+duree+')').click(); kskButton = 1; break;}
							}
						}
					}
				}
			break;
			case '11':
				if (localStorage.getItem('throwedOut') == '1') {
					if (place2 == 'Лес') {pl = 'centerLocalisationForet';} else if (place2 == 'Горы') {pl = 'centerLocalisationMontagne';} else {pl = '';}
					if ($('#tab-centre-equestre').hasClass('selected')) {$('#tab-box-reserve a').click();}
					else {
						for (var i = 0; i < $('#boxContent .highlight').length; i++) {
							if (($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле имеется душ"]').length !== 0) && ($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле есть автопоилка"]').length !== 0) && ($('#boxContent .highlight:eq('+i+') .align-left a.centerLocalisation').attr('href') == '/centre/fiche?id=' + String(reservedKsk)) && ($('#boxContent .highlight .centerLocalisation').eq(i).hasClass(pl)) && ($('#boxContent .highlight:eq('+i+') button:eq('+duree2+')').hasClass('disabled') == false)) {
									if (kskButton === 0) {$('#boxContent .highlight:eq('+i+') button:eq('+duree2+')').click(); kskButton = 1; break;}
							}
						}
					}
				}
				else {
					if (place == 'Лес') {pl = 'centerLocalisationForet';} else if (place == 'Горы') {pl = 'centerLocalisationMontagne';} else {pl = '';}
					if ($('#tab-centre-equestre').hasClass('selected')) {$('#tab-box-reserve a').click();}
					else {
						for (var i = 0; i < $('#boxContent .highlight').length; i++) {
							if (($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле имеется душ"]').length !== 0) && ($('#boxContent .highlight').eq(i).find('.align-center span[data-tooltip^="В этом стойле есть автопоилка"]').length !== 0) && ($('#boxContent .highlight:eq('+i+') .align-left a.centerLocalisation').attr('href') == '/centre/fiche?id=' + String(myKsk)) && ($('#boxContent .highlight .centerLocalisation').eq(i).hasClass(pl)) && ($('#boxContent .highlight:eq('+i+') button:eq('+duree+')').hasClass('disabled') == false)) {
									if (kskButton === 0) {$('#boxContent .highlight:eq('+i+') button:eq('+duree+')').click(); kskButton = 1; break;}
							}
						}
					}
				}
			break;
		}
	}
}
/*-------------Запись в КСК-------------*/

/*-----------------Функции ухода-----------------*/
function ufo() {$('#Ufo_0').click();}
function wash() {$('#boutonPanser').click();}
function lesson() {$('#mission-wrapper a').click();}
function care() {pause = singlePause; $('#boutonCaresser').click();}
function drink() {$('#boutonBoire').click();}
function carrot() {localStorage.removeItem('cantCompet'); $('#boutonCarotte').click();}
function mash() {walkPoints = 0; $('#boutonMash').click();}
function milk() {$('#boutonAllaiter').click();}
function feed() {
	pause = singlePause;
	var walkPoints = 0;
	if ($('#fieldError-eat-hay-max').length !== 0) {throw new SyntaxError('Ошибка');}
	if (chevalAge > 4) {
		var numbers = $('.float-right.section-fourrage.section-fourrage-quantity').text().trim().split(' / ');
		var toGive = +numbers[1];
		var given = +numbers[0];
		if ($('#care-tab-feed #messageBoxInline').text().indexOf('недостаточный') !== -1) {toGive = 20 - given;}
		$('#haySlider li:eq('+(toGive-given)+')').click();
		if (chevalAge > 16) {
			var numbers1 = $('.float-right.section-avoine.section-avoine-quantity').text().trim().split(' / ');
			var toGive1 = +numbers1[1];
			var given1 = +numbers1[0];
			$('#oatsSlider li:eq('+(toGive1-given1)+')').click();
		}
		setTimeout(function() {$('#feed-button').click();}, 200);
	}
	else {milk();}
}
function feedPlus() {
	walkPoints = 0;
	if ($('#fieldError-eat-hay-max').length !== 0) {throw new SyntaxError('Ошибка');}
	if (chevalAge > 4) {
		var numbers = $('.float-right.section-fourrage.section-fourrage-quantity').text().trim().split(' / ');
		var toGive = +numbers[1];
		var given = +numbers[0];
		if ($('#care-tab-feed #messageBoxInline').text().indexOf('недостаточный') !== -1) {toGive = 20 - given;}
		$('#haySlider li:eq('+(toGive-given)+')').click();
		if (chevalAge > 16) {
			var numbers1 = $('.float-right.section-avoine.section-avoine-quantity').text().trim().split(' / ');
			var toGive1 = +numbers1[1] + 2;
			var given1 = +numbers1[0];
			$('#oatsSlider li:eq('+(toGive1-given1)+')').click();
		}
		setTimeout(function() {$('#feed-button').click();}, 200);
	}
	else {milk();}
}
function sleep() {$('#boutonCoucher').click();}
function grow() {
	pause = singlePause;
	localStorage.removeItem('cantCompet');
	if (growButton === 0) {
		$('#night-wrapper button:contains("Подтвердить")').click();
		growButton = 1;
	}
}
/*-----------------Функции ухода-----------------*/

/*-------------------Проверки-------------------*/
function needWash() {if ($('#module-history .grid-row:contains("Полный уход")').length !== 0) {return false;} else return true;}
function needLesson() {
	if ($('#mission').length !== 0) {
		if ((chevalAge > 23) && (+$('#energie').text() - (+$('#mission-wrapper').html().substr($('#mission-wrapper').html().indexOf('Энергия'), 45).replace(/[^,0-9]/gim,'').replace(/[,]/gim,'.')) > 20) && (doLesson == 1)) {
	    if ($('#mission').text().indexOf('недостаточно энергии') !== -1) {return false;}
			else if ($('#mission-wrapper a').hasClass('action-disabled')) {return false;} else return true;
		} else return false;
	} else return false;
}
function needCare() {if (($('#module-history .grid-row:contains("погладили")').length !== 0) || (doCarrot == 0)) {return false;} else return true;}
function needDrink() {if (($('#module-history .grid-row:contains("был(а) напоен")').length !== 0) || (doDrink == 0)) {return false;} else return true;}
function needCarrot() {if (($('#module-history .grid-row:contains("съел(а) морковь")').length !== 0) || (doCarrot == 0) || ($('#boutonCarotte').hasClass('action-disabled'))) {return false;} else return true;}
function needMash() {
	if ((chevalAge > 23) && (doMash == 1)) {if (($('#module-history .grid-row:contains("съел(а) комбикорм")').length !== 0) || ($('#boutonMash').hasClass('action-disabled'))) {return false;} else return true;} else return false;
}
function giveMash() {
	if (location.href.indexOf('chevaux/cheval?id') !== -1) {
		if (chevalAge > 23) {
			if (finishWalks() && finishTrains() && !finishCompets() && !finishTrains2()) {doMash = 0;}
			if (finishWalks() && finishTrains() && finishCompets() && finishTrains2()) {doMash = 0;}
			if ($('#module-history .grid-row:contains("обучение выездка")').length !== 0) {doMash = 0;}
			if ($('#module-history .grid-row:contains("сделал предложение")').length !== 0) {doMash = 1;}
			if ((+$('#sante').text() < 100)) {doMash = 1;}
			var chk2 /*Только соревы*/ = $('#module-history .grid-row:contains("приняла участие в скачке рысью")').length + $('#module-history .grid-row:contains("участвовала в скачках галопом")').length + $('#module-history .grid-row:contains("приняла участие в выездке")').length + $('#module-history .grid-row:contains("участвовала в соревновании по кроссу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по конкуру")').length + $('#module-history .grid-row:contains("участвовала в рыси")').length + $('#module-history .grid-row:contains("участвовала в галопе")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по выездке")').length + $('#module-history .grid-row:contains("принял(а) участие в кроссе")').length + $('#module-history .grid-row:contains("принял(а) участие в соревнованиях по конкуру")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по вестерн плеже")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по рейнингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по скачкам вокруг бочек")').length + $('#module-history .grid-row:contains("приняла участие в скачках вокруг бочек")').length + $('#module-history .grid-row:contains("участвовала в соревновании по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по вестерн плеже")').length
			if (chk2 > 0) {doMash = 0;}
			var chk /*Соревы и весь кач*/ = $('#module-history .grid-row:contains("сделал предложение")').length + $('#module-history .grid-row:contains("приняла участие в скачке рысью")').length + $('#module-history .grid-row:contains("участвовала в скачках галопом")').length + $('#module-history .grid-row:contains("приняла участие в выездке")').length + $('#module-history .grid-row:contains("участвовала в соревновании по кроссу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по конкуру")').length + $('#module-history .grid-row:contains("участвовала в рыси")').length + $('#module-history .grid-row:contains("участвовала в галопе")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по выездке")').length + $('#module-history .grid-row:contains("принял(а) участие в кроссе")').length + $('#module-history .grid-row:contains("принял(а) участие в соревнованиях по конкуру")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по вестерн плеже")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по рейнингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по скачкам вокруг бочек")').length + $('#module-history .grid-row:contains("приняла участие в скачках вокруг бочек")').length + $('#module-history .grid-row:contains("участвовала в соревновании по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по вестерн плеже")').length + $('#module-history .grid-row:contains("играл")').length + $('#module-history .grid-row:contains("Прогулка в")').length + $('#module-history .grid-row:contains("beach ride")').length + $('#module-history .grid-row:contains("обучение")').length;
			if (chk > 0) {doCare = 1; doDrink = 1; doCarrot = 1;}
			if (($('#reproduction-wrapper').text().indexOf('Срок:  8 мес.') !== -1) || ($('#reproduction-wrapper').text().indexOf('Срок:  10 мес.') !== -1) || ($('div[widget^="13"] .message-content').text().indexOf('вызовите ветеринар') !== -1) || ($('div[widget^="13"] .message-content').text().indexOf('произвела на свет') !== -1)) {doLesson = 1;}
		}
	}
}
function needFeed() {
	if (chevalAge < 6) {if ($('#module-history .grid-row:contains("молоко матери")').length !== 0) {return false;} else return true;}
	else {if (($('#module-history .grid-row:contains("фураж")').length !== 0) || ($('#messageBoxInline').text().indexOf('толст') !== -1)) {return false;} else return true;}
}
function needSleep() {if ($('#boutonCoucher').hasClass('action-disabled')) {return false;} else return true;}
function getMerch(item) {
	var a = 0;
	var merch = $('#objects-body-content a');
	if (merch.length !== 0) {
		for (var i = 0; i < merch.length; i++) {
			if ($('#objects-body-content a').eq(i).attr('data-tooltip').indexOf(item) !== -1) {a = 1;}
		}
	}
	if (a === 0) {return false;} else return true;
}
function getTime() {
	var timeId = $('.hour').text(); hours = +(timeId[0]+timeId[1]); minutes = +(timeId[3]+timeId[4]);
	time = hours*60 + minutes;
	return time;
}
function getCenter() {
	var info = $('.centerLocalisation').attr('class');
	if (info !== undefined) {
		switch(true) {
			case (info.indexOf('Foret') !== -1): return 'Лес'; break;
			case (info.indexOf('Montagne') !== -1): return 'Горы'; break;
			case (info.indexOf('Plage') !== -1): return 'Пляж'; break;
		}
	}
	else {return 'Нет';}
}
function beachPercent() {
	var scr = $('#formbaladePlage script:eq(1)').html();
	if (scr !== undefined) {
		var max = +scr.substring(scr.indexOf('"max":-'), scr.indexOf('"max":-')+15).replace(/[^.0-9]/gim,'');
		var min = +scr.substring(scr.indexOf('"value":-'), scr.indexOf('"max":-')).replace(/[^.0-9]/gim,'');
		if ($('#walk-plage-form').text().indexOf('не имеет навыков для перевода') !== -1) {max = 0; min = 1;}
		return Math.round(max/min);
	}
}
/*-------------------Проверки-------------------*/

/*--------------Проверки тренировок--------------*/
function canPlay(minEnergy) {
	if ((chevalAge > 6) && (chevalAge < 18) && (babyPlay == 1)) {
		var time = getTime(); var workEnergy = +($('#energie').text());
		if (minEnergy == 21) {var limit = 1200;} else if (minEnergy == 20) {var limit = maxtime;}
		var a = 0; while (workEnergy - playEnergy > minEnergy) {workEnergy -= playEnergy; a++;}
		var b = 0; while (time + 30 <= limit) {time += 30; b++;}
		var points = Math.min(a, b);
		if (points > 20) {points = 20;}
		if (minEnergy == 21) {
			if ((points !== 0) && (($("img[src$='/media/equideo/image/fonctionnels/20/jeu.png']").length === 0) || ($('#module-history .grid-row:contains("играл")').length === 0))) {return true;} else {return false;}}
		else if (minEnergy == 20) {
			if ((points !== 0) && (($("img[src$='/media/equideo/image/fonctionnels/20/jeu.png']").length == 1) || ($('#module-history .grid-row:contains("играл")').length == 1))) {return true;} else {return false;}}
	}
	else return false;
}
function canWalk(walkOption, minEnergy) {
	if (chevalAge > 17) {
		var time = getTime(); var workEnergy = +($('#energie').text());
		if (minEnergy == 21) {var limit = 1200;} else if (minEnergy == 20) {var limit = maxtime;}
		var a = 0; while (workEnergy - walkEnergy > minEnergy) {workEnergy -= walkEnergy; a++;}
		var b = 0; while (time + 30 <= limit) {time += 30; b++;}
		var points = Math.min(a, b);
		switch (walkOption) {
			case 'foret': if (points >= fp) {points = fp;} break;
			case 'montagne': if (points >= mp) {points = mp;} break;
			case 'plage': if (points >= pp) { points = pp;} break;
			case '': points = 0; break;
		}
		if (points > 20) {points = 20;}
		if (($('#reproduction-wrapper').text().indexOf('Срок:  8 мес.') !== -1) || ($('#reproduction-wrapper').text().indexOf('Срок:  10 мес.') !== -1)) {points = 0;}
		var chk = $('#module-history .grid-row:contains("Прогулка в")').length;
		var chk2 = $('#module-history .grid-row:contains("beach ride")').length;
		if ((walkOption == 'foret') || (walkOption == 'montagne')) {
			if (minEnergy == 21) {if ((points !== 0) && (chk === 0)) {return true;} else {return false;}}
			else if (minEnergy == 20) {if ((points !== 0) && (chk > 0) && (chk < 3)) {return true;} else {return false;}}
		}
		else if (walkOption == 'plage') {
			if (minEnergy == 21) {if ((points !== 0) && (chk2 === 0)) {return true;} else {return false;}}
			else if (minEnergy == 20) {if ((points !== 0) && (chk2 > 0) && (chk2 < 3)) {return true;} else {return false;}}
		}
	}
	else return false;
}
function finishWalk(walkOption) {
	if (chevalAge > 17) {
		switch (walkOption) {
			case 'foret': if (b3 == 100) {return true;} else {return false;} break;
			case 'montagne': if (b1 == 100) {return true;} else {return false;} break;
			case 'plage': if (beachPercent() === 0) {return true;} else {return false;} break;
			case '': return true;
		}
	}
}
function finishWalks() {if (finishWalk(walkOption1) && finishWalk(walkOption2)) {return true;} else return false;}
function canTrain(trainOption, minEnergy) {
	if (chevalAge > 23) {
		switch (trainOption) {
			case 'Endurance': var trainEnergy = vitalEnergy; var eq = 0; break;
			case 'Vitesse': var trainEnergy = vitalEnergy; var eq = 1; break;
			case 'Dressage': var trainEnergy = goEnergy; var eq = 2; break;
			case 'Galop': var trainEnergy = runEnergy; var eq = 3; break;
			case 'Trot': var trainEnergy = runEnergy; var eq = 4; break;
			case 'Saut': var trainEnergy = runEnergy; var eq = 5; break;
			case '': break;
		}
		if (minEnergy == 21) {var limit = 1200;} else if (minEnergy == 20) {var limit = maxtime;}
		var time = getTime(); var workEnergy = +($('#energie').text());
		var a = 0; while (workEnergy - trainEnergy > minEnergy) {workEnergy -= trainEnergy; a++;}
		var b = 0; while (time + 30 <= limit) {time += 30; b++;}
		if (eq !== undefined) {
			var c = 100 - Number(($('#training-body-content .center.align-right:eq('+eq+')').attr('_tooltip')).replace(/\D+/g,""));
			if ($('#training-body-content .center.align-right:eq('+eq+')').attr('_tooltip') == 'Тренировка завершена!') {c = 0;}
		}
		else {c = 0;}
		var points = Math.min(a, b, c);
		if (points > 20) {points = 20;}
		if (($('#reproduction-wrapper').text().indexOf('Срок:  8 мес.') !== -1) || ($('#reproduction-wrapper').text().indexOf('Срок:  10 мес.') !== -1)) {points = 0;}
		var chk = $('#module-history .grid-row:contains("обучение")').length;
		if (minEnergy == 21) {if ((points !== 0) && (chk === 0)) {return true;} else {return false;}}
		else if (minEnergy == 20) {
			if ((points !== 0) && (chk > 0) && (chk < 3)) {return true;} else {return false;}}
	}
}
function finishTrain(trainOption) {
	if (chevalAge > 23) {
		switch (trainOption) {
			case 'Endurance': var eq = 0; break;
			case 'Vitesse': var eq = 1; break;
			case 'Dressage': var eq = 2; break;
			case 'Galop': var eq = 3; break;
			case 'Trot': var eq = 4; break;
			case 'Saut': var eq = 5; break;
		}
		if (eq !== undefined) {
			if ($('#training-body-content .center.align-right:eq('+eq+')').attr('_tooltip') == 'Тренировка завершена!') {return true;}
			else return false;
		}
		else {return true;}
	}
}
function finishTrains() {if (finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && finishTrain(trainOption4) && finishTrain(trainOption5) && finishTrain(trainOption6)) {return true;} else return false;}
function finishTrains2() {if (finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && finishTrain(train2Option4) && finishTrain(train2Option5) && finishTrain(train2Option6)) {return true;} else return false;}
function canCompet(competName, minEnergy) {
	var osh = 0;
	if (location.href.indexOf('chevaux/cheval?id') !== -1) {
		var en = 101;
		switch (competName) {
			case 'Рысь': en = 13.5; break;
			case 'Галоп': en = 13.5; break;
			case 'Выездка': en = 14.1; break;
			case 'Кросс': en = 16; break;
			case 'Конкур': en = 11; break;
			case 'Гонки': en = 13.5; break;
			case 'Каттинг': en = 13.5; break;
			case 'Трейл': en = 17; break;
			case 'Рейнинг': en = 14.2; break;
			case 'Вестерн плеже': en = 14; break;
		}
		var chk = $('#module-history .grid-row:contains("приняла участие в скачке рысью")').length + $('#module-history .grid-row:contains("участвовала в скачках галопом")').length + $('#module-history .grid-row:contains("приняла участие в выездке")').length + $('#module-history .grid-row:contains("участвовала в соревновании по кроссу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по конкуру")').length + $('#module-history .grid-row:contains("участвовала в рыси")').length + $('#module-history .grid-row:contains("участвовала в галопе")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по выездке")').length + $('#module-history .grid-row:contains("принял(а) участие в кроссе")').length + $('#module-history .grid-row:contains("принял(а) участие в соревнованиях по конкуру")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по вестерн плеже")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по рейнингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревнованиях по скачкам вокруг бочек")').length + $('#module-history .grid-row:contains("приняла участие в скачках вокруг бочек")').length + $('#module-history .grid-row:contains("участвовала в соревновании по каттингу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по трейлу")').length + $('#module-history .grid-row:contains("участвовала в соревновании по вестерн плеже")').length;
		if ((((+$('#energie').text() < minEnergy+en) || (getTime() > 1200)) || (localStorage.getItem('cantCompet')) !== null) || (chk >= 6)) {return false;} else return true;
	}
}
function finishCompet(competName) {
	if (($('a:contains("'+competName+'")').attr('data-tooltip') == 'Длительность: <b>2 ч</b><br/>') || (competName === '')) {return true;} else return false;
}
function finishCompets() {if (finishCompet(compOption1) && finishCompet(compOption2) && finishCompet(compOption3) && finishCompet(compOption4) && finishCompet(compOption5)) {return true;} else return false;}
function finishCompets2() {if (finishCompet(comp2Option1) && finishCompet(comp2Option2) && finishCompet(comp2Option3) && finishCompet(comp2Option4) && finishCompet(comp2Option5)) {return true;} else return false;}
function allFinish() {if (enduranceComplet && vitesseComplet && dressageComplet && galopComplet && trotComplet && sautComplet) {return true;} else return false;}
/*--------------Проверки тренировок--------------*/

/*-------------------Тренировки------------------*/
function play(minEnergy) {
	doCare = 1; doDrink = 1; doCarrot = 1;
	var time = getTime(); var workEnergy = +($('#energie').text());
	var a = 0; while (workEnergy - playEnergy > minEnergy) {workEnergy -= playEnergy; a++;}
	var b = 0; while (time + 30 <= maxtime) {time += 30; b++;}
	var points = Math.min(a, b);
	if (points > 20) {points = 20;}
	$('#centerPlaySlider li:eq('+points+')').click();
	setTimeout(function() {$('#formCenterPlaySubmit').click();}, 300);
}
function walk(walkOption, minEnergy) {
	doCare = 1; doDrink = 1; doCarrot = 1;
	var time = getTime(); var workEnergy = +($('#energie').text());
	var a = 0; while (workEnergy - walkEnergy > minEnergy) {workEnergy -= walkEnergy; a++;}
	var b = 0; while (time + 30 <= maxtime) {time += 30; b++;}
	var points = Math.min(a, b);
	switch (walkOption) {
		case 'foret':
			if (points >= fp) {points = fp;}
			if (walkPoints === 0) {fp -= points; walkPoints = 1;}
		break;
		case 'montagne':
			if (points >= mp) {points = mp;}
			if (walkPoints === 0) {mp -= points; walkPoints = 1;}
		break;
		case 'plage':
			if (points >= pp) {points = pp;}
			if (walkPoints === 0) {pp -= points; walkPoints = 1;}
		break;
	}
	if (points > 20) {points = 20;}
	$('#walk'+walkOption+'Slider li:eq('+points+')').click();
	setTimeout(function() {$('#walk-'+walkOption+'-submit').click();}, Math.round(pause/2));
}
function train(trainOption, minEnergy) {
	doCare = 1; doDrink = 1; doCarrot = 1;
	switch (trainOption) {
		case 'Endurance': var trainEnergy = vitalEnergy; var eq = 0; doMash = 1; break;
		case 'Vitesse': var trainEnergy = vitalEnergy; var eq = 1; doMash = 1; break;
		case 'Dressage': var trainEnergy = goEnergy; var eq = 2; doMash = 0; break;
		case 'Galop': var trainEnergy = runEnergy; var eq = 3; doMash = 1; break;
		case 'Trot': var trainEnergy = runEnergy; var eq = 4; doMash = 1; break;
		case 'Saut': var trainEnergy = runEnergy; var eq = 5; doMash = 1; break;
	}
	var time = getTime(); var workEnergy = +($('#energie').text());
	var a = 0; while (workEnergy - trainEnergy > minEnergy) {workEnergy -= trainEnergy; a++;}
	var b = 0; while (time + 30 <= maxtime) {time += 30; b++;}
	var c = 100 - Number(($('#training-body-content .center.align-right:eq('+eq+')').attr('_tooltip')).replace(/\D+/g,""));
	var points = Math.min(a, b, c);
	if (points > 20) {points = 20;}
	$('#training'+trainOption+'Slider li:eq('+points+')').click();
	setTimeout(function() {$('#training-'+(trainOption.slice(0,1).toLowerCase()+trainOption.slice(1))+'-submit').click();}, Math.round(pause/2));
}
function compet(competName, minEnergy) {
	doCare = 1; doDrink = 1; doCarrot = 1; doMash = 0;
	var pause  = Math.round(singlePause*1.5);
	var dont = 0;
	if (location.href.indexOf('chevaux/cheval?id') !== -1) {
		if ($('.widget-action.config.vip.on').length !== 0) {$('a:contains("'+competName+'")')[0].click();}
		else if ((compButton === 0) && ($('#boutonPanser').length !== 0)) {$('a:contains("'+competName+'")')[0].click(); compButton = 1;}
	}
	else if (location.href.indexOf('competition/inscription') !== -1) {
		if (document.body.innerHTML.indexOf('доступных состязаний нет.') == -1) {
			var horseEnergy = +$('#table-0 .last td.emphasis').text().replace(/[^.0-9]/gim,'');
			var cells = $('tr[height="40"] td[class^="width-10 align-center"] button');
			for (var i = 0; i < cells.length; i++) {
				var compEnergy = +$('tr[height="40"]:eq('+i+') td[class^="width-20 align-center"]').text().replace(/[^.0-9]/gim,'');
				if (horseEnergy - compEnergy >= minEnergy) {
					localStorage.removeItem('cantCompet');
					dont = 1;
					$('tr[height="40"]:eq('+i+') td[class^="width-10 align-center"] button').click(); i = cells.length+5;
				}
			}
			if ((cells.length !== 0) && (i == cells.length) && (dont === 0)) {
				localStorage.setItem('cantCompet', 1);
				if (backButton === 0) {history.go(-1); backButton = 1;}
			}
		}
		else {
			localStorage.setItem('cantCompet', 1);
			if (backButton === 0) {history.go(-1); backButton = 1;}
		}
	}
}

function kach() {
	switch (true) {
		case needWash(): wash(); break;
		case needLesson(): lesson(); break;
		case (canWalk(walkOption1, 21)): walk(walkOption1, 21); break;
		case (finishWalk(walkOption1) && canTrain(trainOption1, 21)): train(trainOption1, 21); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && canTrain(trainOption2, 21)): train(trainOption2, 21); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && canTrain(trainOption3, 21)): train(trainOption3, 21); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && canTrain(trainOption4, 21)): train(trainOption4, 21); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && finishTrain(trainOption4) && canTrain(trainOption5, 21)): train(trainOption5, 21); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && finishTrain(trainOption4) && finishTrain(trainOption5) && canTrain(trainOption6, 21)): train(trainOption6, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && !finishCompet(compOption1) && canCompet(compOption1, 21)): compet(compOption1, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && !finishCompet(compOption2) && canCompet(compOption2, 21)): compet(compOption2, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && !finishCompet(compOption3) && canCompet(compOption3, 21)): compet(compOption3, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && finishCompet(compOption3) && !finishCompet(compOption4) && canCompet(compOption4, 21)): compet(compOption4, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && finishCompet(compOption3) && finishCompet(compOption4) && !finishCompet(compOption5) && canCompet(compOption5, 21)): compet(compOption5, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && canTrain(train2Option1, 21)): train(train2Option1, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrain(train2Option1) && canTrain(train2Option2, 21)): train(train2Option2, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && canTrain(train2Option3, 21)): train(train2Option3, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && canTrain(train2Option4, 21)): train(train2Option4, 21);	break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && finishTrain(train2Option4) && canTrain(train2Option5, 21)): train(train2Option5, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && finishTrain(train2Option4) && finishTrain(train2Option5) && canTrain(train2Option6, 21)): train(train2Option6, 21); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && canWalk(walkOption2, 21)): walk(walkOption2, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && !finishCompet(comp2Option1) && canCompet(comp2Option1, 21)): compet(comp2Option1, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 21) && !finishCompet(comp2Option2) && canCompet(comp2Option2, 21)): compet(comp2Option2, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 21) && finishCompet(comp2Option2, 21) && !finishCompet(comp2Option3) && canCompet(comp2Option3, 21)): compet(comp2Option3, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 21) && finishCompet(comp2Option2, 21) && finishCompet(comp2Option3, 21) && !finishCompet(comp2Option4) && canCompet(comp2Option4, 21)): compet(comp2Option4, 21); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 21) && finishCompet(comp2Option2, 21) && finishCompet(comp2Option3, 21) && finishCompet(comp2Option4, 21) && !finishCompet(comp2Option5) && canCompet(comp2Option5, 21)): compet(comp2Option5, 21); break;
		case (needCare() && (chevalAge > 6) && !allFinish()): care(); break;
		case (needDrink() && (chevalAge > 6) && !allFinish()): drink(); break;
		case (needCarrot() && (chevalAge > 6) && !allFinish()): carrot(); break;
		case (needMash() && (chevalAge > 23) && !allFinish()): mash(); break;
		case ((needFeed()) && ((($('#module-history .grid-row:contains("обучение")').length) !== 0) || (($('#module-history .grid-row:contains("Прогулка")').length) !== 0))): feedPlus(); break;
		case (needFeed()): feed(); break;
		case (canWalk(walkOption1, 20)): walk(walkOption1, 20); break;
		case (finishWalk(walkOption1) && canTrain(trainOption1, 20)): train(trainOption1, 20); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && canTrain(trainOption2, 20)): train(trainOption2, 20); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && canTrain(trainOption3, 20)): train(trainOption3, 20); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && canTrain(trainOption4, 20)): train(trainOption4, 20); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && finishTrain(trainOption4) && canTrain(trainOption5, 20)): train(trainOption5, 20); break;
		case (finishWalk(walkOption1) && finishTrain(trainOption1) && finishTrain(trainOption2) && finishTrain(trainOption3) && finishTrain(trainOption4) && finishTrain(trainOption5) && canTrain(trainOption6, 20)): train(trainOption6, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && !finishCompet(compOption1) && canCompet(compOption1, 20)): compet(compOption1, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && !finishCompet(compOption2) && canCompet(compOption2, 20)): compet(compOption2, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && !finishCompet(compOption3) && canCompet(compOption3, 20)): compet(compOption3, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && finishCompet(compOption3) && !finishCompet(compOption4) && canCompet(compOption4, 20)): compet(compOption4, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompet(compOption1) && finishCompet(compOption2) && finishCompet(compOption3) && finishCompet(compOption4) && !finishCompet(compOption5) && canCompet(compOption5, 20)): compet(compOption5, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && canTrain(train2Option1, 20)): train(train2Option1, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && finishTrain(train2Option1) && canTrain(train2Option2, 20)): train(train2Option2, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && canTrain(train2Option3, 20)): train(train2Option3, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && canTrain(train2Option4, 20)): train(train2Option4, 20);	break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && finishTrain(train2Option4) && canTrain(train2Option5, 20)): train(train2Option5, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && finishTrain(train2Option1) && finishTrain(train2Option2) && finishTrain(train2Option3) && finishTrain(train2Option4) && finishTrain(train2Option5) && canTrain(train2Option6, 20)): train(train2Option6, 20); break;
		case (finishWalk(walkOption1) && finishTrains() && finishCompets() && canWalk(walkOption2, 20)): walk(walkOption2, 20); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && !finishCompet(comp2Option1) && canCompet(comp2Option1, 20)): compet(comp2Option1, 20); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 20) && !finishCompet(comp2Option2) && canCompet(comp2Option2, 20)): compet(comp2Option2, 20); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 20) && finishCompet(comp2Option2, 20) && !finishCompet(comp2Option3) && canCompet(comp2Option3, 20)): compet(comp2Option3, 20); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 20) && finishCompet(comp2Option2, 20) && finishCompet(comp2Option3, 20) && !finishCompet(comp2Option4) && canCompet(comp2Option4, 20)): compet(comp2Option4, 20); break;
		case (finishWalks() && finishTrains() && finishCompets() && finishTrains2() && finishCompet(comp2Option1, 20) && finishCompet(comp2Option2, 20) && finishCompet(comp2Option3, 20) && finishCompet(comp2Option4, 20) && !finishCompet(comp2Option5) && canCompet(comp2Option5, 20)): compet(comp2Option5, 20); break;
		case needSleep(): sleep(); break;
		default: grow();
	}
}
/*-------------------Тренировки------------------*/

/*-----------------Размножение-----------------*/
function coverBoy() {
	if ($('#formMalePublicTypeEquipe').prop('checked') === false) {$('#formMalePublicTypeEquipe').click();}
	else {
		$('#reproduction-wrapper button:contains("Подтвердить")').click();
	}
}
function coverGirl() {
	if ($('#tab-0').hasClass('selected')) {
		if (kskButton == 0) {$('#tab-1 a')[0].click(); kskButton = 1;}
	}
	else if (needChooseBreed()) {
		($('#race').val(kob)).change();
	}
	else if (needConfirmSets()) {if (showButton == 0) {$('button:contains("Отобразить покрытия")').click(); showButton = 1;}}
	else if (needSort()) {
		if (kskButton == 0) {$('tr[class^="row-1"] td.caption-module.align-center:eq(0) a')[0].click(); kskButton = 1;}
	}
	else {
		if (takeButton == 0) {$('a.button.button-style-0').eq(0)[0].click(); takeButton = 1;}
	}
}
function breed() {
	localStorage.setItem('horseMom', chevalId);
	if (breedButton == 0) {
		if ($('#lienVeterinaire').length !== 0) {location.href = $('#lienVeterinaire').attr('href');}
		else if ($('a:contains("Дать имя прямо сейчас")').length !== 0) {location.href = $('a:contains("Дать имя прямо сейчас")').attr('href');}
		breedButton = 1;
	}
}
function needChooseBreed() {
	if ($('#race').val() !== kob) {return true;} else {return false;}
}
function needSort() {if (location.href.indexOf('DESC') !== -1) {return false;} else return true;}
function needConfirmSets() {if ((location.href.indexOf('resultats') == -1) && (location.href.indexOf('DESC') == -1) && (location.href.indexOf('ASC') == -1)) {return true;} else return false;}
/*-----------------Размножение-----------------*/
	try {
		var checkSet = setTimeout(function run1() {
			clearNulls();
			setTimeout(run1, 6000);
		}, 6000);
		$(document).ready(function() {
		var mainSet = setTimeout(function run() {
			if ((startQPower == '1') && (pauseQPower !== '1')) {
				  $( document ).ready(function() {
				  	if (amountNow < amountHorses) {
						  ufo();
						  giveMash();
						  progon();
						  giveMash();
					}
					else {
						if (kskButton == 0) {$('#quallyPauseBtn').click(); kskButton = 1;}
					}
				  });
			}
			  setTimeout(run, pause);
			}, pause);
		});
	}
	catch(e) {setTimeout(function() {if (reloadButton == 0) {location.reload(); reloadButton = 1;}}, pause);}
	finally {
		if ((startQPower == '1') && (pauseQPower !== '1')) {setTimeout(function() {location.reload();}, 15000);}
	}

function progon() {
	if (location.href.indexOf('chevaux/cheval?id') !== -1) {
		localStorage.setItem('prevHorse', location.href);
		if ($('a[data-tooltip^="Отключить упрощенные поездки"]').length !== 0) {setTimeout(function() {$('a[data-tooltip^="Отключить упрощенные поездки"]').click();}, pause - 100);}
		else if ($('a[data-tooltip^="Запретить упрощенное обучение"]').length !== 0) {setTimeout(function() {$('a[data-tooltip^="Запретить упрощенное обучение"]').click();}, pause - 100);}
		if ($('.inline-block.align-top.bloc-status-nom').children().eq(1).text().trim().indexOf($('#genetic-body-content td:contains("Итог")').text().substr(6).substr(-5)) == -1) {
			if (chevalSexe == 'masculin') {
				$('#horseNameName').val(boyName + ' ' + $('#genetic-body-content td:contains("Итог")').text().substr(6).substr(-5));
				setTimeout(function() {$('#profil-popup-content button:contains("Подтвердить")')[0].click();}, pause/2);
			}
			else if (chevalSexe == 'feminin') {
				$('#horseNameName').val(girlName + ' ' + $('#genetic-body-content td:contains("Итог")').text().substr(6).substr(-5));
				setTimeout(function() {$('#profil-popup-content button:contains("Подтвердить")')[0].click();}, pause/2);
			}
		}
		else {
            $('title').text( $('#headCountDone').text().slice(10, -1) + ' --- ' + chevalNom.slice(3, -4) + ' --- '+ parseInt((chevalAge/12)) + 'y '+ (chevalAge % 12) + 'm');
            if (chevalAge < 24) {
				if ($('div[widget^="7"] .fullwidth').text().indexOf('ещё не записан') == -1) {
					switch (true) {
						case needWash(): wash(); break;
						case canPlay(21): play(21); break;
						case canWalk(walkOption1, 21): walk(walkOption1, 21); break;
						case (needCare() && (chevalAge > 6)): care(); break;
						case (needDrink() && (chevalAge > 6)): drink(); break;
						case (needCarrot() && (chevalAge > 6)): carrot(); break;
						case needFeed(): feedPlus(); break;
						case canPlay(20): play(20); break;
						case canWalk(walkOption1, 20): walk(walkOption1, 20); break;
						case needSleep(): sleep(); break;
						default: grow();
					}
				}
				else if (kskButton === 0) {kskWrite(); kskButton = 1;}
			}
			else if (chevalAge < 36) {
				if ((finishWalk(walkOption1) && ((ksk == '10') || (ksk == '11')) && ($('#center-tab-main button:contains("Отменить размещение")').length !== 0))) {$('#container').before("<script type='text/javascript'>confirm = function() {return true;} </script>"); kskWrite();}
				else if ($('div[widget^="7"] .fullwidth').text().indexOf('ещё не записан') == -1) {
					switch (true) {
						case needWash(): wash(); break;
						case needLesson(): lesson(); break;
						case (canWalk(walkOption1, 21)): walk(walkOption1, 21); break;
						case (finishWalk(walkOption1) && canWalk(walkOption2, 21)): walk(walkOption2, 21); break;
						case (finishWalks() && canTrain(trainOption1, 21)): train(trainOption1, 21); break;
						case (needCare() && (chevalAge > 6)): care(); break;
						case (needDrink() && (chevalAge > 6)): drink(); break;
						case (needCarrot() && (chevalAge > 6)): carrot(); break;
						case (needMash() && (chevalAge > 23)): mash(); break;
						case needFeed(): feedPlus(); break;
						case (canWalk(walkOption1, 20)): walk(walkOption1, 20); break;
						case (finishWalk(walkOption1) && canWalk(walkOption2, 20)): walk(walkOption2, 20); break;
						case (finishWalks() && canTrain(trainOption1, 20)): train(trainOption1, 20); break;
						case needSleep(): sleep(); break;
						default: grow();
					}
				}
				else if (kskButton === 0) {kskWrite(); kskButton = 1;}
			}
			else if (chevalAge == 36) {
				if ($('#competition-body-content').text().indexOf('нужно выбрать ее специализацию') !== -1) {
					pause = doublePause;
					if ($('#competition .spacer-bottom').html() !== undefined) {
						if (specOption === 0) {$('#competition button:eq(0)').click();} //Классика
						else if (specOption == 1) {$('#competition button:eq(1)').click();} //Вестерн
					}
				}
				else if ($('#competition-body-content')[0].innerText.indexOf('надеть на лошадь вальтрап') !== -1) {
                    let free = 0;
					pause = doublePause;
					if ($('#choisir-equipement-popup').attr('style').indexOf('none') !== -1) {$('#competition-body-content .img').click();}
					else {
						if (specOption === 0) {
							switch (false) {
								case ($('#modele-tapis-classique-1x').hasClass('selected')): $('#modele-tapis-classique-1x').click(); break;
								case ($('#modele-selle-classique-'+selle+'x').hasClass('selected') || $('#modele-selle-classique-3x').hasClass('selected')):
                                    $('#modele-selle-classique-3x div').text() == 'Предлагается конноспортивным комплексом!' ? $('#modele-selle-classique-3x').click() : $('#modele-selle-classique-'+selle+'x').click(); break;
								case ($('#modele-bride-classique-'+bride+'x').hasClass('selected') || $('#modele-bride-classique-3x').hasClass('selected')):
                                    $('#modele-bride-classique-3x div').text() == 'Предлагается конноспортивным комплексом!' ? $('#modele-bride-classique-3x').click() : $('#modele-bride-classique-'+bride+'x').click(); break;
								case ((bande === 0) || ($('#modele-bande-1x').hasClass('selected'))): $('#modele-bande-1x').click(); bande = 0; break;
								case ((bonnet === 0) || ($('#modele-bonnet-1x').hasClass('selected'))): $('#modele-bonnet-1x').click(); bonnet = 0; break;
								default: $('button:contains("Подтвердить снаряжение")').click(); break;
							}
						}
						else if (specOption == 1) {
							switch (false) {
								case ($('#modele-tapis-western-1x').hasClass('selected')): $('#modele-tapis-western-1x').click(); break;
								case ($('#modele-selle-western-'+selle+'x').hasClass('selected') || $('#modele-selle-western-3x').hasClass('selected')):
                                    $('#modele-selle-western-3x div').text() == 'Предлагается конноспортивным комплексом!' ? $('#modele-selle-western-3x').click() : $('#modele-selle-western-'+selle+'x').click(); break;
								case ($('#modele-bride-western-'+bride+'x').hasClass('selected') || $('#modele-bride-western-3x').hasClass('selected')):
                                    $('#modele-bride-western-3x div').text() == 'Предлагается конноспортивным комплексом!' ? $('#modele-bride-western-3x').click() : $('#modele-bride-western-'+bride+'x').click(); break;
								case ((bande === 0) || ($('#modele-bande-1x').hasClass('selected'))): $('#modele-bande-1x').click(); bande = 0; break;
								case ((bonnet === 0) || ($('#modele-bonnet-1x').hasClass('selected'))): $('#modele-bonnet-1x').click(); bonnet = 0; break;
								default: $('button:contains("Подтвердить снаряжение")').click(); break;
							}
						}
					}
				}
				else {
					pause = singlePause;
					if ((finishWalk(walkOption1) && ((ksk == '10') || (ksk == '11')) && ($('#center-tab-main button:contains("Отменить размещение")').length !== 0))) {$('#container').before("<script type='text/javascript'>confirm = function() {return true;} </script>"); kskWrite();}
					else if ($('div[widget^="7"] .fullwidth').text().indexOf('ещё не записан') == -1) {
						switch (true) {
							case needWash(): wash(); break;
							case needLesson(): lesson(); break;
							case (canWalk(walkOption1, 21)): walk(walkOption1, 21); break;
							case (finishWalk(walkOption1) && canWalk(walkOption2, 21)): walk(walkOption2, 21); break;
							case (finishWalks() && canTrain(trainOption1, 21)): train(trainOption1, 21); break;
							case (needCare() && (chevalAge > 6)): care(); break;
							case (needDrink() && (chevalAge > 6)): drink(); break;
							case (needCarrot() && (chevalAge > 6)): carrot(); break;
							case (needMash() && (chevalAge > 23)): mash(); break;
							case needFeed(): feedPlus(); break;
							case (canWalk(walkOption1, 20)): walk(walkOption1, 20); break;
							case (finishWalk(walkOption1) && canWalk(walkOption2, 20)): walk(walkOption2, 20); break;
							case (finishWalks() && canTrain(trainOption1, 20)): train(trainOption1, 20); break;
							case needSleep(): sleep(); break;
							default: grow();
						}
					}
					else if (kskButton === 0) {kskWrite(); kskButton = 1;}
				}
			}
			else if ((chevalAge > 36) && (chevalAge < 120)) {
				if ((finishWalk(walkOption1) && ((ksk == '10') || (ksk == '11')) && ($('#center-tab-main button:contains("Отменить размещение")').length !== 0))) {$('#container').before("<script type='text/javascript'>confirm = function() {return true;} </script>"); kskWrite();}
				else if ($('div[widget^="7"] .fullwidth').text().indexOf('ещё не записан') == -1) {kach();}
				else if (kskButton === 0) {kskWrite(); kskButton = 1;}
			}
			else if (chevalAge >= 120) {
				if ((chevalSexe == 'masculin') && ($('#characteristics-body-content .dashed .first:eq(2)').text() !== 'Пол: мерин')) {
					if ($('#reproduction-tab-1 .col-0 strong').text().indexOf('ожидающих') !== -1) {var am = +($('#reproduction-tab-1 .col-0 strong').text().substring($('#reproduction-tab-1 .col-0 strong').text().indexOf('+')+2, $('#reproduction-tab-1 .col-0 strong').text().indexOf('о')).trim());}
					else {var am = 0;}
					if (chevalDouche) {var coverEn = 22.5;} else {var coverEn = 25;}
					if (am < amount) {
						switch (true) {
							case needWash(): wash(); break;
							case (($('#module-history .grid-row:contains("сделал предложение")').length === 0) && (+$('#energie').text() - coverEn > 20)): coverBoy(); break;
							case (($('#module-history .grid-row:contains("сделал предложение")').length == 1) && (+$('#energie').text() - coverEn > 20)): coverBoy(); break;
							case (($('#module-history .grid-row:contains("сделал предложение")').length == 2) && (+$('#energie').text() - coverEn > 20)): coverBoy(); break;
							case needCare(): care(); break;
							case needDrink(): drink(); break;
							case needCarrot(): carrot(); break;
							case needMash(): mash(); break;
							case needFeed(): feedPlus(); break;
							case (($('#module-history .grid-row:contains("сделал предложение")').length == 3) && (+$('#energie').text() - coverEn > 20)): coverBoy(); break;
							case (($('#module-history .grid-row:contains("сделал предложение")').length == 4) && (+$('#energie').text() - coverEn > 20)): coverBoy(); break;
							case needSleep(): sleep(); break;
							default: grow();
						}
					}
					else {
						if (plusSchet == 0) {
							if (localStorage.getItem('horseMom') !== null) {location.href = 'https://www.lowadi.com/elevage/chevaux/cheval?id=' + localStorage.getItem('horseMom');}
							else {location.href = 'https://www.lowadi.com/elevage/chevaux/cheval?id=' + ($('#origins-body-content td:contains("Мать") a').attr('href')).replace(/\D+/g,"");}
							localStorage.setItem('amountNow', +localStorage.getItem('amountNow')+1); plusSchet = 1;
						}
					}
				}
				if ((chevalSexe == 'feminin') || ($('#characteristics-body-content .dashed .first:eq(2)').text() == 'Пол: мерин')) {
                    if($('#reproduction-body-content').text().indexOf('Следующая случка') !== -1) {console.log("Qwe"); kach();} else
					if (($('a.saillir').hasClass('action-disabled')) || (($('#boutonEchographie').length !== 0) && ($('#boutonEchographie').hasClass('action-disabled')) && ($('#reproduction-wrapper').text().indexOf('Срок:  8 мес.') == -1) && ($('#reproduction-wrapper').text().indexOf('Срок:  10 мес.') == -1))) {kach();}
					else {
						if (($('a.saillir').length !== 0) && ($('a.saillir').hasClass('action-disabled') === false)) {
							localStorage.setItem('kob', $('td.first:contains("Порода: ") a').text().trim());
							if (sluchButton == 0) {
								$('#reproduction-tab-0 td[class^="last"] a')[0].click(); sluchButton = 1;
							}
						}
						else if (($('#boutonEchographie').length !== 0) && ($('#boutonEchographie').hasClass('action-disabled') === false)) {$('#boutonEchographie').click();}
						else if (($('#boutonEchographie').length !== 0) && ($('#reproduction-tab-1 img[src^="/media/equideo/image/fonctionnels/20/echographie.png"]').length !== 0)) {
							var baby = $('#reproduction-tab-1 td.col-1').text();
							if (baby.indexOf('кобыла') !== -1) {baby = 'girl';} else if (baby.indexOf('жеребец') !== -1) {baby = 'boy';}
							if (localStorage.getItem('lastBaby') == 'boy') {
								if (baby == 'boy') {localStorage.setItem('abort', 1);}
								else {localStorage.removeItem('abort');}
							}
							else {
								if (baby == 'girl') {localStorage.setItem('abort', 1);}
								else {localStorage.removeItem('abort');}
							}
							switch (true) {
								case needWash(): wash(); break;
								case needLesson(): lesson(); break;
								case needFeed(): feed(); break;
								case needSleep(): sleep(); break;
								default: grow();
							}
						}
						else if (($('div[widget^="13"] .message-content').text().indexOf('вызовите ветеринар') !== -1) || ($('div[widget^="13"] .message-content').text().indexOf('произвела на свет') !== -1)) {
							if (localStorage.getItem('abort') == '1' || ($('div[widget^="13"] .message-content').text().indexOf('произвела на свет') !== -1)) {
								switch (true) {
								case needWash(): wash(); break;
								case needLesson(): lesson(); break;
								case needFeed(): feed(); break;
								default: grow();
								}
							}
							else {breed();}
						}
					}
				}
			}
		}
	}
	else if (location.href.indexOf('competition/inscription') !== -1) {
		compet('', 20);
	}
	else if (location.href.indexOf('elevage=all-horses') !== -1) {
		if (prevButton == 0) {location.href = localStorage.getItem('prevHorse'); prevButton = 1;}
	}
	else if (location.href == 'https://www.lowadi.com/jeu/') {
		if (prevButton == 0) {location.href = localStorage.getItem('prevHorse'); prevButton = 1;}
	}
	else if ((location.href.indexOf('saillie?offre') !== -1)) {if (takeButton == 0) {$('#boutonDoReproduction')[0].click(); takeButton = 1;}}
	else if (location.href.indexOf('chevaux/choisirNoms?jument') !== -1) {
		if ($('#poulain-1').val() == '') {
				if (document.body.innerHTML.indexOf('женск') !== -1) {
					if (plusSchet == 0) {localStorage.setItem('amountNow', +localStorage.getItem('amountNow')+1); plusSchet = 1;}
					localStorage.setItem('lastBaby', 'girl');
					if ((girlName !== null) && (girlName !== '') && ($('#poulain-1').val() !== girlName)) {$('#poulain-1').val(girlName);}
				}
				else {
					localStorage.setItem('lastBaby', 'boy');
					if ((boyName !== null) && (boyName !== '') && ($('#poulain-1').val() !== boyName)) {$('#poulain-1').val(boyName);}
				}
			}
			else if ((affixe !== null) && (affixe !== '') && ($('#affixe-1').val() == '') && ($('#affixe-1').val() !== $('#affixe-1').find('option:contains("'+affixe+'")').attr('value'))) {$('#affixe-1').val($('#affixe-1').find('option:contains("'+affixe+'")').attr('value')).change();}
			else if ((container !== null) && (container !== '') && ($('#elevage-1').val() == '') && ($('#elevage-1').val() !== $('#elevage-1').find('option:contains("'+container+'")').attr('value'))) {$('#elevage-1').val($('#elevage-1').find('option:contains("'+container+'")').attr('value')).change();}
		else {
			if (breedButton == 0) {$('button:contains("Продолжить")').click(); breedButton = 1;}
		}
	}
	else if ((location.href.indexOf('chevaux/rechercherMale?jument') !== -1) || (location.href.indexOf('chevaux/rechercherMale?tri') !== -1)  || (location.href.indexOf('saillie?offre') !== -1) || (location.href.indexOf('rechercherMale?error') !== -1)) {coverGirl();}
	else if (location.href.indexOf('chevaux/centreInscription?id') !== -1) {
		$('#container').before("<script type='text/javascript'>confirm = function() {return true;} </script>");
		var mainSet = setTimeout(function run() {
			try {if (document.body.innerHTML.indexOf('нет свободных мест') !== - 1) {throw new SyntaxError('Ошибка');}}
			catch (e) {
				if (reloadButton === 0) {
					location.reload();
					reloadButton = 1;
				}
			}
			setTimeout(run, pause+700);
		}, pause+700);
		kskWrite();
	}
}
/*----------------------------------------------------------------------------------------------------------------------*/
	//Главное меню
	$('body#global').append('<div id="quallyMainPanel" style="display:block; position:fixed; width:150px; height:240px; left:0px; top:20px; background-color:rgba(0, 0, 0, 0.8); z-index:900;  border-radius: 0px 10px 10px 0px;"></div>');
	//Надпись Bot Qually
	$('#quallyMainPanel').append('<a target="_blank" href="https://vk.com/botqually"><p style="position:absolute; top:10px; left:45px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:15px;"><b>Bot Qually</b></p></a>');
	//Крылышко
	$('#quallyMainPanel').append('<a target="_blank" href="https://vk.com/botqually"><img src="http://ipic.su/img/img7/fs/curly-wing.1526412919.png" style="position:absolute; top:7px; left:20px; z-index:901;width:20px"></a>');
	//Инф о версии
	$('#quallyMainPanel').append('<p style="position:absolute; top:30px; left:31px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:10px;">version: power+ v'+version+'</p>');
	//Кнопка Настройки
	$('#quallyMainPanel').append('<span id="quallySetBtn"><img src="http://ipic.su/img/img7/fs/nastrojki.1526412082.png" style="width: 110px; position:absolute; top:55px; left:15px; z-index:902; cursor:pointer;"></span>');
		$('#quallySetBtn').append('<span><img src="" style="width: 37px; position:absolute; top:57px; left:16px; z-index:902; cursor:pointer;"></span>');
		$('#quallySetBtn').append('<span style="position:absolute; top:68px; left:61px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px; cursor:pointer;">Настройки</span>');
	//Кнопка Включить/Отключить
	$('#quallyMainPanel').append('<span class="turningOn" id="quallyOnBtn"><img src="" style="width: 110px; position:absolute; top:105px; left:15px; z-index:902; cursor:pointer;"></span>');
		if (startQPower == 1) {
			$('#quallyOnBtn').append('<span class="turningOn"><img src="http://ipic.su/img/img7/fs/vyklyuchit.1526412064.png" style="width: 110px; position:absolute; top:105px; left:16px; z-index:902; cursor:pointer;"></span>');
			$('#quallyOnBtn').append('<span class="turningOn" style="position:absolute; top:118px; left:59px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px; cursor:pointer;">Выключить</span>');
		}
		else {
			$('#quallyOnBtn').append('<span class="turningOn"><img src="http://ipic.su/img/img7/fs/vklyuchit.1526412037.png" style="width: 110px; position:absolute; top:105px; left:16px; z-index:902; cursor:pointer;"></span>');
			$('#quallyOnBtn').append('<span class="turningOn" style="position:absolute; top:118px; left:63px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px; cursor:pointer;">Включить</span>');
		}
	//Кнопка Пауза/Продолжить
	$('#quallyMainPanel').append('<span id="quallyPauseBtn"><img src="" style="width: 110px; position:absolute; top:155px; left:15px; z-index:902; cursor:pointer;"></span>');
		if ((pauseQPower !== '1') && (startQPower == '1')) {
			$('#quallyPauseBtn').append('<span><img src="http://ipic.su/img/img7/fs/pauzaativnaya.1526412093.png" style="width: 110px; position:absolute; top:155px; left:16px; z-index:902; cursor:pointer;"></span>');
			$('#quallyPauseBtn').append('<span style="position:absolute; top:168px; left:58px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px; cursor:pointer;">Остановить</span>');
		}
		else if ((pauseQPower == '1') && (startQPower == '1')) {
			$('#quallyPauseBtn').append('<span><img src="http://ipic.su/img/img7/fs/vozobnovit.1526412052.png" style="width: 110px; position:absolute; top:155px; left:16px; z-index:902; cursor:pointer;"></span>');
			$('#quallyPauseBtn').append('<span style="text-align:center; position:absolute; top:168px; left:57px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px; cursor:pointer;">Продолжить</span>');
		}
		else if ((pauseQPower !== '1') && (startQPower !== '1')) {
			$('#quallyPauseBtn').attr('data-tooltip', 'Поставить паузу можно только тогда, когда бот включён.');
			$('#quallyPauseBtn img').eq(0).attr('style', 'width: 110px; position:absolute; top:155px; left:15px; z-index:902;');
			$('#quallyPauseBtn').append('<span><img src="http://ipic.su/img/img7/fs/pauzaneativnaya.1526412104.png" style="width: 110px; position:absolute; top:155px; left:16px; z-index:902;"></span>');
			$('#quallyPauseBtn').append('<span style="position:absolute; top:168px; left:58px; color:#999999; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Остановить</span>');
		}
		else if ((pauseQPower == '1') && (startQPower !== '1')) {
			$('#quallyPauseBtn').attr('data-tooltip', 'Поставить паузу можно только тогда, когда бот включён.');
			$('#quallyPauseBtn img').eq(0).attr('style', 'width: 110px; position:absolute; top:155px; left:15px; z-index:902;');
			$('#quallyPauseBtn').append('<span><img src="http://ipic.su/img/img7/fs/pauzaneativnaya.1526412104.png" style="width: 110px; position:absolute; top:155px; left:16px; z-index:902;"></span>');
			$('#quallyPauseBtn').append('<span style="text-align:center; position:absolute; top:168px; left:57px; color:#999999; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Продолжить</span>');
		}
	//Информация о каче
	if (startQPower == '1') {
		if ((amountNow < amountHorses) && (amountHorses !== undefined) && (amountHorses !== null) && (startQPower == '1')) {$('#quallyMainPanel').append('<span id="headCountDone" style="position:absolute; top:200px; left:31px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Выкачено: '+amountNow+' из '+amountHorses+'.</span>');}
		else if ((amountNow >= amountHorses) && (amountHorses !== undefined) && (amountHorses !== null) && (startQPower == '1')) {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:40px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Кач завершён!</span>');}
		else {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:28px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Кач не выставлен.</span>');}
	}
	else {
		if ((amountHorses !== 0) && (amountHorses !== undefined) && (amountHorses !== null)) {
			if ((amountHorses > 4) && (amountHorses < 21)) {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:31px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Задано: '+amountHorses+' голов.</span>');}
			else if ((+(String(amountHorses)[String(amountHorses).length-1]) > 1) && (+(String(amountHorses)[String(amountHorses).length-1]) < 5)) {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:29px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Задано: '+amountHorses+' головы.</span>');}
			else if (((+(String(amountHorses)[String(amountHorses).length-1]) > 4) && (+(String(amountHorses)[String(amountHorses).length-1]) < 10)) || (+(String(amountHorses)[String(amountHorses).length-1]) == 0)) {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:31px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Задано: '+amountHorses+' голов.</span>');}
			else if (+(String(amountHorses)[String(amountHorses).length-1]) == 1) {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:29px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Задано: '+amountHorses+' голова.</span>');}
		}
		else {$('#quallyMainPanel').append('<span style="position:absolute; top:200px; left:28px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Кач не выставлен.</span>');}
	}
	if (localStorage.getItem('lastBaby') == 'boy') {$('#quallyMainPanel').append('<span id="kobBirth" data-tooltip="Родится кобыла. Щёлкните по надписи, чтобы изменить" style="cursor:pointer; position:absolute; top:215px; left:24px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Следующие роды: ♀</span>');}
	else {$('#quallyMainPanel').append('<span id="jerBirth" data-tooltip="Родится жеребец. Щёлкните по надписи, чтобы изменить" style="cursor:pointer; position:absolute; top:215px; left:24px; color:#ffffff; font-family:Arial, Helvetica; z-index:902; font-size:11px;">Следующие роды: ♂</span>');}
	$('#kobBirth').on('click', function() {
		localStorage.setItem('lastBaby', 'girl'); location.reload();
	});
	$('#jerBirth').on('click', function() {
		localStorage.setItem('lastBaby', 'boy'); location.reload();
	});

//Тело настроек
$('body#global').append('<div id="quallySettings" style="display:none; position:fixed; width:200px; height:175px; left:155px; top:20px; background-color:rgba(0, 0, 0, 0.8); z-index:900;  border-radius: 10px 10px 10px 10px;"></div>');
//Надпись Настройки и шестерня
$('#quallySettings').append('<p style="position:absolute; top:10px; left:70px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:15px;"><b>Настройки</b></p>');
$('#quallySettings').append('<img src="http://storage2.static.itmages.ru/i/17/1111/h_1510436434_4912661_ce4dff159e.png" style="position:absolute; top:8px; left:45px; z-index:901;">');
//Крестик
$('#quallySettings').append('<span id="crestik" style="position:absolute; top:4px; left:185px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:15px; cursor:pointer;"><b>x</b></span>');
//Страница 1
$('#quallySettings').append('<div class="optionsTab1"></div>');
	$('.optionsTab1').append('<p style="position:absolute; top:35px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Задержка:</p>');
	$('.optionsTab1').append('<select id="singlePause" style="width:118px; position:absolute; top:33px; left:72px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="300">0.3 сек.</option><option value="400">0.4 сек.</option><option value="500">0.5 сек.</option><option value="600">0.6 сек.</option><option value="700">0.7 сек.</option><option value="800">0.8 сек.</option><option value="1000">1 сек.</option><option value="2000">2 сек.</option><option value="3000">3 сек.</option><option value="5000">5 сек.</option></select>');
	$('.optionsTab1').append('<p style="position:absolute; top:58px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Урок c 2-х лет:</p>');
	$('.optionsTab1').append('<input id="doLesson" type="checkbox" style="position:absolute; top:58px; left:95px;">');
	$('.optionsTab1').append('<p style="position:absolute; top:58px; left:115px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Игры:</p>');
	$('.optionsTab1').append('<input id="babyPlay" type="checkbox" style="position:absolute; top:58px; left:150px;">');
	$('.optionsTab1').append('<p style="position:absolute; top:79px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Первая прогулка:</p>');
	$('.optionsTab1').append('<select id="walkOption1" style="width:77px; position:absolute; top:77px; left:113px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="foret">Лес</option><option value="montagne">Горы</option><option value="plage">Пляж</option></select>');
	$('.optionsTab1').append('<p style="position:absolute; top:100px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Вторая прогулка:</p>');
	$('.optionsTab1').append('<select id="walkOption2" style="width:77px; position:absolute; top:99px; left:113px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="foret">Лес</option><option value="montagne">Горы</option><option value="plage">Пляж</option></select>');
	$('.optionsTab1').append('<p style="position:absolute; top:120px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Выкачать: </p>');
	$('.optionsTab1').append('<p style="position:absolute; top:120px; left:109px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">шт.</p>');
	$('.optionsTab1').append('<input id="amountHorses" style="position:absolute; top:118px; left:70px; width:28px; text-align: center" min="1" max="1000" type="number">');
$('#quallySettings').append('<div class="optionsTab2" style="display:none;"></div>');
	$('.optionsTab2').append('<p style="position:absolute; top:33px; left:18px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;"><b>Настройка откача навыков:</b></p>');
	$('.optionsTab2').append('<p style="position:absolute; top:50px; left:22px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 1:</p>');
	$('.optionsTab2').append('<select id="trainOption1" style="width:77px; position:absolute; top:70px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="trainOption2" style="width:77px; position:absolute; top:93px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="trainOption3" style="width:77px; position:absolute; top:116px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="trainOption4" style="width:77px; position:absolute; top:139px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="trainOption5" style="width:77px; position:absolute; top:162px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="trainOption6" style="width:77px; position:absolute; top:185px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
		$('.optionsTab2').append('<p style="position:absolute; top:50px; left:126px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 2:</p>');
	$('.optionsTab2').append('<select id="train2Option1" style="width:77px; position:absolute; top:70px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="train2Option2" style="width:77px; position:absolute; top:93px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="train2Option3" style="width:77px; position:absolute; top:116px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="train2Option4" style="width:77px; position:absolute; top:139px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="train2Option5" style="width:77px; position:absolute; top:162px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
	$('.optionsTab2').append('<select id="train2Option6" style="width:77px; position:absolute; top:185px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Endurance">Выносливость</option><option value="Vitesse">Скорость</option><option value="Dressage">Выездка</option><option value="Galop">Галоп</option><option value="Trot">Рысь</option><option value="Saut">Прыжки</option></select>');
$('#quallySettings').append('<div class="optionsTab3" style="display:none;"></div>');
	$('.optionsTab3').append('<p style="position:absolute; top:33px; left:22px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;"><b>Настройка соревнований:</b></p>');
	$('.optionsTab3').append('<p style="position:absolute; top:87px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Классика</p>');
	$('.optionsTab3').append('<input type="radio" id="classic" class="radioBt" style="position:absolute; top:87px; left:65px; z-index:901;">');
	$('.optionsTab3').append('<p style="position:absolute; top:87px; left:85px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Вестерн</p>');
	$('.optionsTab3').append('<input type="radio" id="western" class="radioBt" style="position:absolute; top:87px; left:135px; z-index:901;">');
	$('.optionsTab3').append('<div class="sorevClassic" style="display:none;"></div>');
		$('.sorevClassic').append('<p style="position:absolute; top:103px; left:22px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 1:</p>');
		$('.sorevClassic').append('<select id="compOption1C" style="width:77px; position:absolute; top:120px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="compOption2C" style="width:77px; position:absolute; top:143px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="compOption3C" style="width:77px; position:absolute; top:166px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="compOption4C" style="width:77px; position:absolute; top:189px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="compOption5C" style="width:77px; position:absolute; top:212px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<p style="position:absolute; top:103px; left:126px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 2:</p>');
		$('.sorevClassic').append('<select id="comp2Option1C" style="width:77px; position:absolute; top:120px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="comp2Option2C" style="width:77px; position:absolute; top:143px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="comp2Option3C" style="width:77px; position:absolute; top:166px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="comp2Option4C" style="width:77px; position:absolute; top:189px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
		$('.sorevClassic').append('<select id="comp2Option5C" style="width:77px; position:absolute; top:212px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Рысь">Рысь</option><option value="Галоп">Галоп</option><option value="Выездка">Выездка</option><option value="Кросс">Кросс</option><option value="Конкур">Конкур</option></select>');
	$('.optionsTab3').append('<div class="sorevWestern" style="display:none;"></div>');
		$('.sorevWestern').append('<p style="position:absolute; top:103px; left:22px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 1:</p>');
		$('.sorevWestern').append('<select id="compOption1W" style="width:77px; position:absolute; top:120px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="compOption2W" style="width:77px; position:absolute; top:143px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="compOption3W" style="width:77px; position:absolute; top:166px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="compOption4W" style="width:77px; position:absolute; top:189px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="compOption5W" style="width:77px; position:absolute; top:212px; left:10px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<p style="position:absolute; top:103px; left:126px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Каскад 2:</p>');
		$('.sorevWestern').append('<select id="comp2Option1W" style="width:77px; position:absolute; top:120px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="comp2Option2W" style="width:77px; position:absolute; top:143px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="comp2Option3W" style="width:77px; position:absolute; top:166px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="comp2Option4W" style="width:77px; position:absolute; top:189px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
		$('.sorevWestern').append('<select id="comp2Option5W" style="width:77px; position:absolute; top:212px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="">Выкл.</option><option value="Гонки">Гонки вокруг бочек</option><option value="Каттинг">Каттинг</option><option value="Трейл">Трейл</option><option value="Рейнинг">Рейнинг</option><option value="Вестерн плеже">Вестерн плеже</option></select>');
	$('.optionsTab3').append('<p style="position:absolute; top:50px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Уровень амуниции: </p>');
	$('.optionsTab3').append('<select id="amunitionOption" style="width:50px; position:absolute; top:48px; left:123px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="1">1**</option><option value="2">2**</option><option value="3">3**</option></select>');
	$('.optionsTab3').append('<p style="position:absolute; top:69px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Бинты: </p>');
	$('.optionsTab3').append('<input id="bandeOption" type="checkbox" style="position:absolute; top:69px; left:53px;">');
	$('.optionsTab3').append('<p style="position:absolute; top:69px; left:70px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Налобник: </p>');
	$('.optionsTab3').append('<input id="bonnetOption" type="checkbox" style="position:absolute; top:69px; left:132px;">');
$('#quallySettings').append('<div class="optionsTab4" style="display:none;"></div>');
	$('.optionsTab4').append('<p style="position:absolute; top:35px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Число случек от ♂ в парт: </p>');
	$('.optionsTab4').append('<input id="amountCovers" style="position:absolute; top:33px; left:158px; width:28px; text-align: center" min="1" max="1000" type="number">');
	$('.optionsTab4').append('<p style="position:absolute; top:53px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">Имя лошадей:</p>');
	$('.optionsTab4').append('<input data-tooltip="К имени автоматически будет добавлен ГП" maxlength="14" placeholder="Для жеребца" id="boyName" type="text" style="position:absolute; top:68px; left:20px; width:156px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
	$('.optionsTab4').append('<input data-tooltip="К имени автоматически будет добавлен ГП" maxlength="14" placeholder="Для кобылы" id="girlName" type="text" style="position:absolute; top:88px; left:20px; width:156px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
	$('.optionsTab4').append('<p style="position:absolute; top:110px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">Аффикс команды:</p>');
	$('.optionsTab4').append('<input id="affixeOption" type="text" style="position:absolute; top:125px; left:20px; width:156px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
	$('.optionsTab4').append('<p style="position:absolute; top:145px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">Завод:</p>');
	$('.optionsTab4').append('<input id="containerOption" type="text" style="position:absolute; top:160px; left:20px; width:156px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
$('#quallySettings').append('<div class="optionsTab5" style="display:none;"></div>');
	$('.optionsTab5').append('<p style="position:absolute; top:35px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Записать в: </p>');
	$('.optionsTab5').append('<select id="ksk" style="width:110px; position:absolute; top:33px; left:77px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="00">общ. КСК</option><option value="01">резерв КСК</option><option value="10">Свой - общ. (VIP)</option><option value="11">Свой - резерв (VIP)</option></select>');

	$('.optionsTab5').append('<div class="ksk00" style=""></div>');
		$('.ksk00').append('<p disabled="disabled" style="cursor:default; position:absolute; top:45px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:898; font-size:12px;">___________________________</p>');
		$('.ksk00').append('<p style="position:absolute; top:65px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Местоположение: </p>');
		$('.ksk00').append('<select id="place" style="width:73px; position:absolute; top:63px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="Лес">Лес</option><option value="Горы">Горы</option></select>');
		$('.ksk00').append('<p style="position:absolute; top:90px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Длительность: </p>');
		$('.ksk00').append('<select id="duree" style="width:92px; position:absolute; top:88px; left:95px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="0">1 день</option><option value="1">3 дня</option><option value="2">10 дней</option></select>');
		$('.ksk00').append('<p style="position:absolute; top:116px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">С морковью:</p>');
		$('.ksk00').append('<input id="kskCarrot" type="checkbox" style="position:absolute; top:116px; left:85px;">');
		$('.ksk00').append('<p style="position:absolute; top:116px; left:105px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">Со смесью:</p>');
		$('.ksk00').append('<input id="kskMash" type="checkbox" style="position:absolute; top:116px; left:173px;">');
		$('.ksk00').append('<p disabled="disabled" style="cursor:default; position:absolute; top:125px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:898; font-size:12px;">___________________________</p>');
		$('.ksk00').append('<p style="position:absolute; top:145px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Местоположение: </p>');
		$('.ksk00').append('<select id="place2" disabled="disabled" style="width:73px; position:absolute; top:143px; left:114px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="Лес">Лес</option><option value="Горы">Горы</option></select>');
		$('.ksk00').append('<p style="position:absolute; top:170px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Длительность: </p>');
		$('.ksk00').append('<select id="duree2" disabled="disabled" style="width:92px; position:absolute; top:168px; left:95px; color:#000000; font-family:Arial, Helvetica; z-index:902; font-size:12px;"><option value="0">1 день</option><option value="1">3 дня</option><option value="2">10 дней</option></select>');
		$('.ksk00').append('<p style="position:absolute; top:195px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">С морковью:</p>');
		$('.ksk00').append('<input id="kskCarrot2" disabled="disabled" type="checkbox" style="position:absolute; top:193px; left:85px; z-index:901;">');
		$('.ksk00').append('<p style="position:absolute; top:195px; left:105px; color:#ffffff; font-family:Arial, Helvetica; z-index:901; font-size:12px;">Со смесью:</p>');
		$('.ksk00').append('<input id="kskMash2" disabled="disabled" type="checkbox" style="position:absolute; top:193px; left:173px; z-index:901;">');
		$('.ksk00').append('<p style="position:absolute; top:199px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">___________________________</p>');
		$('.ksk00').append('<p style="position:absolute; top:220px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">ID вашего КСК:</p>');
		$('.ksk00').append('<input id="myKsk" disabled="disabled" type="text" style="position:absolute; top:219px; left:98px; width:88px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
		$('.ksk00').append('<p style="position:absolute; top:245px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">ID резерв. КСК:</p>');
		$('.ksk00').append('<input id="reservedKsk" disabled="disabled" type="text" style="position:absolute; top:243px; left:98px; width:88px; color:#000000; font-family:Arial, Helvetica; z-index:901; font-size:12px;">');
		$('.ksk00').append('<p style="position:absolute; top:266px; left:10px; color:#ffffff; font-family:Arial, Helvetica; z-index:900; font-size:12px;">Все доступные для опции КСК настройки должны быть заполнены!</p>');

		$('#ksk').on('change', function () {
			if ($('#ksk').val() == '00') {
				$('#place')[0].disabled = 0;
				$('#duree')[0].disabled = 0;
				$('#kskCarrot')[0].disabled = 0;
				$('#kskMash')[0].disabled = 0;
				$('#place2')[0].disabled = 1;
				$('#duree2')[0].disabled = 1;
				$('#kskCarrot2')[0].disabled = 1;
				$('#kskMash2')[0].disabled = 1;
				$('#myKsk')[0].disabled = 1;
				$('#reservedKsk')[0].disabled = 1;
			}
			else if ($('#ksk').val() == '01') {
				$('#place')[0].disabled = 0;
				$('#duree')[0].disabled = 0;
				$('#kskCarrot')[0].disabled = 1;
				$('#kskMash')[0].disabled = 1;
				$('#place2')[0].disabled = 1;
				$('#duree2')[0].disabled = 1;
				$('#kskCarrot2')[0].disabled = 1;
				$('#kskMash2')[0].disabled = 1;
				$('#myKsk')[0].disabled = 1;
				$('#reservedKsk')[0].disabled = 1;
			}
			else if ($('#ksk').val() == '10') {
				$('#place')[0].disabled = 0;
				$('#duree')[0].disabled = 0;
				$('#kskCarrot')[0].disabled = 1;
				$('#kskMash')[0].disabled = 1;
				$('#place2')[0].disabled = 0;
				$('#duree2')[0].disabled = 0;
				$('#kskCarrot2')[0].disabled = 0;
				$('#kskMash2')[0].disabled = 0;
				$('#myKsk')[0].disabled = 0;
				$('#reservedKsk')[0].disabled = 1;
			}
			else if ($('#ksk').val() == '11') {
				$('#place')[0].disabled = 0;
				$('#duree')[0].disabled = 0;
				$('#kskCarrot')[0].disabled = 1;
				$('#kskMash')[0].disabled = 1;
				$('#place2')[0].disabled = 0;
				$('#duree2')[0].disabled = 0;
				$('#kskCarrot2')[0].disabled = 1;
				$('#kskMash2')[0].disabled = 1;
				$('#myKsk')[0].disabled = 0;
				$('#reservedKsk')[0].disabled = 0;
			}
			else {
				$('#place')[0].disabled = 0;
				$('#duree')[0].disabled = 0;
				$('#kskCarrot')[0].disabled = 0;
				$('#kskMash')[0].disabled = 0;
				$('#place2')[0].disabled = 1;
				$('#duree2')[0].disabled = 1;
				$('#kskCarrot2')[0].disabled = 1;
				$('#kskMash2')[0].disabled = 1;
				$('#myKsk')[0].disabled = 1;
				$('#reservedKsk')[0].disabled = 1;
			}
		});

	if ($('#classic').prop('checked')) {
		$('.sorevClassic').show(200);
		$('.sorevWestern').hide();
	}
	else if ($('#western').prop('checked')) {
		$('.sorevClassic').hide();
		$('.sorevWestern').show(200);
	}

//Кружок с цифрой 1
$('#quallySettings').append('<img id="pageOne" style="position:absolute; top:145px; left:30px; width:20px; z-index:901; cursor:pointer;" src="https://image.ibb.co/h843MJ/1.png">');
//Кружок с цифрой 2
$('#quallySettings').append('<img id="pageTwo" data-tooltip="Навыки" style="position:absolute; top:145px; left:60px; width:20px; z-index:901; cursor:pointer;" src="https://image.ibb.co/nHUsFd/2.png">');
//Кружок с цифрой 3
$('#quallySettings').append('<img id="pageThree" data-tooltip="Соревнования" style="position:absolute; top:145px; left:90px; width:20px; z-index:901; cursor:pointer;" src="https://preview.ibb.co/hnKg8y/3.png">');
//Кружок с цифрой 4
$('#quallySettings').append('<img id="pageFour" data-tooltip="Случки и роды" style="position:absolute; top:145px; left:120px; width:20px; z-index:901; cursor:pointer;" src="https://image.ibb.co/c1y8oy/4.png">');
//Кружок с цифрой 5
$('#quallySettings').append('<img id="pageFive" data-tooltip="КСК" style="position:absolute; top:145px; left:150px; width:20px; z-index:901; cursor:pointer;" src="https://image.ibb.co/g2YV1J/5.png">');


$('#classic').click(function() {
	$('.sorevClassic').show(200);
	$('.sorevWestern').hide();
	$('#western').prop('checked', false);
	if (!((localStorage.getItem('specOption') == '0') || (localStorage.getItem('specOption') == '1'))) {$('#quallySettings')[0].style.height = 270+"px";
    $('#pageOne').attr('style', 'position:absolute; top:240px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:240px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:240px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:240px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:240px; left:150px; width:20px; z-index:901; cursor:pointer;');}
});
$('#western').click(function() {
	$('.sorevClassic').hide();
	$('.sorevWestern').show(200);
	$('#classic').prop('checked', false);
	if (!((localStorage.getItem('specOption') == '0') || (localStorage.getItem('specOption') == '1'))) {$('#quallySettings')[0].style.height = 270+"px";
    $('#pageOne').attr('style', 'position:absolute; top:240px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:240px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:240px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:240px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:240px; left:150px; width:20px; z-index:901; cursor:pointer;');}
});
//Функция запускающая бота
$('#quallyOnBtn').click(function () {
    if (startQPower == '1') {
    	localStorage.setItem('startQPower', '0');
    	localStorage.setItem('pauseQPower', '0');
    	localStorage.setItem('amountHorses', '0');
    	localStorage.setItem('amountNow', '0');
    	localStorage.removeItem('horseMom');
    }
    else {
    	localStorage.setItem('startQPower', '1');
    }
    location.reload();
});
//Функция паузы
$('#quallyPauseBtn').click(function () {
	if (startQPower == '1') {
		if (pauseQPower == '1') {
    		localStorage.setItem('pauseQPower', '0');
	    }
	    else {
	    	localStorage.setItem('pauseQPower', '1');
	    }
	    location.reload();
	}
});

$('#quallySetBtn').click(function() {
    $('#quallySettings').toggle("fast");
});
$('#crestik').click(function() {
    $('#quallySettings').hide("fast");
});

$('#pageOne').click(function() {
    $('.optionsTab1').show(200);
    $('.optionsTab2').hide();
    $('.optionsTab3').hide();
    $('.optionsTab4').hide();
    $('.optionsTab5').hide();
    $('#quallySettings')[0].style.height = 175+"px";
    $('#pageOne').attr('style', 'position:absolute; top:145px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:145px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:145px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:145px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:145px; left:150px; width:20px; z-index:901; cursor:pointer;');
});

$('#pageTwo').click(function() {
    $('.optionsTab2').show(200);
    $('.optionsTab1').hide();
    $('.optionsTab3').hide();
    $('.optionsTab4').hide();
    $('.optionsTab5').hide();
    $('#quallySettings')[0].style.height = 240+"px";
    $('#pageOne').attr('style', 'position:absolute; top:210px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:210px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:210px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:210px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:210px; left:150px; width:20px; z-index:901; cursor:pointer;');
});
$('#pageThree').click(function() {
    $('.optionsTab3').show(200);
    $('.optionsTab1').hide();
    $('.optionsTab2').hide();
    $('.optionsTab4').hide();
    $('.optionsTab5').hide();
    if ($('#classic').prop('checked') || $('#western').prop('checked')) {
	    $('#quallySettings')[0].style.height = 270+"px";
	    $('#pageOne').attr('style', 'position:absolute; top:240px; left:30px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageTwo').attr('style', 'position:absolute; top:240px; left:60px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageThree').attr('style', 'position:absolute; top:240px; left:90px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageFour').attr('style', 'position:absolute; top:240px; left:120px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageFive').attr('style', 'position:absolute; top:240px; left:150px; width:20px; z-index:901; cursor:pointer;');
	}
	else {
		$('#quallySettings')[0].style.height = 135+"px";
	    $('#pageOne').attr('style', 'position:absolute; top:105px; left:30px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageTwo').attr('style', 'position:absolute; top:105px; left:60px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageThree').attr('style', 'position:absolute; top:105px; left:90px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageFour').attr('style', 'position:absolute; top:105px; left:120px; width:20px; z-index:901; cursor:pointer;');
	    $('#pageFive').attr('style', 'position:absolute; top:105px; left:150px; width:20px; z-index:901; cursor:pointer;');
	}
});
$('#pageFour').click(function() {
    $('.optionsTab3').hide();
    $('.optionsTab1').hide();
    $('.optionsTab2').hide();
    $('.optionsTab4').show(200);
    $('.optionsTab5').hide();
    $('#quallySettings')[0].style.height = 215+"px";
    $('#pageOne').attr('style', 'position:absolute; top:185px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:185px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:185px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:185px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:185px; left:150px; width:20px; z-index:901; cursor:pointer;');
});
$('#pageFive').click(function() {
    $('.optionsTab3').hide();
    $('.optionsTab1').hide();
    $('.optionsTab2').hide();
    $('.optionsTab4').hide();
    $('.optionsTab5').show(200);
    $('#quallySettings')[0].style.height = 345+"px";
    $('#pageOne').attr('style', 'position:absolute; top:315px; left:30px; width:20px; z-index:901; cursor:pointer;');
    $('#pageTwo').attr('style', 'position:absolute; top:315px; left:60px; width:20px; z-index:901; cursor:pointer;');
    $('#pageThree').attr('style', 'position:absolute; top:315px; left:90px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFour').attr('style', 'position:absolute; top:315px; left:120px; width:20px; z-index:901; cursor:pointer;');
    $('#pageFive').attr('style', 'position:absolute; top:315px; left:150px; width:20px; z-index:901; cursor:pointer;');
});

$('.radioBt').on('change', function () {
    if ($('#classic').prop('checked')) {localStorage.setItem('specOption', 0);}
	else if ($('#western').prop('checked')) {localStorage.setItem('specOption', 1);}
});

function getSpecOption() {
	if ((localStorage.getItem('specOption') == '0') || (localStorage.getItem('specOption') == '1')) {
		$('#quallySettings .radioBt').eq(+localStorage.getItem('specOption')).click();
	}
}

$('#singlePause').on('change', function () {
    localStorage.setItem('singlePause', $('#singlePause option:selected').val());
});

function getSinglePause() {
	var value = localStorage.getItem("singlePause");
    $('#singlePause').val(value).change();
}

$('#doLesson').on('change', function () {
	var chk;
    if ($('#doLesson').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('doLesson', chk);
});

function getDoLesson() {
    var chk = localStorage.getItem('doLesson');
    if (chk == '1') {
        $('#doLesson').prop('checked', true);
    } else {$('#doLesson').prop('checked', false);}
}

$('#babyPlay').on('change', function () {
    var chk;
    if ($('#babyPlay').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('babyPlay', chk);
});

function getBabyPlay() {
    var chk = localStorage.getItem('babyPlay');
    if (chk == '1') {
        $('#babyPlay').prop('checked', true);
    } else {$('#babyPlay').prop('checked', false);}
}

$('#walkOption1').on('change', function () {
    localStorage.setItem('walkOption1', $("#walkOption1 option:selected").val());
});

function getWalkOption1() {
	var value = localStorage.getItem("walkOption1");
	if (value == null) {value = '';}
    $('#walkOption1').val(value).change();
}

$('#walkOption2').on('change', function () {
    localStorage.setItem('walkOption2', $("#walkOption2 option:selected").val());
});

function getWalkOption2() {
	var value = localStorage.getItem("walkOption2");
	if (value == null) {value = '';}
    $('#walkOption2').val(value).change();
}

$('#amountHorses').on('change', function () {
    localStorage.setItem('amountHorses', $("#amountHorses").val());
});

function getAmountHorses() {
	var value = localStorage.getItem("amountHorses");
    $('#amountHorses').val(value);
}
//------------------------------------------------------------
$('#trainOption1').on('change', function () {
	localStorage.setItem('trainOption1', $("#trainOption1 option:selected").val());
});

function getTrainOption1() {
	var value = localStorage.getItem("trainOption1");
	if (value == null) {value = '';}
    $('#trainOption1').val(value).change();
}

$('#trainOption2').on('change', function () {
    localStorage.setItem('trainOption2', $("#trainOption2 option:selected").val());
});

function getTrainOption2() {
	var value = localStorage.getItem("trainOption2");
	if (value == null) {value = '';}
    $('#trainOption2').val(value).change();
}

$('#trainOption3').on('change', function () {
    localStorage.setItem('trainOption3', $("#trainOption3 option:selected").val());
});

function getTrainOption3() {
	var value = localStorage.getItem("trainOption3");
	if (value == null) {value = '';}
    $('#trainOption3').val(value).change();
}

$('#trainOption4').on('change', function () {
    localStorage.setItem('trainOption4', $("#trainOption4 option:selected").val());
});

function getTrainOption4() {
	var value = localStorage.getItem("trainOption4");
	if (value == null) {value = '';}
    $('#trainOption4').val(value).change();
}

$('#trainOption5').on('change', function () {
    localStorage.setItem('trainOption5', $("#trainOption5 option:selected").val());
});

function getTrainOption5() {
	var value = localStorage.getItem("trainOption5");
	if (value == null) {value = '';}
    $('#trainOption5').val(value).change();
}

$('#trainOption6').on('change', function () {
    localStorage.setItem('trainOption6', $("#trainOption6 option:selected").val());
});

function getTrainOption6() {
	var value = localStorage.getItem("trainOption6");
	if (value == null) {value = '';}
    $('#trainOption6').val(value).change();
}

$('#train2Option1').on('change', function () {
    localStorage.setItem('train2Option1', $("#train2Option1 option:selected").val());
});

function getTrain2Option1() {
	var value = localStorage.getItem("train2Option1");
	if (value == null) {value = '';}
    $('#train2Option1').val(value).change();
}

$('#train2Option2').on('change', function () {
    localStorage.setItem('train2Option2', $("#train2Option2 option:selected").val());
});

function getTrain2Option2() {
	var value = localStorage.getItem("train2Option2");
	if (value == null) {value = '';}
    $('#train2Option2').val(value).change();
}

$('#train2Option3').on('change', function () {
    localStorage.setItem('train2Option3', $("#train2Option3 option:selected").val());
});

function getTrain2Option3() {
	var value = localStorage.getItem("train2Option3");
	if (value == null) {value = '';}
    $('#train2Option3').val(value).change();
}

$('#train2Option4').on('change', function () {
    localStorage.setItem('train2Option4', $("#train2Option4 option:selected").val());
});

function getTrain2Option4() {
	var value = localStorage.getItem("train2Option4");
	if (value == null) {value = '';}
    $('#train2Option4').val(value).change();
}

$('#train2Option5').on('change', function () {
    localStorage.setItem('train2Option5', $("#train2Option5 option:selected").val());
});

function getTrain2Option5() {
	var value = localStorage.getItem("train2Option5");
	if (value == null) {value = '';}
    $('#train2Option5').val(value).change();
}

$('#train2Option6').on('change', function () {
    localStorage.setItem('train2Option6', $("#train2Option6 option:selected").val());
});

function getTrain2Option6() {
	var value = localStorage.getItem("train2Option6");
	if (value == null) {value = '';}
    $('#train2Option6').val(value).change();
}
//-------------------------------------------------------------------
$('#amunitionOption').on('change', function () {
    localStorage.setItem('amunitionOption', $("#amunitionOption option:selected").val());
});

function getAmunitionOption() {
	var value = localStorage.getItem("amunitionOption");
    $('#amunitionOption').val(value).change();
}

$('#bandeOption').on('change', function () {
	var chk;
    if ($('#bandeOption').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('bandeOption', chk);
});

function getBandeOption() {
    var chk = localStorage.getItem('bandeOption');
    if (chk == '1') {
        $('#bandeOption').prop('checked', true);
    } else {$('#bandeOption').prop('checked', false);}
}

$('#bonnetOption').on('change', function () {
	var chk;
    if ($('#bonnetOption').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('bonnetOption', chk);
});

function getBonnetOption() {
    var chk = localStorage.getItem('bonnetOption');
    if (chk == '1') {
        $('#bonnetOption').prop('checked', true);
    } else {$('#bonnetOption').prop('checked', false);}
}

$('.sorevClassic select').on('click', function () {
    var a = $(this).attr('id');
    localStorage.setItem((this.getAttribute('id').slice(0, -1)), ($('#'+a+' option:selected').val()));
});

$('.sorevWestern select').on('click', function () {
    var a = $(this).attr('id');
    localStorage.setItem((this.getAttribute('id').slice(0, -1)), ($('#'+a+' option:selected').val()));
});

function getCompOption1() {
	var value = localStorage.getItem("compOption1");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(0).val(value).change();
    $('.sorevWestern select').eq(0).val(value).change();
}
function getCompOption2() {
	var value = localStorage.getItem("compOption2");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(1).val(value).change();
    $('.sorevWestern select').eq(1).val(value).change();
}
function getCompOption3() {
	var value = localStorage.getItem("compOption3");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(2).val(value).change();
    $('.sorevWestern select').eq(2).val(value).change();
}
function getCompOption4() {
	var value = localStorage.getItem("compOption4");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(3).val(value).change();
    $('.sorevWestern select').eq(3).val(value).change();
}
function getCompOption5() {
	var value = localStorage.getItem("compOption5");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(4).val(value).change();
    $('.sorevWestern select').eq(4).val(value).change();
}
function getComp2Option1() {
	var value = localStorage.getItem("comp2Option1");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(5).val(value).change();
    $('.sorevWestern select').eq(5).val(value).change();
}
function getComp2Option2() {
	var value = localStorage.getItem("comp2Option2");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(6).val(value).change();
    $('.sorevWestern select').eq(6).val(value).change();
}
function getComp2Option3() {
	var value = localStorage.getItem("comp2Option3");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(7).val(value).change();
    $('.sorevWestern select').eq(7).val(value).change();
}
function getComp2Option4() {
	var value = localStorage.getItem("comp2Option4");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(8).val(value).change();
    $('.sorevWestern select').eq(8).val(value).change();
}
function getComp2Option5() {
	var value = localStorage.getItem("comp2Option5");
	if (value == null) {value = '';}
    $('.sorevClassic select').eq(9).val(value).change();
    $('.sorevWestern select').eq(9).val(value).change();
}

$('#amountCovers').on('change', function () {
    localStorage.setItem('amountCovers', $("#amountCovers").val());
});

function getAmountCovers() {
	var value = localStorage.getItem("amountCovers");
    $('#amountCovers').val(value);
}

$('#boyName').on('change', function () {
    localStorage.setItem('boyName', $("#boyName").val());
});

function getBoyName() {
	var value = localStorage.getItem("boyName");
    if (value !== null) {} else value = "";
    $('#boyName').val(value).change();
}

$('#girlName').on('change', function () {
    localStorage.setItem('girlName', $("#girlName").val());
});

function getGirlName() {
	var value = localStorage.getItem("girlName");
    if (value !== null) {} else value = "";
    $('#girlName').val(value).change();
}

$('#affixeOption').on('change', function () {
    localStorage.setItem('affixeOption', $("#affixeOption").val());
});

function getAffixeOption() {
	var value = localStorage.getItem("affixeOption");
    if (value !== null) {} else value = "";
    $('#affixeOption').val(value).change();
}

$('#containerOption').on('change', function () {
    localStorage.setItem('containerOption', $("#containerOption").val());
});

function getContainerOption() {
	var value = localStorage.getItem("containerOption");
    if (value !== null) {} else value = "";
    $('#containerOption').val(value).change();
}

$('#ksk').on('change', function () {
    localStorage.setItem('ksk', $("#ksk option:selected").val());
});

function getKsk() {
	var value = localStorage.getItem("ksk");
    $('#ksk').val(value).change();
}

$('#place').on('change', function () {
    localStorage.setItem('place', $("#place option:selected").val());
});

function getPlace() {
	var value = localStorage.getItem("place");
    $('#place').val(value).change();
}

$('#duree').on('change', function () {
    localStorage.setItem('duree', $("#duree option:selected").val());
});

function getDuree() {
	var value = localStorage.getItem("duree");
    $('#duree').val(value).change();
}

$('#kskCarrot').on('change', function () {
    var chk;
    if ($('#kskCarrot').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('kskCarrot', chk);
});

function getKskCarrot() {
    var chk = localStorage.getItem('kskCarrot');
    if (chk == '1') {
        $('#kskCarrot').prop('checked', true);
    } else {$('#kskCarrot').prop('checked', false);}
}

$('#kskMash').on('change', function () {
    var chk;
    if ($('#kskMash').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('kskMash', chk);
});

function getKskMash() {
    var chk = localStorage.getItem('kskMash');
    if (chk == '1') {
        $('#kskMash').prop('checked', true);
    } else {$('#kskMash').prop('checked', false);}
}

$('#place2').on('change', function () {
    localStorage.setItem('place2', $("#place2 option:selected").val());
});

function getPlace2() {
	var value = localStorage.getItem("place2");
    $('#place2').val(value).change();
}

$('#duree2').on('change', function () {
    localStorage.setItem('duree2', $("#duree2 option:selected").val());
});

function getDuree2() {
	var value = localStorage.getItem("duree2");
    $('#duree2').val(value).change();
}

$('#kskCarrot2').on('change', function () {
    var chk;
    if ($('#kskCarrot2').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('kskCarrot2', chk);
});

function getKskCarrot2() {
    var chk = localStorage.getItem('kskCarrot2');
    if (chk == '1') {
        $('#kskCarrot2').prop('checked', true);
    } else {$('#kskCarrot2').prop('checked', false);}
}

$('#kskMash2').on('change', function () {
    var chk;
    if ($('#kskMash2').prop('checked')) {chk = '1';}
    else chk = '0';
    localStorage.setItem('kskMash2', chk);
});

function getKskMash2() {
    var chk = localStorage.getItem('kskMash2');
    if (chk == '1') {
        $('#kskMash2').prop('checked', true);
    } else {$('#kskMash2').prop('checked', false);}
}

$('#myKsk').on('change', function () {
    localStorage.setItem('myKsk', $("#myKsk").val());
});

function getMyKsk() {
	var value = localStorage.getItem("myKsk");
    if (value !== null) {} else value = "";
    $('#myKsk').val(value).change();
}

$('#reservedKsk').on('change', function () {
    localStorage.setItem('reservedKsk', $("#reservedKsk").val());
});

function getReservedKsk() {
	var value = localStorage.getItem("reservedKsk");
    if (value !== null) {} else value = "";
    $('#reservedKsk').val(value).change();
}
