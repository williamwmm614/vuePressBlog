# 改变 `this` 指向

### 1、call()

::: warning
call()在*不传参*情况：this默认指向window
:::

``` js
参数一：必须传一个改变this指向的某一个对象，如果没有时，
       必须使用null来作为参数，传递一个空对象
参数二 / 三：是函数所需要的参数
let a = 1,
    b = 2,
    json = {
        a: 3,
        b: 4
    };

//一、传递空对象写法，后面为函数所需参数
function fn(a, b){
    console.log(a+b)
}
fn.call(null, 1, 2) 

//二、传递改变this指向对象写法
function fn(){
    console.log(this.a + this.b)
}
fn.call(json)
```

### 2、apply()

```js
参数一: 必须传一个改变this指向的某个对象, 如果没有时,
        必须使用null来作为参数, 传递一个空对象
   
参数二: 必须为数组形式, 数组里面包含函数所需要的参数
    
// 一、传递空对象写法，后面为函数所需参数(数组形式)
function fn(a, b){
  console.log(a+b)
}
fn.allpy(josn, [1, 2]) // 虽然指向json对象，但用不到里面的参数
fn.allpy(null, [1, 2]) 

// 二、传递改变this指向对象写法
function fn(a, b){
  console.log(this.a + this.b) // 用到json里面的参数，用不到
}
fn.call(json, [1, 2])
```

::: warning call() 和 apply() 的区别
传递参数的形式不一样
:::

### 3、bind()

::: warning 特征
bind()不会主动执行，一般在被动情况下执行
:::

```js html
<div id="wrap"></div>
    
let json = {
    a: 3,
    b: 4
};
    
wrap.onclick = fn.bind(json)    //在盒子点击事件触发后才会执行fn函数
wrap.onclick = fn.call(json)    //页面一加载函数就会执行
```
