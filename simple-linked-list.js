/**
 * Class representing a linked list element.
 */
export class Element {

  /**
   * @property value
   * @type {*}
   * @private
   */
  #value;

  /**
   * @property next
   * @type {Element|null}
   * @private
   */
  #next = null;

  /**
   * Constructor.
   * @param {*} value
   */
  constructor(value) {
    this.#value = value;
  }

  /**
   * Get the value.
   * @returns {*}
   */
  get value() {
    return this.#value;
  }

  /**
   * Get the next Element.
   * @returns {Element}
   */
  get next() {
    return this.#next;
  }

  /**
   * Set the next Element.
   * @param {*} element
   */
  set next(element) {
    this.#next = element;
  }
}

/**
 * Class representing a linked list.
 */
export class List {

  /**
   * @property length
   * @type {number}
   * @private
   */
  #length = 0;

  /**
   * @property head
   * @type {Element|null}
   * @private
   */
  #head = null;

  /**
   * Constructor.
   * @param {*[]} values
   */
  constructor(values) {
    if (Array.isArray(values)) {
      this.addFromArray(values);
    }
  }

  /**
   * Add an Element to the list.
   * @param {Element} nextElement
   */
  add(nextElement) {
    if (this.#head === null) {
      this.#head = nextElement;
    } else {
      nextElement.next = this.#head;
      this.#head = nextElement;
    }
    this.#length++;
  }

  /**
   * Create and add Elements based on array values.
   * @param {*[]} values
   */
  addFromArray(values) {
    for (let i=0; i<values.length; i++) {
      this.add(new Element(values[i]));
    }
  }

  /**
   * Get current list length.
   * @returns {number}
   */
  get length() {
    return this.#length;
  }

  /**
   * Get current head.
   * @returns {Element|null}
   */
  get head() {
    return this.#head;
  }

  /**
   * Create and return an array of list values.
   * @returns {*[]}
   */
  toArray() {
    let output = [];
    let currentElement = this.#head;
    while(currentElement) {
      output.push(currentElement.value);
      currentElement = currentElement.next;
    }

    return output;
  }

  /**
   * Reverse the list and return it.
   * @returns {List}
   */
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
