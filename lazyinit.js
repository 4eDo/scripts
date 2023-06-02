    $(document).ready(function() { 
        if(!$("body > main > div > h2:contains('edit')").length == 0 && document.getElementById('partnertable')){ 
            document.querySelector("#partnertable > tbody > tr:nth-child(2)").setAttribute("hidden", true);
            document.querySelector("#partnertable > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=text]").setAttribute("readonly", true);
            document.querySelector("body > main > div > h2").innerText = document.querySelector("#partnertable > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=text]").value;
        }
        if(!$("body > main > div > h2:contains('add')").length == 0 && document.getElementById('partnertable')){ 
            document.querySelector("body > main > div > h2").innerText = "Добавить нового партнёра";
        }
        
        if(!$("body > main > div > h2:contains('edit')").length == 0 && document.getElementById('postamattable')){ 
            document.querySelector("body > main > div > h2").innerText = "Изменить постамат";
        }
        if(!$("body > main > div > h2:contains('add')").length == 0 && document.getElementById('postamattable')){ 
            document.querySelector("body > main > div > h2").innerText = "Добавить постамат";
        }
        if(document.querySelector("body > main > section > p") && document.querySelector("body > main > section > p").innerText.indexOf("ИЗМЕНЕНИЕ КОММЕНТАРИЯ К ТИКЕТУ") != -1) {
            document.querySelector("#comment").setAttribute("style", "width: 450px; height: 350px;");
        }
        if(document.querySelector("body > main > section > form > p:nth-child(4)") && document.querySelector("body > main > section > p").innerText.indexOf("ИМПОРТ СООБЩЕНИЙ ПРИ ПОМОЩИ CSV ФАЙЛА") != -1) {
            document.querySelector("body > main > section > form > p:nth-child(4)").innerHTML = "Вес файла не может превышать 20 МБ; рекомендуемый - 2 МБ; Кодировка UTF-8 с BOM или Windows-1251</p><p>Обработка файла займёт некоторое время. Пожалуйста, дождитесь, пока вас система не вернёт сама на страницу сообщений!";
        }
    });
