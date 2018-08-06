class Hippopotamus {

  constructor(name, gender, age, color, weight, tuskLength) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.tuskLength = tuskLength || 0
  }
}

export default Hippopotamus