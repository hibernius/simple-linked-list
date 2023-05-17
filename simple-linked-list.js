
export class Element {

  #value;
  
  #next = null;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.#next;
  }

  set next(value) {
    this.#next = value;
  }
}

export class List {

  #length = 0;

  #head = null;

  constructor(values) {
    if (Array.isArray(values)) {
      this.addFromArray(values);
    }
  }

  add(nextValue) {
    if (this.#head === null) {
      this.#head = nextValue;
    } else {
      nextValue.next = this.#head;
      this.#head = nextValue;      
    }
    this.#length++;
  }

  addFromArray(values) {
    for (let i=0; i<values.length; i++) {
      this.add(new Element(values[i]));
    }
  }

  get length() {
    return this.#length;
  }

  get head() {
    return this.#head;
  }

  toArray() {
    let output = [];
    let currentElement = this.#head;
    while(currentElement) {
      output.push(currentElement.value);
      currentElement = currentElement.next;
    }

    return output;
  }

  reverse() {
    let previousElement = null;
    let currentElement = this.#head;

    while (currentElement) {
      const nextElement = currentElement.next;
      currentElement.next = previousElement;
      previousElement = currentElement;
      currentElement = nextElement;
    }

    this.#head = previousElement;

    return this;
  }
}
