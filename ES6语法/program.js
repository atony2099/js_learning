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
addLoadEvent(testConst())


// 测试 const  
function testConst(){

  // 1. ------声明常量，并只在所在区域l内有效
  {
    const a = 100;
     console.log(a);
     a = 999l
    }




}


//  T
function testArrowFunction() {
  console.log("hello wo11rld");
  // 简化 的写法
  var f0 = function(v) {
    return v;
  }
  console.log(f0(999));
  //简写形式
  var f = v => v;
  console.log(f(999));


// 多个参数
  function add(a,b){
      return a + b
  }
  console.log(add(10,90));

  var add1 = (a, b) => a + b; //多个参数
  console.log(add1(99, 1));



  // 多个语句，用return
  var fff = a => {
    a = 10;
    return a - 5
  }

  // 返回对象，用 （）
  var gg = () => (["ab", "cd"])
  console.log(gg());



  var obj2 = {
    id: 2333,
      // 箭头函数this继承自外部
    test: () => console.log(this)
}
var obj1 = {
    test:function() {
      // 运行时所在的对象 -- 谁调用了这个对象，this 就是谁.
      console.log(this)
    }
}
  obj2.test();
  obj1.test.call(window);


    // 1.......箭头函数this继承自外部
  function func() {
    console.log('---',this);
    return  () => {console.log('+++',this)}
  }

  // func()();
func.apply({a:1})() // This {a ：1} ，继承自外部上下文所绑定的对象



function test01() {
  console.log(this)
  return function(){
      console.log(this)
  }
};
test01()() // WINOW  , WINDOW
test01.apply({a:1})()  // {a: 1}, window





}
