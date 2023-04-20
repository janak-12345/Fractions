class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  add(other) {
    const newNumerator = (this.numerator * other.denominator) + (other.numerator * this.denominator);
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
subtract(other) {
    let lcm = this.lcm(this.denominator, other.denominator);
    let newNumerator = (lcm / this.denominator * this.numerator) - (lcm / other.denominator * other.numerator);
    return new Fraction(newNumerator, lcm);
  }

  multiply(other) {
    let newNumerator = this.numerator * other.numerator;
    let newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }
 divide(other) {
    let newNumerator = this.numerator * other.denominator;
    let newDenominator = this.denominator * other.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  compare(other) {
    let lcm = this.lcm(this.denominator, other.denominator);
    let thisNumerator = lcm / this.denominator * this.numerator;
    let otherNumerator = lcm / other.denominator * other.numerator;

    if (thisNumerator > otherNumerator) {
      return 1;
    } else if (thisNumerator < otherNumerator) {
      return -1;
    } else {
      return 0;
    }
  }

  lcm(a, b) {
    return a * b / this.gcd(a, b);
  }

  gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}
