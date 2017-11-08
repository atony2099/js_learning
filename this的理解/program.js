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


function testJS() {
    // 1. this指向 函数的调用者
    var  o = new Object()
    o.say = say;
    function say(){
    console.log(this);
    }
    o.say(); // log object;
    say(); // log windwo

    // 2.arrow function
    // 1. create context;
    var arrowF  =   a => console.log(this);
    o.arrowF = arrowF;
    o.arrowF(100);
    console.log(o);
}

function testJS1(){
  // 2. creat context;
  var oo  = {
      name:"jim",
      // 继承自外部，外部context是this
      arrow: () => console.log(this),
      fn:function(){
          setTimeout(function(){
              console.log(this);
          })
      },

      fn1:function(){
           setTimeout(() => {
               console.log(this);
           });
       },
       // this继承子外部， 是 oo UI想
       fn2:() => console.log(this),
       fn3:function(){
         var f=function(){
             console.log(this); // 没有调用者window对象
             setTimeout(() =>
                 console.log(this))// 继承外部，还是window对象
         }
         f()
   }

   };
  oo.arrow() 
  oo.fn();
  oo.fn1();
  oo.fn2();
  oo.fn3();

}

function bbb(){
  function kk(name,data){
    var cc = {
      aname:name,
      data
    }
    console.log(cc);
  }

  kk("tang",1990)

  console.log(kk.userinfo);
}

// addLoadEvent(testJS())
addLoadEvent(testJS1())

// addLoadEvent(bbb())
