// 直接调用，通过函数名（...）方式调用

// const { call } = require("file-loader");

//严格模式下，为undefined
function test() {
    // eslint-disable-next-line strict
    "use strict";
    console.log("test", this) //undefined
}
test();
//非严格目录下，指向全局对象globalThis
function test1() {
    // eslint-disable-next-line no-undef
    console.log("test1", this === globalThis) //true
}
test1();
//bind（）对直接调用的影响，Function.prototype.bind() 的作用是将当前函数与指定的对象绑定，并返回一个新的函数
const obj = {}
function test2() {
    console.log("test2", this === obj) //false
}

const testObj = test2.bind(obj);
test2();
testObj(); //true

//apply(), call()对this的影响，两者的第一个参数都是指定函数运行时其中的this指向，call()方法接受的时参数列表，apply()方法接受的是参数数组
//对于一些需要写循环以遍历数组各项的需求，我们可以用apply来避免循环
// func.apply(thisArg, [argsArray])
//thisArg,必选参数，在func函数运行时使用的参数，注意区分严格模式和非严格模式下，this的值
//argsArray，可选参数，为一个数组或类数组对象。其中的数组对象将作为单独的参数传给func函数，如果该参数为null或undefined，则表示不需要传入任何参数
//返回值，return，调用用指定this值和参数的函数的结果
//可以用arguments类数组对象作为argsArray参数，传入函数的全部参数都存储在arguments里，传入的参数为参数传入时的序列，同时arguments还存储保存的参数数组的长度
function showcallee() {
    var a = '这里是代码';
    var b = '这是另一段代码';
    var c = a + b;
    
    // eslint-disable-next-line no-caller
    console.log(arguments.callee);
    console.log("c", c)
    
    return c;
}
showcallee();
    /*   
    call() 方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数
    call() 方法允许为不同的对象（可以是一个函数）分配和调用属于一个对象的函数/方法
    call() 方法提供新的this值给当前调用的函数/方法，可以使用call() 来实现继承，写一个function方法，然后让另外一个新的对象来继承它
    function.call(thisArg, arg1, arg2, ...)
    */
   //thisArg，可选的参数，在function函数运行时使用的this值，注意区分严格模式和非严格模式下的不同
   //arg1，arg2，... ，指定的参数列表
   //返回值，使用调用者提供的this值和参数调用该函数的返回值。若该方法没用返回值，则返回undefined

   //方法调用，指用对象来调用其方法函数，调用形式为对象.方法函数（...），这种情况下，函数中的this指向调用该方法的对象，但同时要注意bind()的影响

   