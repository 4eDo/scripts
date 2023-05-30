$(window).load(function() {
  if(!$("body > main > div > h2:contains('edit')").length == 0) document.querySelector("#partnertable > tbody > tr:nth-child(2)").setAttribute("hidden", true);
});
