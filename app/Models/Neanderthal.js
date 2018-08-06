class Neanderthal {

  constructor(name, gender, age, color, weight, headSize) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.headSize = headSize || 0
  }
}

export default Neanderthal