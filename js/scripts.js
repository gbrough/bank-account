//Business Logic for AddressBook ---------
//AddressBook = BankAccount
//contacts = contactList
//contact = contactEntry

//Business Logic for Bank Accounts
function BankAccount() {
this.contactList = {};
this.currentId = 0;
}

BankAccount.prototype.addContactEntry = function(contactEntry) {
  contactEntry.id = this.assignId();
  this.contactList[contactEntry.id] = contactEntry;
}

BankAccount.prototype.findContactEntry = function (id) {
if (this.contactList[id] != undefined) {
  return this.contactList[id];
}
  return false;
}

BankAccount.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.deleteContactEntry = function(id) {
  if (this.contactList[id] === undefined) {
  return false;
}
  delete this.contactList[id];
  return true;
};

//Business Logic for Contact List
function contactEntry(accountName, balance) {
  this.accountName = accountName;
  this.balance = balance;
}

//Business Logic for Money Management
function moneyManagement(balance, deposit, withdraw) {
  balance = blankToZero(balance);
  deposit = blankToZero(deposit);
  withdraw = blankToZero(withdraw);
return balance + deposit - withdraw;
}

function showContactEntry(contactEntryId) {
  const contactEntry = bankAccount.findContactEntry(contactEntryId);
  $("#show-contactEntry").show();
  $(".account-Name").html(contactEntry.accountName);
}

function blankToZero(num) {
  if (isNaN(num)) {
    return 0;
  }
  return num;
}

// User Interface Logic
let bankAccount = new BankAccount();

$(document).ready(function () {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    const inputtedNewName = $("input#new-name").val();
    const inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    $("input#new-name").val("");  
    $("input#initial-deposit").val("")
    let newContactEntry = new contactEntry(inputtedNewName, inputtedInitialDeposit);
    bankAccount.addContactEntry(newContactEntry);
  });
  $("form#money-management").submit(function(event) {
    event.preventDefault();
    const inputtedAccountNumber = parseInt($("input#account-id").val());
    const inputtedDeposit = parseInt($("input#deposit-amount").val());
    const inputtedWithdrawl = parseInt($("input#withdraw-amount").val());
    $("input#account-id").val("");
    $("input#deposit-amount").val("");
    $("input#withdraw-amount").val("");
    const account = bankAccount.findContactEntry(inputtedAccountNumber);
    const currentBalance = account.balance;
    account.balance = moneyManagement(currentBalance,inputtedDeposit,inputtedWithdrawl);
  });
});


let moneyBags = new contactEntry("Money Bags",100000000);
let moneyRags = new contactEntry("Money Rags",0);
bankAccount.addContactEntry(moneyBags);
bankAccount.addContactEntry(moneyRags);