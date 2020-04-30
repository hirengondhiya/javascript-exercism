//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort();
  }

  isEquilateral() {
    return this.isTriangle() && (this.sides[1] === this.sides[0]) && (this.sides[1] === this.sides[2])
  }

  isIsosceles() {
    return this.isTriangle() && (this.sides[1] === this.sides[0] || this.sides[1] === this.sides[2])
  }

  isScalene() {
    return this.isTriangle() && (this.sides[1] !== this.sides[0]) && (this.sides[1] !== this.sides[2])
  }

  isTriangle() {
    return this.sides.every(s => s > 0) && (this.sides[0] + this.sides[1] > this.sides[2]);
  }
}
