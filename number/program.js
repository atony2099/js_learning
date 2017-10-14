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
// addLoadEvent(array())
 addLoadEvent(number())


function number(){

  var result = Number.MAX_VALUE + Number.MAX_VALUE
  console.log(result);

  console.log(isNaN("blue"));
  console.log(isNaN(999));

}
