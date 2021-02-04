let person = {
    fristName : "koli",
    lastName : 'mulla',
    salary : 15000,
    getFullName: function(){
        console.log(this.fristName, this.lastName);
    },
    chargeBill(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// person.chargeBill(150);
// person.chargeBill(100);
//  console.log(person.salary);
const salamKhan = {
    firstName: "salam",
    lastName: "khan",
    salary: 10000,
    
}
const salamAli = {
    firstName: "salam",
    lastName: "Ali",
    salary: 12000,
    
}
const salamAliCharg = person.chargeBill.bind(salamAli);
salamAliCharg(200);
salamAliCharg(200);
console.log(salamAli.salary);
console.log(person.salary);

const salamKhanCharge = person.chargeBill.bind(salamKhan);
salamKhanCharge(200);
console.log(salamKhan.salary);
// person.chargeBill();
