class MyClass {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  asyncSum() {

    var promise = new Promise((resolve, reject) => {
      //console.log("Sum async");
      resolve(this.sum());
      //reject('error');
    });

    setTimeout(() => {
      this.sum();
    }, 100);

    /*var that = this;

    var promise = new Promise((function(resolve, reject) {
      console.log("Sum async");
      resolve(this.sum());
      //reject('error');
    }).bind(this));*/

    return promise;
  }

  async getAsyncSum() {

    var sum1 = await this.asyncSum();
    var sum2 = await this.asyncSum();
    var sum3 = await this.asyncSum();

    return sum1 + sum2 + sum3;
  }

}

class MyClass2 extends  MyClass{
  diff() {
    return this.a - this.b;
  }
}

module.exports = { MyClass, MyClass2 };
