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
  // 1.this指向 函数的调用者
  var  o = new Object()
  o.say = say;

  function say(){
    console.log(this);
  }

o.say(); // log object;

say();




}
