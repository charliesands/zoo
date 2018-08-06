class Lion {

  constructor(name, gender, age, color, weight, maneColor) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.maneColor = maneColor || ""
  }
}

export default Lion