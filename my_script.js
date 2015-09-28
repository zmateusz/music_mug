$(document).ready(function() {
  var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1geo9Y7-A-vClJ7dCsNH0ZydgRPE_6Mi5jG24Lg6_0nI/edit?usp=sharing#gid=0';
  
  $('#statistics').sheetrock({
    url: mySpreadsheet
  });  
});
