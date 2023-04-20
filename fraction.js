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
