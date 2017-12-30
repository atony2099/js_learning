
## 析构的概念
[destructing](http://blog.csdn.net/lihongxun945/article/details/48935133)
> 从数组和对象中解析值。
> 快速初始化值得方式

###数组
```
var [a,b,c] = [10,100,99];
console.log(a,b,c);

var [a,...z] = [101,102,103];
console.log(z);
```
### 对象
```
var origin = {
  name:"tang",
  age:99,
  location:"bj",
  address: {
    code:100;
    floor:"5th"
  }

}

var {name:newName, location} = d; //tang 99
var {name, location} = d; // tang 99
var  {name,address:{floor}} = d; // tang 99
```
** 取出对应的值，（允许多层嵌套，只要左右边的结构能对应收 ）**

#### 原理
```javascript
// 生成一个中介变量，并帮你主动赋值了
var _name$age$gender = { name: "Tom", age: 12, gender: "male" };
var name = _name$age$gender.name;
```




## ... 的两种作用，收纳（rest） 和展开

#### 收纳 相当于arguments
```
function print(...a){
  console.log(a,a[0],a[1],a[2],a[3]);
}

print("d","e",123);
```

#### 展开

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
