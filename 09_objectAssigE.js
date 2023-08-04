let sbiBank = {
    bankName : "SBI Bank",
    location : "Sangli",
    accountNumber : "147258369",
    ifsc : "SBIN0001503",
    interestRate : 7.1,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName : "Axis Bank",
    location : "Satara",
    accountNumber : "741852963",
    ifsc : "AXIS0001503",
    interestRate : 7.2,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
axisBank.showDetails();

let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Kolhapur",
    accountNumber : "123654789",
    ifsc : "HDFC0001503",
    interestRate : 7.3,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
hdfcBank.showDetails();

let yesBank = {
    bankName : "yes Bank",
    location : "Pune",
    accountNumber : "789654123",
    ifsc : "YES0001503",
    interestRate : 7.4,
    showDetails : function() {
       console.log(`Bank Details : ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);
    }
}
yesBank.showDetails();