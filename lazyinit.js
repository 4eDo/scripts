    $(document).ready(function() { 
        if(!$("body > main > div > h2:contains('edit')").length == 0 && document.getElementById('partnertable')){ 
            document.querySelector("#partnertable > tbody > tr:nth-child(2)").setAttribute("hidden", true);
            document.querySelector("#partnertable > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=text]").setAttribute("readonly", true);
            document.querySelector("body > main > div > h2").innerText = document.querySelector("#partnertable > tbody > tr:nth-child(2) > td:nth-child(2) > p > input[type=text]").value;
        }
    });
