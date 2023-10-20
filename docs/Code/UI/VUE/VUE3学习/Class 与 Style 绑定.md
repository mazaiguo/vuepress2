# Class 与 Style 绑定

## 绑定 HTML class

### 绑定对象

我们可以给 `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 class：

```vue
<div :class="{ active: isActive }"></div>
```

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的[真假值](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)。

你可以在对象中写多个字段来操作多个 class。此外，`:class` 指令也可以和一般的 `class` attribute 共存。举例来说，下面这样的状态：

```vue	
const isActive = ref(true)
const hasError = ref(false)
```

#### 绑定数组

我们可以给 `:class` 绑定一个数组来渲染多个 CSS class：

```vue
const activeClass = ref('active')
const errorClass = ref('text-danger')
```

```bash
<div :class="[activeClass, errorClass]"></div>
```

渲染的结果是：

```bash
<div class="active text-danger"></div>
```

如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式：

```bash
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

`errorClass` 会一直存在，但 `activeClass` 只会在 `isActive` 为真时才存在。

然而，这可能在有多个依赖条件的 class 时会有些冗长。因此也可以在数组中嵌套对象：

```bash
<div :class="[{ active: isActive }, errorClass]"></div>
```

