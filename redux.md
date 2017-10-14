
## 高阶组件
是一个函数，参数是组件，返回值是组件。把一些通用的处理放在 高阶组件函数去处理

```javascript
Header = connect(mapStateToProps)(Header)
export default Header
```
redux 的 connect是高阶组件


## dump 组件 vs smart组件
dump 只依赖props ,不依赖任何东西 , 对数据一无所知，
smart 组件: 负责处理数据.. 比如 connect组件


# Redux的 相关组件
- provider:基础控件， 提供一个全局数据 context, 存储store
- store控件  //定义了数据结构和改变数据的方式
store.getstate,
store.dispatch,
store.subscribe,

- connect,高阶组件，将dumm组件转成smart组件，统一处理了数据的处理逻辑
``` javascript
// 告诉 connect 我需要的更新的属性
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
// 告诉connect  我主动调用的函数名
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
```







## context
全局变量， 所有子组件都可以访问到
```javascript
class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

```
## redux


###   组件之间如何共享状态
1. 状态提升 > 把需要大家处理的状态提升到最近的一个父组件(controller)去处理,但是还是避免不了一级一级的回调和传递
2. context， 数据中心，所有组件都可以统一访问这个数据中心

3. 数据中心的数据比较敏感，读取他们需要一个保护机制

**模块需要共享数据， 这些共享数据需要被严格保护起来，避免被滥改**

![](https://huzidaha.github.io/static/assets/img/posts/CA34AC20-F3C0-438F-AD64-66C5E0986669.png)

![](http://ohbzayk4i.bkt.clouddn.com/17-10-1/30930083.jpg)
**


### 涉及到的组件

#### redux
