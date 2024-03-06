class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    show(){
        return this.numerator + "/" + this.denominator;
    }
    add(fraction) {
        let commonDenominator = this.denominator * fraction.denominator;
        let commonNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        return new Fraction(commonNumerator, commonDenominator);
    }

    difference(fraction) {
        let commonDenominator = this.denominator * fraction.denominator;
        let commonNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        return new Fraction(commonNumerator, commonDenominator);
    }

    multiply(fraction) {
        let numerator = this.numerator * fraction.numerator;
        let denominator = this.denominator * fraction.denominator;
        return new Fraction(numerator, denominator);
    }

    divide(fraction) {
        let numerator = this.numerator * fraction.denominator;
        let denominator = this.denominator * fraction.numerator;
        return new Fraction(numerator, denominator);
    }

    reduce() {
        function gcd(a, b) {
            return !b ? a : gcd(b, a % b);
        }
        var divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }
}
window.onload = function() {
    var fraction1 = new Fraction(3, 4);
    var fraction2 = new Fraction(5, 6);

    var sum = fraction1.add(fraction2);
    sum.reduce();

    var difference = fraction1.difference(fraction2);
    difference.reduce();

    var multiply = fraction1.multiply(fraction2);
    multiply.reduce();

    var divide = fraction1.divide(fraction2);
    divide.reduce();

    document.getElementById('result').innerHTML = 
        'Summ: '+ fraction1.show()+'+'+fraction2.show()+'=' + sum.show() + '<br>' +
        'Difference: '+ fraction1.show()+'-'+fraction2.show()+'=' + difference.show() + '<br>' +
        'Multiply: ' + fraction1.show()+'*'+fraction2.show()+'=' + multiply.show() + '<br>' +
        'Divide: '+ fraction1.show()+' / '+fraction2.show()+'=' + divide.show();}
