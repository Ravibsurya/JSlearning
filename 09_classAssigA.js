class Vehicle {

    constructor(model,color,average,prize,typeOfFuel){
  
      this.model = model;
  
      this.color = color;
  
      this.average = average;
  
      this.prize = prize;
  
      this.typeOfFuel = typeOfFuel;
  
    }
  }
  
   
  
  let vehicleKTM = new Vehicle("Duke", "Orange" , 65, 80000 , "Petrol");
  
   
  
  let vehicleRoyalEnfield = new Vehicle("Hunter", "Black" , 60, 85000, "Petrol");
  
   
  
  let vehicleBajaj = new Vehicle("Dominar", "Green", 50, 90000, "Petrol");
  
   
  
  let vehicleYamaha = new Vehicle ("Fascino", "Red", 55, 75000, "Petrol");
  
   
  
  let vehicleTvs = new Vehicle ("Jupiter", "Orange", 60 ,65000, "Petrol");
  
   
  
  const arrayOfVehicles = [vehicleKTM, vehicleRoyalEnfield, vehicleBajaj, vehicleYamaha, vehicleTvs];
  for (const Vehicle of  arrayOfVehicles ) {
    console.log(`Vehicle Details is Model : ${Vehicle.model} , Color : ${Vehicle.color},
  
  Average : ${Vehicle.average}, Prize : ${Vehicle.prize}, Type Of Fuel : ${Vehicle.typeOfFuel}`);
  }
  console.log("-------------------------------------------------------------------------------------");

  class College {

    constructor(name,year,city,founderName ){
  
      this.name = name;
  
      this.year = year;
  
      this.city = city;
  
      this.founderName = founderName;
  
    }
  
    display(){
  
      console.log(`College Details is Name : ${this.name} , Year : ${this.year}
  
      City : ${this.city}, Fonder Name  : ${this.founderName}`);
    }
  }
  let collegeWalchand = new College ("Kasturbai  Walchand", 1987, "Sangli","Kasturbai");

  let collegeShivaji = new College ("Chatrapati Shivaji", 1980, "Karad","Bhosale");

  let collegePvp = new College ("Padmabhushan", 1982, "Satara","Vasantrao");

  let collegeDkt = new College ("Dattaji Kadam", 1990, "Ichalkaranji","kadam");
  
  collegeWalchand.display();

  collegeShivaji.display();

  collegePvp .display();

  collegeDkt.display();

  console.log("-------------------------------------------------------------------------------------");

  transversObject = function (objectName) {
    for (const key in objectName) {
        if (objectName.hasOwnProperty.call(objectName, key)) {
            const element = objectName[key];
            console.log(`${key} : ${element}`);
        }
    }
}
transversObject(collegeWalchand);
console.log('--------------------------------------------------------');
transversObject(collegeShivaji);
console.log('--------------------------------------------------------');
transversObject(collegePvp);
console.log('--------------------------------------------------------');
transversObject(collegeDkt);
console.log('--------------------------------------------------------');