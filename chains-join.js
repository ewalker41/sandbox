 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CodeSchool')
      .addItem('Log Range Values', 'logValues')
      .addToUi();
}

function logValues() {
  var myIndex={};
  var aa = sheet.getSheetValues(2, 6, 410, 2);
  for (i = 0; i < aa.length; i++) {
  var chainName = aa[i][0];
  var chainStatus = aa[i][1];
    myIndex[chainName] = chainStatus;
  }
  Logger.log(myIndex);
}

function joinChain() {
   
}
