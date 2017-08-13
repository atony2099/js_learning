function addLoadEvent(func) {
  var oldonload = window.onload;

  if (typeof oldonload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
addLoadEvent(testJS())

function testJS() {

  // 1. APPLY 和 call 函数执行的作用域
  function num1(a,b){
    return a + b;
  }
function call(){
  return num1.apply(this,[10,20] );
}

console.log(call());


// 2. 改变函数的作用域
window.color = "red"

var o = {
  color:"blue"
}

function printColor(){
  console.log(this.color);
}
//1.作用域是全局的
printColor()
// 2.绑定到 O 对象上
printColor.call(o);



// bind（）。==生成一个函数的实例，函数内部的this 指向 传入的 对象
var newFun = printColor.bind(o)// 改变函数内部的作用域
newFun();


var bar=function(){
  console.log(this.x);
}
var obj={
     x:3
}
bar();
bar.bind(obj)();








}
