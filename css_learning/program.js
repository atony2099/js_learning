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
addLoadEvent(defaultfun())


function xiGou001(){
  var origin = {
    name: "fenglin",
    age:100,
  }
  var {name:newName,
    age:newAge,
  } = origin;
  console.log(newAge);
}




//====== es6 语法 ==== (...) =====
function expandF(){
  //1. 展开
  const object = {a:1,b:4};
  const object0 = object
  console.log(object0);

  const object2 = { ...object };
  // 其实和普通的指赋值没有太大区别
  console.log(object2);
  // 2. 覆盖 ， b是一个新的对象
  const object3 = {...object,b:100,c:1000};
  console.log(object3);
}


//====== es6 语法 ==== (let  和 const 测试) =====
function letAndConstTest(){
  {
    var a = 100;
    const b = 99;
  }

  console.log(a);
//  console.log(b);
}


// ====== es6语法 默认参数 =======
function defaultfun(height,color='red'){
  console.log(color,height);

}
