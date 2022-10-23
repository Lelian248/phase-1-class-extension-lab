// Your code here
// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        let sidesNumber = 0
        this.array.forEach(element => {
            sidesNumber += 1
        });
        return sidesNumber
    }
    get perimeter() {
        const sum = this.array.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0)
        return sum
    }
}

const polygon = new Polygon([5, 5, 5])

class Triangle extends Polygon {
    get isValid() {
        const one = (this.array[0] + this.array[1]) > this.array[2]
        const two = (this.array[1] + this.array[2]) > this.array[0]
        const three = (this.array[0] + this.array[2]) > this.array[1]
        if (one && two && three) {
            return true
        } else return false
    }
}

triangle = new Triangle([5, 5, 5])
triangle2 = new Triangle([15, 10, 1])

class Square extends Polygon {
    get isValid() {
        const one = this.array[0]
        const two = this.array[1]
        const three = this.array[2]
        const four = this.array[3]

        if (one == two && three == four && two == three) {
            return true
        } else return false
    }

    get area() {
        return Math.pow(this.array[0], 2)
    }
}

let square = new Square([5, 5, 5, 5])
let square2 = new Square([5, 4, 3, 2])