class Racoon {

  constructor(name, gender, age, color, weight) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0

  }
}

export default Racoon