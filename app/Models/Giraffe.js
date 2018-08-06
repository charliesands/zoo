class Giraffe {

  constructor(name, gender, age, color, weight, neckLength) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.neckLength = neckLength || 0
  }
}

export default Giraffe