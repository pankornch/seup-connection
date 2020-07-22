


module.exports.Stack = new class Stack {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    clear() {
        this.items = [];
        this.total = 0;
    }

    add(value) {
        this.items[this.total] = value
        this.total++
        // console.log(value)
    }

    pop() {
        if (this.total === 0) return undefined
        this.total--
        delete this.items[this.total]
    }

    remove(index) {
        if (this.total === 0) return undefined
        delete this.items[index]
        this.total--
        while (index < this.total) {
            this.items[index] = this.items[index + 1]
            index++
        }
    }

    includes(data) {
        let i = 0
        while (i < this.total) {
            if (data === this.items[i]) {
                return true
            }
            i++
        }
        return false
    }

    peak() {
        return this.items[this.total - 1]
    }

    size() {
        return this.total
    }
    indexOf(value) {
        let i = 0;
        while (i < this.total) {
            if (this.items[i] === value) {
                return i
            }
            i++
        }
        return -1
    }
    get(index) {
        return this.items[index];
    }
}



module.exports.joinedStack = new class joinedStack {
    constructor() {
        this.items = []
        this.total = 0
    }

    add(value) {
        this.items[this.total] = value
        this.total++
    }

    includes(value) {
        let i = 0;
        while (i < this.total) {
            if (value === this.items[i]) {
                return true
            }
            i++
        }
        return false
    }

    indexOf(value) {
        let i = 0;
        while (i < this.total) {
            if (value === this.items[i]) {
                return i
            }
            i++
        }
        return -1
    }

    remove(index) {
        delete this.items[index]
        this.total--

        while (index < this.total) {
            this.items[index] = this.items[index + 1]
            index++
        }
    }

    size() {
        return this.total;
    }

    count(value) {
        let i = 0;
        let r = 0
        while (i < this.total) {
            if (value === this.items[i]) {
                r += 1
            }
            i++
        }
        return r
    }

    print() {
        let r = ''
        let i = 0;
        while (i < this.total) {
            r += `${this.items[i]}\n`
            i++
        }
        return r
    }

    duplicates() {
        let i = 0;
        while (i < this.total) {
            if (this.count(this.items[i]) > 1) {
                return true
            }
            i++
        }
        return false
    }

}