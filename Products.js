function pro1(){
  var ui = SpreadsheetApp.getUi();
  var id = 1;
  var unit_price = DATA.getRange(`C${index(id)}`).getValue();
  var pro_name = DATA.getRange(`B${index(id)}`).getValue();
  var total = 0 ;

  var qty = ui.prompt(`Enter ${pro_name} quantity `).getResponseText();
  //var res = ui.alert('FREE ??',ui.ButtonSet.YES_NO).getResponseText();
  var res =ui.alert('FREE ??',ui.ButtonSet.YES_NO);

  if(res == ui.Button.YES){
    pro_name = pro_name + ' FREE';
    unit_price = 0;

  }

  total = unit_price * qty;

  INVOICE.getRange(`B${RC.getValue()+1}`).setValue(pro_name);
  INVOICE.getRange(`E${RC.getValue()+1}`).setValue(qty);
  INVOICE.getRange(`F${RC.getValue()+1}`).setValue(unit_price);
  INVOICE.getRange(`G${RC.getValue()+1}`).setValue(total);

  RC.setValue(parseInt(RC.getValue())+1);

  INVOICE.insertRowAfter(RC.getValue());

}

function pro2(){
  var ui = SpreadsheetApp.getUi();
  var id = 2;
  var unit_price = DATA.getRange(`C${index(id)}`).getValue();
  var pro_name = DATA.getRange(`B${index(id)}`).getValue();
  var total = 0 ;

  var qty = ui.prompt(`Enter ${pro_name} quantity `).getResponseText();
  //var res = ui.alert('FREE ??',ui.ButtonSet.YES_NO).getResponseText();
  var res =ui.alert('FREE ??',ui.ButtonSet.YES_NO);

  if(res == ui.Button.YES){
    pro_name = pro_name + ' FREE';
    unit_price = 0;

  }

  total = unit_price * qty;

  INVOICE.getRange(`B${RC.getValue()+1}`).setValue(pro_name);
  INVOICE.getRange(`E${RC.getValue()+1}`).setValue(qty);
  INVOICE.getRange(`F${RC.getValue()+1}`).setValue(unit_price);
  INVOICE.getRange(`G${RC.getValue()+1}`).setValue(total);

  RC.setValue(parseInt(RC.getValue())+1);

  INVOICE.insertRowAfter(RC.getValue());

}

