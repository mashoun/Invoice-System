const ID ="1CIyY1SWY-f47nfJFmDs_5-Csf_xStA6RB4ZvooH5xC0";//Put the Sheet ID here
var CompanyName = 'My Company';

var ss = SpreadsheetApp.openById(ID);//now we can access sheets.google.com
var ORDER = ss.getSheetByName('ORDER');//Here we can access the page ORDER using the variable
var INVOICE = ss.getSheetByName('Invoice');//same
var DATA = ss.getSheetByName('Data');//same
var RC = ORDER.getRange('A1');//RC represents the size of the invoice table
//RC stands for the Row Cell , the name is not important 
//The point is that RC = 17 , means that the product name + qty + unit price + total 
//must be inserted after the row 17 
//if we inserted for example 7 products
//RC then is equal to 24
//the starting row of the invoice ( must be 17 usually )




