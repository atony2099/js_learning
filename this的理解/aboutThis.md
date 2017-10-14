#### this
function do(){

}

调用函数的时候，实际上调用的是
call(context,do()),context是函数的调用者， 函数中的this就是这个cotext，

1. 在全局作用域，或者无调用者的时候，默认传入的是window对象
2. 在有调用者的时候，this指代就是那个调用者

3. 箭头函数比较特殊，她的context继承外部
