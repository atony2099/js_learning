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
addLoadEvent(testF())
// addLoadEvent(shortV());
function testF(){


  function name(data){

      let a = {
        data

      }
      console.log(a);
    }

    let c = 100;
  name(c);
}

function xiGou001(){
  var origin = {
    name: "fenglin",
    age:100,
    money:999,
    like:"man",
    address:{
      code:1000,
      floor: "5th"
    }
  }
  // 取出并赋予变量新的名字
  var {name:myname,
    age,
  } = origin;
  console.log(myname);

  // 嵌套取出
  var {name,address:{floor}} = origin;
  console.log(floor,name);
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
  const object3 = {...object,a:100,b:1000};
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


//  ====== es6语法
function shortV(){
  var c ='jim', d =123
  var o = {
    c,
    d
  }
  console.log(o);
}
