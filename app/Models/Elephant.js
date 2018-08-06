class Elephant {

  constructor(name, gender, age, color, weight, trunkLength) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.trunkLength = trunkLength || 0
  }
}

export default Elephant