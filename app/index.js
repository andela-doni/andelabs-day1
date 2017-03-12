//Write a function called *dataTypes* to compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
//For strings, return its length.
//For null or undefined return string ‘no value’
//For booleans return the boolean
//For numbers return a string showing how it compares to hundred e.g. For 67 return ‘less than 100’ for 4034 return ‘more than 100’ or equal to 100 as the case may be
//For arrays return the 3rd index, or undefined if it doesn’t exist.
//For functions call the function and pass in true as an argument and return it.


module.exports= {

	dataTypes: function(input){

		if(typeof(input)==='string'){

			return input.length;

		}

		else if(typeof(input)==='null'){

			return 'no value';


		}

		else if(typeof(input)==='boolean'){

			return boolean;
		}

		else if(typeof(input)==='number'){

			if(input<100){
				return 'less than 100';
			}
			else if(input==100){
				return 'equal to 100';
			}

			else{
				return 'more than 100';
			}

		}

		else if(Array.isArray(input)){


			if(input.length>=3){

				return input[2];
			}

			else{
				return 'undefined';
			}
			

		}

		else if(typeof input ==='function'){

			input(true);
		}

		
	}


}