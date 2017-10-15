
## 析构的概念
> 从数组和对象中解析值。
> 快速初始化值得方式


### 对象
```
var d = {
  name:"tang",
  age:99,
  location:"bj"
}
Â
var {name, location} = d; // tang 99 输出对应值
```

###数组
```
var [a,b,c] = [10,100,99];
console.log(a,b,c);

var [a,...z] = [101,102,103];
console.log(z);
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
  // 2. 覆盖 ， b是一个新的对象
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
