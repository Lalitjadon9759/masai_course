function createEmployee(name,role,salary){
    return {
        name:name,
        role:role,
        salary:salary,
        introduce:function (){
            console.log(`hello , I am ${name}, working as a ${role} .`)
        }
    }
}
const employee1=createEmployee("Alice","developer",8000)
employee1.introduce()