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
// addLoadEvent(testArrowFunction())
addLoadEvent(saveData())




function saveData(){
  let array = [{username:1}];
  var stogee = window.localStorage;
  stogee.setItem("a",100);
  stogee.setItem("b",JSON.stringify(array));
  stogee.removeItem("a");
  console.log(stogee.getItem("c"));
  console.log(stogee.getItem("b"));


}
