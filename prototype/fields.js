'use strict';

function Foo() {

    this.baz = "bazVal";
}

Foo.prototype.bar = "barValue is here";

const f = new Foo();

console.log(f.baz);
console.log(f.bar);

Foo.prototype.bar = "new bar value for prototype";

console.log(f.bar);


f.bar = "new bar value for field";

console.log(f.bar);
console.log(Foo.prototype.bar);

const f2 = new Foo();

console.log(f2.bar)