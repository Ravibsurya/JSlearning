console.log("--------------------------------------------------");


  function checkPrimeNumber(num){
    let count=0;
    
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 && num>1 ) {
                count++;
            }
        }
        if (count == 2) {
            console.log(`${num} => is a prime number`);
        
        } else {
            console.log(`${num} => is not a prime number`);
        }
    }
   
 checkPrimeNumber(11);
 checkPrimeNumber(21);