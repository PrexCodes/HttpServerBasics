//amount to be paid
//how many days in a week will you pay
//how many months
const prompt = require('prompt-sync')();
class Ajor{
    amountpaid(){
        try{
            let amount = 0
        let expectedamount, dailypayment = 0;
        console.log('Welcome to Ajor 3.0');
        let name = prompt('What is your name: ')
        console.log(name);
        
        console.log('What is the Duration')
        while(true){
        expectedamount = prompt('How much do you want to be paid in this month: ')
        let duration = prompt('How many days will you pay in this month: ')
        if(isNaN(expectedamount) || isNaN(duration)){
            console.log('Wrong Input');
            
            continue
        }
        else{
        dailypayment = Math.round((expectedamount/duration))
        console.log('You will have to be paying N', dailypayment, 'for', duration, 'days');
        let interest = parseInt(expectedamount) + dailypayment
        console.log('You will be paid N', interest, 'at the end of the month')
        console.log('')
        break
        }
        
        }
        
        while(true){
        let monies = prompt('How much do you want to put: ')
        if(monies.toLowerCase() === 'quit'){
            console.log('Total Money = ', amount)
           break
        }
        else{
            if(isNaN(monies)){
                console.log('Wrong Input');
                console.log('Money = ', amount)
            }
            else{
                
                amount = amount + parseInt(monies)
                console.log('Money = ', amount)
                expectedamount = expectedamount - amount
                if(expectedamount === 0){
                    console.log('completed payment for the month successffully');
                    break
                }
                else if(expectedamount < 0){
                    console.log('completed payment for the month successffully');
                    console.log('You have change of N', (0-expectedamount))
                    break
                }
                else{
                console.log('You still have N', expectedamount, 'to pay')
                continue
                }
        
            }
            }
        }
        
        }catch(error){
            console.log('Error Code 404 - Pls Start again');
            console.log(error.message);
        }
    }
}

let ajorinstance = new Ajor()
ajorinstance.amountpaid()