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

// Multiply a two-digit number by a single-digit number (e.g., 34 × 7)
export function singleMultiplication() {
    const message1 = document.querySelector('.message1');
    const input = document.querySelector('input');
    const n1 = Math.floor(Math.random() * 90) + 10; // 10-99
    const n2 = Math.floor(Math.random() * 9) + 1;  // 1-9
    const ans = n1 * n2;
    if (message1) message1.innerText = `${n1} × ${n2} = `;
    _clearInput(input);
    return ans;
}

export function doubleMultiplication() {
    const message1 = document.querySelector('.message1');
    const input = document.querySelector('input');
	// Multiply two-digit by two-digit numbers (10-99)
	const n1 = Math.floor(Math.random() * 90) + 10; // 10-99
	const n2 = Math.floor(Math.random() * 90) + 10; // 10-99
    const ans = n1 * n2;
    if (message1) message1.innerText = `${n1} × ${n2} = `;
    _clearInput(input);
    return ans;
}

export function tripleMultiplication() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	// Multiply three-digit by three-digit (e.g., 123 × 456)
	const n1 = Math.floor(Math.random() * 900) + 100; // 100-999
	const n2 = Math.floor(Math.random() * 900) + 100; // 100-999
	const ans = n1 * n2;
	if (message1) message1.innerText = `${n1} × ${n2} = `;
	_clearInput(input);
	return ans;
}

// Divide a two-digit number by a single-digit number with an integer result
export function singleDevide() {
	const message1 = document.querySelector('.message1');
	const input = document.querySelector('input');
	// Choose divisor d in 2..9
	let d = Math.floor(Math.random() * 8) + 2;
	// Determine quotient range so that dividend = d * q is between 10 and 99
	let qMin = Math.ceil(10 / d);
	let qMax = Math.floor(99 / d);
	if (qMin < 2) qMin = 2; // avoid trivial q=1 when possible
	// Fallback in rare edge case (shouldn't happen for d in 2..9)
	if (qMax < qMin) {
		d = 2;
		qMin = Math.ceil(10 / d);
		qMax = Math.floor(99 / d);
	}
	const q = Math.floor(Math.random() * (qMax - qMin + 1)) + qMin;
	const dividend = d * q; // guaranteed 10..99
	const ans = q;
	if (message1) message1.innerText = `${dividend} ÷ ${d} = `;
	_clearInput(input);
	return ans;
}

singleDevide
