class Zebu {

  constructor(name, gender, age, color, weight, species) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.species = species || ""
  }
}

export default Zebu