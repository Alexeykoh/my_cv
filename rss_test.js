function toReadable (number) {
	function isUndefined(input){
		return input === undefined;
	}
	let readableText       = [];
	let newArr             = [];
	let extraArr           = [];
	//
	const baseNumbersArr   = {
		0:  'zero',
		1:  'one',
		2:  'two',
		3:  'three',
		4:  'four',
		5:  'five',
		6:  'six',
		7:  'seven',
		8:  'eight',
		9:  'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty'
	}
	const secondNumbersArr = {
		1: 'ten',
		2: 'twenty',
		3: 'thirty',
		4: 'forty',
		5: 'fifty',
		6: 'sixty',
		7: 'seventy',
		8: 'eighty',
		9: 'ninety'
	}
	const thirdNumbersArr = {
		1: 'hundred',
		2: 'thousand'
	}
	//
	let toPush = '';
	let arrString          = number.toString().split ('')
	if (arrString.length<3){
		toPush = arrString.join('')
		extraArr.push(toPush)
	} else {
		for (let i = 0; i < number.toString().length; i++) {
			toPush = arrString.splice (0, i).join('');
			if (toPush.length !== 0){
				extraArr.push(toPush)
			}
		}
	}
	//
	extraArr.reverse()
	for (let i = 0; i < extraArr.length; i++) {
		if(baseNumbersArr[extraArr[i]]!==undefined){
			if (!isUndefined(thirdNumbersArr[i])){
				readableText.push(thirdNumbersArr[i])
			}
			if (!isUndefined(baseNumbersArr[extraArr[i]])){
				readableText.push(baseNumbersArr[extraArr[i]])
			}
		} else {
			if(extraArr[i][1]!=='0'){
				if (!isUndefined(baseNumbersArr[extraArr[i][1]])){
					readableText.push(baseNumbersArr[extraArr[i][1]])
				}
			}
			if (!isUndefined(secondNumbersArr[extraArr[i][0]])){
				readableText.push(secondNumbersArr[extraArr[i][0]])
			}
		}
	}
	return readableText.reverse().join(' ');
}

console.log (
	toReadable (909)
)
