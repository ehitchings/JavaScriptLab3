" use strict ";
var display = document.getElementById("display");
var phoneBook = [];
// function PhoneBook(name){
//   this.name = name;
//   let this.book = [];
//
//
// };

function listAllNames() {
  var text = "";
  for(var i = 0; i< phoneBook.length; i++){
    text += phoneBook[i].name + "</br>";
  }
  display.innerHTML = text;
  // code to list all names
};

function listAllNumbers() {
  var text = "";
  for(var i = 0; i< phoneBook.length; i++){
    text += phoneBook[i].number + "</br>";
  }
  display.innerHTML = text;
  // code to list all numbers
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  add(name, number);


};

function contact(name, number){
  this.name = name;
  this.number = number;

}

function add(name, number){
  var con = new contact(name, number);
  var len1 = phoneBook.length;
  phoneBook.push(con);
}

function showRemove() {
  var remove = prompt("Enter name to remove");
  removeEntry(remove);
};

function removeEntry(nameToRemove){
  for(var i = 0; i < phoneBook.length; i++){
    var entry = phoneBook[i];
    if(entry.name == nameToRemove){
      phoneBook.splice(i, 1);
      return;
    }
  }
}

function lookupNumber(name){
  for(var i = 0; i < phoneBook.length; i++){
    var entry = phoneBook[i];
    if(entry.name == name){
      var text = entry.number;
      display.innerHTML = entry.number + '</br>';
      return;

    }
  }
  display.innerHTML = "Entry not found";

}

function showLookup() {
  var lookup = prompt("Enter name of person who's number you want to lookup");
  lookupNumber(lookup);
};
