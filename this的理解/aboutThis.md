#### this
function do(){
  {this} // defalut  has a this but you can see it obviously
  this.hello()
}
// ======
// 普通函数：
1. this = 调用者
2. 箭头函数， this == 继承自外部function的this，如果没有就是全局
