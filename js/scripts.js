// Business Logic for AddressBook ---------
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
function contactEntry(accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
}

//Business Logic for Money Management
function moneyManagement(balance, deposit, withdraw) {
return balance + deposit - withdraw;
}


function showContactEntry(contactEntryId) {
  const contactEntry = bankAccount.findContactEntry(contactEntryId);
  $("#show-contactEntry").show();
  $(".account-Name").html(contactEntry.accountName);
}