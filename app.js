const sum = (a, b) => a + b
sum(2, 3)

class Hero {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this.name
    }

    set name (newName) {
        this.name = newName
    }
}

const h = new Hero('mango')