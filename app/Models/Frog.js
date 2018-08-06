class Frog {

  constructor(name, gender, age, color, weight, species, wartCount) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.species = species || ""
    this.wartCount = wartCount || 0
  }
}

export default Frog