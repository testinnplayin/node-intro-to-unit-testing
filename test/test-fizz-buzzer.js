const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
	//normal case
	it('should take a number and give an answer based on whether it\'s divisible by 15, 5 or 3', () => {
		const normalInputs = [
			{ a : 15, expected : 'fizz-buzz' },
			{ a : 5, expected : 'buzz' },
			{ a : 3, expected : 'fizz' },
			{ a : 4, expected : 4 }
		];

		normalInputs.forEach( (input) => {
			const answer = fizzBuzzer(input.a);
			answer.should.be.equal(input.expected);
		});
	});

	//edge-case
	it('should throw an error if input is not a number', () => {
		const badInputs = [
			['a'],
			['1']
		];

		badInputs.forEach( (input) => {
			//closure IFFE that throws an error when bad input is passed to fizzBuzzer
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});