export default class Counter {
  constructor(startWith) {
    this.value = startWith || 0;
  }

  next() {
    return this.value++;
  }
}
