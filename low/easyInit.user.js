// ==UserScript==
// @name         УСТАНОВЩИК СХЕМЫ
// @version      0.1
// @description  Установщик схемы
// @namespace    http://tampermonkey.net/
// @author       4eDo (https://github.com/4eDo/lowadi)
// @match        https://www.lowadi.com/elevage/chevaux/*
// ==/UserScript==

//Настройки
		$('body#global').append('<div class="initPanel" style="display:block;color:#ffffff;position:fixed;width: 400px;height: 200px;top: 50%;margin-top: -100px;margin-left: -200px;padding: 20px;left: 50%;background-color:rgba(0, 0, 0, 0.9);z-index:990;border-radius: 4px;"></div>');
		$('.initPanel').append('<center><p style="z-index:999;color:#ffffff; font-size: 13px; font-family: Arial,Helvetica,sans-serif;text-shadow: 1px 1px 2px #778899;margin-top:5px;"><b>Настройки</b></p></center></br>');
		$('.initPanel').append('<p>Порода: <select id="inpHorseType" style=" ">'
								+'<option value="donskaya">	Дончак	</option>'
								+'<option value="mustang">	Муст	</option>'
							+'</select></p>');
		$('.initPanel').append('</br><center><button id="setInitParams" type="button"> Применить </button></center>');

	$('#setInitParams').click(function setOptions(){

        loadSchemes($('#inpHorseType option:selected').val());
		confirm("Настройки применены. Проверьте имена коней, аффикс, завод и настройки КСК, установите случки, выключите этот скрипт и запустите скрипт '4e Qually Power+'");
location.reload();
	});

async function loadSchemes(key) {
  const response = await fetch('https://raw.githubusercontent.com/4eDo/scripts/main/low_names.json');
  const names = await response.json();

        for (var i=0 ; i < names.length; i++)
        {
            if (names[i]["id"] == key) {
                localStorage.setItem("doLesson", names[i]["doLesson"]);
                localStorage.setItem("babyPlay", names[i]["babyPlay"]);
                localStorage.setItem("walkOption1", names[i]["walkOption1"]);
                localStorage.setItem("walkOption2", names[i]["walkOption2"]);
                localStorage.setItem("trainOption1", names[i]["trainOption1"]);
                localStorage.setItem("trainOption2", names[i]["trainOption2"]);
                localStorage.setItem("trainOption3", names[i]["trainOption3"]);
                localStorage.setItem("trainOption4", names[i]["trainOption4"]);
                localStorage.setItem("trainOption5", names[i]["trainOption5"]);
                localStorage.setItem("trainOption6", names[i]["trainOption6"]);
                localStorage.setItem("train2Option1", names[i]["train2Option1"]);
                localStorage.setItem("train2Option2", names[i]["train2Option2"]);
                localStorage.setItem("train2Option3", names[i]["train2Option3"]);
                localStorage.setItem("train2Option4", names[i]["train2Option4"]);
                localStorage.setItem("train2Option5", names[i]["train2Option5"]);
                localStorage.setItem("train2Option6", names[i]["train2Option6"]);
                localStorage.setItem("specOption", names[i]["specOption"]);
                localStorage.setItem("compOption1", names[i]["compOption1"]);
                localStorage.setItem("compOption2", names[i]["compOption2"]);
                localStorage.setItem("compOption3", names[i]["compOption3"]);
                localStorage.setItem("compOption4", names[i]["compOption4"]);
                localStorage.setItem("compOption5", names[i]["compOption5"]);
                localStorage.setItem("comp2Option1", names[i]["comp2Option1"]);
                localStorage.setItem("comp2Option2", names[i]["comp2Option2"]);
                localStorage.setItem("comp2Option3", names[i]["comp2Option3"]);
                localStorage.setItem("comp2Option4", names[i]["comp2Option4"]);
                localStorage.setItem("comp2Option5", names[i]["comp2Option5"]);
                localStorage.setItem("amountCovers", names[i]["amountCovers"]);
            }
        }
}
