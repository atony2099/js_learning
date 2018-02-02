
# 析构的概念
[destructing](http://blog.csdn.net/lihongxun945/article/details/48935133)
> 从数组和对象中解析值。
> 快速初始化值得方式

#### 原理
```javascript
// 生成一个中介变量，并帮你主动赋值了
var _name$age$gender = { name: "Tom", age: 12, gender: "male" };
var name = _name$age$gender.name;
```



# 扩展运算符


```javascript
// a.数组
function print1(name,age,sex){
  console.log(name, age,sex);
}
var kk = ["tang",18,"man"];
print1(...kk)

// 2.对象
function expandF(){
  //1. 展开
  const object = {a:1,b:4};
  const object0 = object
  console.log(object0);

  const object2 = { ...object };
  // 1.其实和普通的指赋值没有太大区别
  console.log(object2);
  // 2. 覆盖 ，有相同的变量名，后面会覆盖前面
  const object3 = {...object,b:100,c:1000};
  console.log(object3);
}


```   
[展开函数](http://www.cnblogs.com/chrischjh/p/4848934.html)

## 箭头函数

### 简化函数的写法(干掉了function 和 return)
- 最简单的写法
```
 v => v * 5；
```

- 如果函数体多条语句，用{}包裹，并手动return
```
a => {
  a = 10 *5;
  return a * 1000;
}


```
## let 和 const
作用:都限制了变量的作用域....
const 声明的是常量，一定声明后不能再修改。。
