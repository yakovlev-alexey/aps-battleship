class Ship {
  constructor(name, size, color, positions = []) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.positions = positions;
  }

  addPosition(position) {
    this.positions.push(position);
  }
}

module.exports = Ship;
