import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;

    constructor (fName:string,lName:string,age:number,gender:string,mob:number,acc:number){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}

interface BankAccount {
    accNumber : number,
    balance : number,
}

class Bank {
    customer : Customer[] = [];
    account : BankAccount[] = [];

    addCustomer(obj:Customer){
        this.customer.push(obj);

    }
    addAccountNumber(obj:BankAccount){
        this.account.push(obj);
    }
}

let myBank = new Bank();

for(let i:number = 1; i <= 3; i++){
let fName = faker.person.firstName('male')
let lName = faker.person.lastName()
let num = parseInt(faker.phone.number("3##########"));
const cus = new Customer(fName,lName,25*i,"male",num,1000+i);
myBank.addCustomer(cus);
myBank.addAccountNumber({accNumber: cus.accNumber,balance:100 * i});

}

async function bankService(bank:Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please Select the Service",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposite"]

    })
    
}
bankService(myBank);

