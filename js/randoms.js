// Generator utilities exported as ES module functions.
// Each function updates the UI directly and returns the computed answer.

function _clearInput(input) { if (input) input.value = ''; }

export function doubleDigitsAddition() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	const n1 = Math.floor(Math.random() * 10) + 10; // 10-19
	const n2 = Math.floor(Math.random() * 10) + 10; // 10-19
	const ans = n1 + n2;
	if (message1) message1.innerText = `${n1} + ${n2} = `;
	_clearInput(input);
	return ans;
}

export function doubleDigitsSubtraction() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	const n1 = Math.floor(Math.random() * 4) + 31; // 31-34
	const n2 = Math.floor(Math.random() * 4) + 16; // 16-19
	const ans = n1 > n2 ? n1 - n2 : n2 - n1;
	if (message1) message1.innerText = n1 > n2 ? `${n1} - ${n2} = ` : `${n2} - ${n1} = `;
	_clearInput(input);
	return ans;
}

export function doubleDigitsSubtractionAdvanced() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	const n1 = Math.random() < 0.5
		? Math.floor(Math.random() * 4) + 31 // 31-34
		: Math.floor(Math.random() * 4) + 41; // 41-44
	const n2 = Math.random() < 0.5
		? Math.floor(Math.random() * 5) + 15 // 15-19
		: Math.floor(Math.random() * 5) + 25; // 25-29
	const ans = n1 > n2 ? n1 - n2 : n2 - n1;
	if (message1) message1.innerText = n1 > n2 ? `${n1} - ${n2} = ` : `${n2} - ${n1} = `;
	_clearInput(input);
	return ans;
}

// Renamed to the correct spelling: tripleDigitsAddition
export function tripleDigitsAddition() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	const n1 = Math.floor(Math.random() * 10) + 200; // 200-209
	const n2 = Math.floor(Math.random() * 10) + 100; // 100-109
	const ans = n1 + n2;
	if (message1) message1.innerText = `${n1} + ${n2} = `;
	_clearInput(input);
	return ans;
}

export function tripleDigitSubtractionAdvanced() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	const n1 = Math.random() < 0.5
		? Math.floor(Math.random() * 4) + 311 // 311-314
		: Math.floor(Math.random() * 4) + 411; // 411-414
	const n2 = Math.random() < 0.5
		? Math.floor(Math.random() * 5) + 115 // 115-119
		: Math.floor(Math.random() * 5) + 125; // 125-129
	const ans = n1 > n2 ? n1 - n2 : n2 - n1;
	if (message1) message1.innerText = n1 > n2 ? `${n1} - ${n2} = ` : `${n2} - ${n1} = `;
	_clearInput(input);
	return ans;
}


