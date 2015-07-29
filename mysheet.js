function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CodeSchool')
      .addItem('Hello World! Example', 'showDialog')
      .addToUi();
}
 
function showDialog() {
  SpreadsheetApp.getUi().alert('Hello, I\'m Factual!');
}
