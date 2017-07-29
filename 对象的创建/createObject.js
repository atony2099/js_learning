
function addLoadEvent(func){

  var oldonload = window.onload;

  if(typeof oldonload != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
        oldonload();
        func();
    }
  }
}


function test(){
 //  使用工厂模式

 // ---------------------- 缺点: 不知道创建出来的是什么类型
function  createFactory(name,age){
  var o = new Object();
  o.name =  name;
  o.age = age;
  o.sayName = function(){
    console.log(this.name);
  }
  return o;
}


// ======== 1. 构造函数 ===============
// 1. 构建构造函数
function Person(name,age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name);
  }
}

// 使用new操作， 自动将构造函数的值赋给new出来的对象
var per = new Person("david---",100);
console.log(per.sayName());

// ============ 改进版
function Person(name,age){
  this.name = name;
  this.age = age;
  this.sayName = sayName;
}

function sayName (){
  console.log(this.name);
}








// ============ 原型模式 共享所有属性和方法
// 重写同名的属性，会屏蔽掉原属性
//==================
function Perso(){
}

Perso.prototype.name = "fenglin";
Perso.prototype.ages = [10,20];
Perso.prototype.sayName = function(){
    console.log(this.name);
}

var pe001 = new Perso();
var pe002 = new Perso();
pe001.name = "wo====="; //屏蔽原属性
pe001.ages.push(100);

console.log(pe001.sayName(),pe002.sayName());
console.log("----" , pe001.ages,pe002.ages);





//========= 原型模式的快速构建方式 ============
function Ppps () {

};

Ppps.prototype =  {
  constructor :  Ppps ,// 指针指回自己
  name: "=======lili",
  age: 1000,
};
var pp1 = new Ppps();
var pp2 = new Ppps();
pp1.name = "david"
console.log(pp1.name, pp2.name);




// function creatProperty(){
//     function Person(){
//     }
//   }
// }


// ============ 组合使用构造函数和构造函数 ==================
function An (name,job){
  this.name = name;
  this.job = job;   // 自己的属性
}

An.prototype = {
  constructor: An,
  say: function(){
    console.log(this.name);
  },
}

var an01 = new An("jim",100);
console.log(an01.name);

}


//





addLoadEvent(test());
