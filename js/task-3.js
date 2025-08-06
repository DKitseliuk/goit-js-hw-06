class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    };

    getValue() {
        return this.#value;
    }    
    
    padStart(str) {
        this.#value = str.concat(this.#value);
    }

    padEnd(str) {
        this.#value = this.#value.concat(str);
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
