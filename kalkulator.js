function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    const input = document.getElementById('result').value;
    const sanitizedInput = sanitizeInput(input);

    try {
        const result = eval(sanitizedInput);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function sanitizeInput(input) {
    const regex = /[^0-9+\-*/.() \t]/g;
    return input.replace(regex, '');
}

function clearResult() {
    document.getElementById('result').value = '';
}