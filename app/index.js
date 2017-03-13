//Write a function called *dataTypes* to compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
//For strings, return its length.
//For null or undefined return string ‘no value’
//For booleans return the boolean
//For numbers return a string showing how it compares to hundred e.g. For 67 return ‘less than 100’ for 4034 return ‘more than 100’ or equal to 100 as the case may be
//For arrays return the 3rd index, or undefined if it doesn’t exist.
//For functions call the function and pass in true as an argument and return it.


module.exports= {

	dataTypes: function(input){

	if(input ===null){

			return'no value';
			
		}

		else if(typeof input==='undefined'){

			return 'no value';


		}

		else if(typeof input ==='boolean'){


			return input;
		}

		else if(typeof input === 'number'){

			if(input<100){
				return 'less than 100';
			}

			else if(input>100){
				return 'more than 100';
			}

			else{

				return 'equal to 100';
			}

		}

		else if(typeof input ==='function'){

			return input(true);

		}

		else if(typeof input==='string'){


			return input.length;
		}


		else if(Array.isArray(input)){



				return input[2];

			
					}

		},



	getPrimes: function(n){


	if(typeof(n)==='number'){


		if(n<2 && n>0){

		return [];
	}

	if(n<=0){
		 return 'wrong input';
	}



	var primeNo=[2], isPrime;


	for (var i =3; i <n; i +=2){

		isPrime = true;

		for (var j=0; j<primeNo.length;j++){

			if(i%primeNo[j]==0){
				isPrime=false;
				break;
			}

		}


		if(isPrime){
			primeNo.push(i);
		}



	}

	return primeNo;

	}


	else{


	}



	
}
}


