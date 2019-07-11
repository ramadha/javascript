/**
  * @desc Find the longest length of subarray (contiguous block)
  * @param - a : single dimention array; k : positive integer;
  * @return - length of longest subarray;
*/

var longestSubArray = function(a,k){

	let sum 		= 0; 
	let count 		= 0; 
	let maxCount 	= 0;

	if(a.length > 0 && k >0){
		a.map(function(item, i){

			if ((sum + a[i]) <= k){ // increase count if it's <= k
				sum += a[i] ; 
				count += 1 ; 
			}else if(sum != 0){ // remove the previous element & add the current;
				sum = sum - a[i-count] + a[i];
			}

			maxCount = Math.max(count, maxCount);

		});
	}

	return maxCount;
}


let inputArray1 = [3,1,2,3]; 
let inputK1 	= 4;
let expected1	= 2;

let inputArray2 = [4,3,1,2,1]; 
let inputK2 	= 4;
let expected2	= 3;

let inputArray3 = [61,74,659,931,273,545,879,924,710,441,166,493,43,988,504,328,730,841,613,304,170,710,158,561,934,100,279,817,336,98,827,513,268,811,634,980,150,580,822,968,673,394,337,486,746,229,92,195,358,2,154,709,945,669,491,125,197,531,904,723,667,550]; 
let inputK3 	= 22337;
let expected3	= 46;


debug('Output >> '+longestSubArray(inputArray1,inputK1));
debug('Expected output >> '+expected1);
debug('---------------------------------');

debug('Output >> '+longestSubArray(inputArray2,inputK2));
debug('Expected output >> '+expected2);
debug('---------------------------------');

debug('Output >> '+longestSubArray(inputArray3,inputK3));
debug('Expected output >> '+expected3);
debug('---------------------------------');
