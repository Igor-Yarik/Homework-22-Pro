function* Foo() {
    console.log('start');
    yield 1;
    yield 2;
    yield 3;
    console.log('finish');
}
  
const iterator = Foo();
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);
console.log(iterator.next().done);
  
  
  function Boo2() {
    this.step = 1;
    this.next = function() {
      let result = {
        value: undefined,
        done: true
      };
  
      if (this.step === 1) {
        console.log('start');
      }
  
      if (this.step === 4) {
        console.log('finish');
      }
  
      if (this.step <= 3) {
        result.value = this.step;
        result.done = false;
      }
      
      this.step ++;
  
      return result;
    }
  
    return this;
  }
  
  const iterator3 = Boo2();
  console.log(iterator3.next().value);
  console.log(iterator3.next().done);
  console.log(iterator3.next().value);
  console.log(iterator3.next().done);