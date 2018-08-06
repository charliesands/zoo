class Aardvark {

  constructor(name, gender, age, color, weight, noseLength) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.noseLength = noseLength || 0
  }
}

export default Aardvark