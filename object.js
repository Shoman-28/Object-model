let person = {
    fristName : "koli",
    lastName : 'mulla',
    salary : 15000,
    getFullName: function(){
        console.log(this.fristName, this.lastName);
    },
    chargeBill(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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

// sort-code
person.chargeBill.call(salamAli, 48, 10, 20);
person.chargeBill.call(salamAli, 52, 12, 12);
console.log(salamAli.salary);

person.chargeBill.call(salamKhan, 18, 20, 10);
person.chargeBill.call(salamKhan, 52, 12, 10);
console.log(salamKhan.salary);
// sort-code-end


// const salamAliCharg = person.chargeBill.bind(salamAli);
// salamAliCharg(200);
// salamAliCharg(200);
// console.log(salamAli.salary);
// console.log(person.salary);

// const salamKhanCharge = person.chargeBill.bind(salamKhan);
// salamKhanCharge(200);
// console.log(salamKhan.salary);


