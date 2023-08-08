let bankSbi = {
    bankName: "SBI",
    accountNo: 15031,
    ifsc: "SBI001374",
    interestRate: "5.1"
}

let bankLocation = {
    street : "Kolhapur Road",
    city : "Sangli",
    pinCode : 416405,
}
let sbiLocation = Object.assign({} , bankSbi, bankLocation);
console.log(sbiLocation);
let locationSbi = {...bankSbi, bankLocation};
console.log(locationSbi);

let rateOfInterest = {
    homeLoanInterest : "6.3",
    personalLoanInterest : "5.9%",
    dueInterest : "6.1%"

}
let sbiDetails = Object.assign({} , bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
    }
}