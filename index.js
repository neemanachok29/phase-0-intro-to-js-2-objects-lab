// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Brooklyn"
}
function  updateEmployeeWithKeyAndValue(employee, key = 'streetAddress', value = "11 Brooklyn"){
    const updateEmployee = employee;
    for (const i in employee){
        delete employee[i];
    }
    updateEmployee.name = "Sam";
    const newEmployee = {...updateEmployee, streetAddress: value}
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;
}
const deleteFromEmployeeByKey = (employee, key)=> {
employee[key] = "Sam";
const newEmployee = {...employee, name: undefined}
return newEmployee;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}