const employee = {
    name: "Sam",
    streetAddress: "York"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = { ...employee 
} ;
const streetAddress = "streetAddress"
newEmployee [streetAddress] = "11 Broadway"    
return newEmployee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee
    }
        const newEmployee2 = { 
streetAddress: "12 Broadway",           
name: "Sam"
}

    return newEmployee2 

}

function  deleteFromEmployeeByKey(employee, key){

}
function destructivelyDeleteFromEmployeeByKey(employee, key){

}
