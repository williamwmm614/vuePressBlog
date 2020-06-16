# 面向对象

::: tip 特征
封装、继承、多态
:::

### 1、静态属性、静态方法

::: warning 提示
静态属性和方法是挂载在类上面的，不是挂载在对象上
:::

``` js
function Person() {}

//声明静态属性和方法
Person.name = '张三';
Person.age = 25;
Person.getInfo = function(){
  let info = arguments[0] + arguments[1];
  return info;
};

console.log(Person.name);
console.log(Person.age);
console.log(Person.getInfo('李四', 30));
```
