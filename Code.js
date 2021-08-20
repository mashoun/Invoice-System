function LoadMenu(){
  //this function just make the menu appears in the sheets
  var ui = SpreadsheetApp.getUi();//here i can control the UI ( user interface ) using ui var
  var menu = ui.createMenu(CompanyName);//just creat menu
  menu.addItem('Refresh','Refresh');
  menu.addItem('Add Client','Add');
  menu.addItem('Save invoice','Save');

  menu.addToUi();//menu must be added to ui
  //add triger to make the function LoadMenu appears automaticaly whenever the sheet was opened
}

function index(id){
  //this function takes the ID of an product and return its Row number in sheets
  //must go to data sheet first
  var lr = DATA.getLastRow();//good to know how many products i have
  var IDS = DATA.getRange(2,1,lr-1).getValues();//lr-1 because there is a header row
  for(var i = 0 ; i<IDS.length;i++){
    if(IDS[i][0]==id) {
      //Check my first lecture i explained why IDS[i][0]
      //https://youtu.be/laCmLuNI4V4
      return i+2;
      // +1 for the header row in sheets and +1 because an array index starts from 0
    }

  }
  return -1;//if id not found
}

function Add(){
  var  ui = SpreadsheetApp.getUi();//ui control the User interface in sheets

  var name = ui.prompt('Enter Client name').getResponseText();
  var address = ui.prompt('Enter Client address').getResponseText();
  var number = ui.prompt('Enter Client number').getResponseText();
  //setting the values
  INVOICE.getRange(`B12`).setValue(name);
  INVOICE.getRange(`B13`).setValue(address);
  INVOICE.getRange(`B14`).setValue(number);

}

function Refresh(){

  INVOICE.deleteRows(18,(RC.getValue()-18)+1);
  RC.setValue(17);
}

function Save (){

  var Clien_name = INVOICE.getRange('B12').getValue();
  var new_name = ` ${CompanyName} / ${Clien_name}`;

  var new_sheet = SpreadsheetApp.create(new_name);

  INVOICE.copyTo(new_sheet);

  // i will increase the invoice number
  var nb = INVOICE.getRange(`D12`);
  nb.setValue(parseInt(nb.getValue())+1);

}

