class Camel {

  constructor(name, gender, age, color, weight, humpCount) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.humpCount = humpCount || 0
  }
}

export default Camel