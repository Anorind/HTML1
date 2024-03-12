function countCharacters(str) {
    let letters = str.match(/[a-z]/gi);
    let digits = str.match(/[0-9]/g);
    let others = str.match(/[^a-z0-9]/gi);
    return {
        letters: letters ? letters.length : 0,
        digits: digits ? digits.length : 0,
        others: others ? others.length : 0
    };
}

function numberToText(n) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (n < 10) return units[n];
    if (n >= 10 && n < 20) return teens[n - 10];
    if (n >= 20) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + units[n % 10] : '');
}

function swapCase(str) {
    return str.replace(/[a-z0-9]/gi, function(c) {
        return c === c.toLowerCase() ? (c === c.toUpperCase() ? '_' : c.toUpperCase()) : c.toLowerCase();
    });
}

function toCamelCase(str) {
    return str.replace(/-([a-z])/g, function(g) { return g[1].toUpperCase(); });
}

function toAbbreviation(str) {
    return str.split(' ').map(word => word[0].toUpperCase()).join('');
}

function concatenateStrings(...args) {
    return args.join('');
}

function calculate(expression) {
    return new Function('return ' + expression)();
}

function parseUrl(url) {
    let a = document.createElement('a');
    a.href = url;
    return {
        protocol: a.protocol,
        domain: a.hostname,
        path: a.pathname
    };
}

function splitString(str, delimiter) {
    let result = [];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            result.push(temp);
            temp = '';
        } else {
            temp += str[i];
        }
    }
    result.push(temp);
    return result;
}

function print(template, ...params) {
    return template.replace(/%(\d+)/g, (_, index) => params[parseInt(index) - 1]);
}