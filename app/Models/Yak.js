class Yak {

  constructor(name, gender, age, color, weight, rightHornLength, leftHornLength) {
    this.id = Math.random()
    this.name = name || ""
    this.gender = gender || ""
    this.age = age || ""
    this.color = color || ""
    this.weight = weight || 0
    this.rightHornLength = rightHornLength || 0
    this.leftHornLength = leftHornLength || 0
  }
}

export default Yak