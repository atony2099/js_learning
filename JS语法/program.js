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
 addLoadEvent(testJSProperty())




// ==== JS的数据类型
function testJSProperty(){
  var a;
  console.log(typeof(a))

  var b = true;
  var c = 123;
  var d = "aaa"
  var h = {
    kk:'aa'
  }

  console.log(typeof(b));
  console.log(typeof(c));
  console.log(typeof(d));
  console.log(typeof(h));

  // 空字符串
  var g = ''

  if (g) {
      console.log('not null');
  } else {
    console.log('is null');
  }



}




// ========= 1.try catch ===
function trycatchTest(){
  try {
    throw new Error("aaa")
  } catch (e) {
    alert(e.stack)
  } finally {

  }

}


  // es6 语法，解构
function array() {
    var array  = [3,5,7,4,5 ]
    var array01 =  array.map((item,index) => item * 10 ) ;
    console.log(array01);
    array01.forEach((item,index) => console.log(item,index));
    // 删除元素
    array.splice(0,0);
    console.log(array);
}



// 数组操作
function eachArray() {
    var array01  = [3,5,7,4,5]
    array01.forEach((i) => console.log(i));
}




function print(type){
  var a = {
    gg:12,
    kk:456,
    ll:"ggg"
  };

  console.log(a[type]);
}
