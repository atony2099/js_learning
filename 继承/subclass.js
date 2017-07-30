
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
addLoadEvent(testSub())
// ====== 继承 ======
// ====================== 1.整体思路；将原型指向一个super的对象。获取super所有属性值和方法\
  function testSub (){
      function SupType(){
        this.name = "tom";
      }
      SupType.prototype.getSupValue = function(){
          console.log(this.name);
      }

      function ChildType(){
          this.subName = "jim";
      }

      // ===================== 子类的property 指向一个父类对象，获取他所有的属性和方法
      ChildType.prototype =new SupType()
      ChildType.prototype.getChildType = function(){
        console.log(this.subName);
      }
      var child = new ChildType();
      console.log(child.getSupValue() );


      //  ====================== 2. 原型链条问题 ,  subType 指向的是 同一个supType 的实例，会导致所有 子类共享实例变量`4`
    function S() {
      this.name = ["jim","blue"];
    }
    function C(){ };
    C.prototype = new S();

    var a = new C();
    a.name.push("tom");

    var b = new C();
    console.log(b.name);


  //  ======== 3. 解决原型
  //a.构造函数继承 实例属性
  //b.原型链获得共性 方法(属性)
  function SupTyp (name){
    this.name = [name];
  }
  SupType.prototype.saySupName = function(){
    console.log(this.name);
  }

  //子类
  function ChildTyppe(name,age){
    SupTyp.call(this,name); //继承属性 会覆盖父类的属性
    this.age = age;
  }

  ChildTyppe.prototype = new SupTyp();
  ChildTyppe.prototype.constructor = ChildTyppe;
  ChildTyppe.prototype.say = function(){
    console.log(this.name);
  }

  var su =  new SupTyp("我")
  su.name.push("她");
  console.log(su.name);


  var he =  new ChildTyppe("她")
  he.name.push("是");
  console.log(he.name);
}
