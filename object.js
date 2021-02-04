let person = {
    fristName : "koli",
    lastName : 'mulla',
    salary : 15000,
    getFullName: function(){
        console.log(this.fristName, this.lastName);
    },
    chargeBill(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

person.chargeBill(150);
 console.log(person.salary);
