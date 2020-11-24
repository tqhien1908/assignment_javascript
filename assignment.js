var students = ['toan', 'tung', 'hoang', 'huong']
var numbers = [2, 3, 6, 9, 13, 27]	
var names = ['bui van nguyen',
			 'tao van hung', 
			 'nguyen xuan tung', 
			 'nguyen manh tuan', 
			 'tran quang hien'
];

var numbers_2 = [9, 13, 17, 34, 56]

var solution_3_1 = []
var solution_3_2 = []
var solution_4_1 = null
var solution_4_2 = []
var solution_4_3 = null

// Problem 2
for (let i = 0; i < numbers.length; i++){
	if ( numbers[i] % 2 == 0 ){
		numbers[i] *= 2;
	}
	else{
		numbers[i] *= 3;
	}
}


//problem 3:
for (let i = 0; i < names.length; i++){
	cur_name = names[i];
	splited_name = cur_name.split(' ');
	if ( splited_name[0] == 'nguyen' ) {
		solution_3_1.push(i);
	}

	else if  ( splited_name[0] == 'bui' ){

		solution_3_2.push(i)

	}
}

//problem 4:
numbers_2.forEach( number => {

	solution_4_1 += number % 3
	solution_4_2.push(number + 2)
	solution_4_3 += number

})
solution_4_3 /= 4

// Print

//Problem 1
console.log('Problem 1: Writing loop to say hello to each student');
students.forEach( student => 
{
	console.log( "Hello" + ' ' + student)
});

//Problem 2
console.log('Problem 2: Writing loop to multiply odd numbers by 3 and even numbers by 2');
console.log(numbers)

//Problem 3
console.log('Problem 3')
console.log('all people in array: ', names)
console.log('3.1 Names starting with nguyen:')
solution_3_1.forEach(index => {
	console.log(names[index])
})
console.log('3.2 The number of names starting with bui is : ')
console.log(solution_3_2.length)
console.log(' ')
console.log('3.3 Does every name start with nguyen? : ')

if (solution_3_1.length == names.length){
	console.log('Yes')
}
else{
	console.log('No')
}

console.log('Filter all names starting with nguyen')

for (let i = 0; i < names.length; i++){

	if (!solution_3_1.includes(i)){
		console.log(names[i])
	}

}

// Problem 4
console.log('Problem 4')
console.log('4.1 The sum of remainders on dividing all elements by 3:')
console.log(solution_4_1)
console.log('4.2 The new array after adding each element by 2:')
console.log(solution_4_2)
console.log('4.4 The sum of array after dividing by 4')
console.log(solution_4_3)