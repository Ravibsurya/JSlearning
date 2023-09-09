class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary= emp_salary;
    this.emp_company =emp_company;

    }

    }
 const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro"); 
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro"); 
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR",85000,"Infy");

const employeeArray = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`------------------------- Step 1 -------------------------`);

let tcsEmployeeName = employeeArray.filter(employee=>employee.emp_company == "TCS");
  
for (const employee of tcsEmployeeName) {
  
  console.log(`Company name : ${employee.emp_company}     Employee name : ${employee.emp_name} `);
}

console.log('------------------------ Step 2  -----------------------------------');

const wiproEmployees = employeeArray.filter(employee=> employee.emp_company == "Wipro");
let salarySum = 0
for (const element  of wiproEmployees) {
  salarySum = salarySum + element.emp_salary;
}
console.log(`Avarage salary from wipro ${salarySum/wiproEmployees.length}`);

console.log('-------------------------- Step 3 -----------------------------------------');

const wiproAndInfyEmp = employeeArray.filter((employee)=>{
   return employee.emp_company == "Wipro" || employee.emp_company == "Infy";
});

 let sumSalary = 0
for (const employee of wiproAndInfyEmp ) {
  sumSalary = sumSalary + employee.emp_salary;
}

console.log(`Avarage Salary of employee from wipro and infy ${sumSalary/wiproAndInfyEmp.length}`);