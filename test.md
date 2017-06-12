### 聊一聊CSS3的新特性：写出相关表达式
##### 边框
1. border-style:边框样式
1. border-width:边框宽度
1. border-color:边框颜色
1. border-top:顶部边框
1. border-left:左侧边框
1. border-right:右侧边框
1. border-bottom:底部边框
1. border-radius:边框圆角
- - border-top-left-radius
- - border-top-right-radius
- - border-bottom-left-radius
- - border-bottom-right-radius
box-shadow:边框阴影
border-image:边框背景
##### 背景
1. background-color:背景颜色
1. background-image:背景图片路径
1. background-repeat:是否重复
1. background-attachment:是否固定背景
1. background-position:背景位置
1. background-origin:背景起源
1. background-clip:背景裁剪起源
1. background-size:背景尺寸
##### 文本效果
1. text-transform:文本大小写
1. white-space:空格处理
1. tab-size:制表符长度
1. word-break:文本换行
1. word-wrap:文本溢出
1. overflow-wrap:css3文本溢出
1. text-align:文本对齐
1. text-align-last:文本块最后一行对齐
1. text-justify:调整文本对齐方式，text-align必须为justify
1. word-spacing:单词间隙
1. letter-spacing:字符间隙
1. text-indent:文本缩进
1. vertical-align:文本垂直对齐
1. line-height:行高
1. text-decoration:文本装饰
1. text-shadow:文本阴影
##### 字体
1. font-style:字体样式
1. font-variant:文本小型大写字母
1. font-weight:字体加粗
1. font-size:字体大小
1. font-family:字体
1. font-stretch:字体拉伸变形
1. @font-face:引入字体
##### 2D
1. translate:平移
1. rotate:旋转角度
1. scale:缩放
1. skew:倾斜
1. matrix:组合
##### 3D
1. transform:转换
1. transform-origin:原点
1. transform-style:是否3d
1. perspective:景深
1. perspective-origin:3d元素底部
1. backface-visibility:背部是否可见
##### 过渡
1. transition-property:过渡属性
1. transition-duration:持续时间
1. transition-timing-function:过渡类型
1. transition-delay:过渡延迟时间
##### 动画
1. animation-name:动画名字
1. animation-duration:动画周期
1. animation-timing-function:动画类型
1. animation-delay:动画延迟时间
1. animation-direction:是否反向
1. animation-play-state:动画状态
1. animation-fill-mode:动画时间之外的状态
##### 多列
column-width:列的宽度
column-count:列数
column-gap:列之间的间隙
column-rule:列之间的边框
column-span:对象元素是否横跨所有列
column-fill:列的高度是否统一
column-break-before:对象之前是否断行
column-break-after:对象之后是否断行
column-break-inside:对象内部是否断行
### 列举在css中可以被继承的属性和不能被继承的属性
##### 一、无继承性的属性

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

 

##### 二、有继承性的属性

1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

 

三、所有元素可以继承的属性

1、元素可见性：visibility

2、光标属性：cursor

 

四、内联元素可以继承的属性

1、字体系列属性

2、除text-indent、text-align之外的文本系列属性

 

五、块级元素可以继承的属性

1、text-indent、text-align
### 前端与后端通过ajax通信的具体操作流程是什么

```
//创建XMLHttpRequest对象
if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
}else {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
每当 readyState 改变时，就会触发 onreadystatechange 事件
xhr.onreadystatechange = function(){
    判断请求是否完成
    if (xhr.readyState == 4) {
        // 默认的初始值
        var status = 0;
        var data = null;
        // 规定的状态
        var statusData = {
            status : status,
            data : data
        }
        xhr响应
        if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
            statusData.data = xhr.responseText;
            statusData.status = 1;
        }else {
            statusData.status = xhr.status;
            }
        }
    }
    var getData = sajax._json2string(json);
    //xhr请求
    xhr.open("get",url + "?" + getData,true);
    xhr.send(null);
    }

    // 把对象转化为字符串
    sajax._json2string = function(json){
        var arr = [];
        for(var k in json ){
            arr.push(k + "=" + json[k]);
        }
        return arr.join("&");
    }
```
### 清楚浮动的几种方式，各自的优缺点
1. 父级div定义height


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/height:200px;}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div> 
</div>
<div class="div2">
   div2
   </div>
```

- 原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题
- 优点：简单，代码少，容易掌握
- 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题
2. 结尾处加空div标签clear:both


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat{clear:both}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
<div class="clearfloat"></div>
</div>
<div class="div2">
   div2
   </div>
```

- 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度
- 优点：简单，代码少，浏览器支持好，不容易出现怪问题
- 缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不爽
3. 父级div定义伪类:after和zoom


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   /*清除浮动代码*/
   .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   .clearfloat{zoom:1}
   </style> 
<div class="div1 clearfloat"> 
<div class="left">Left</div> 
<div class="right">Right</div> 
</div>
<div class="div2">
   div2
   </div>
```

- 原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题
- 优点：浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
- 缺点：代码多，不少初学者不理解原理，要两句代码结合使用，才能让主流浏览器都支持
- 建议：建议定义公共类，以减少CSS代码
4. 父级div定义overflow:hidden


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:hidden}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
   </div>
```

- 原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度
- 优点：简单，代码少，浏览器支持好
- 缺点：不能和position配合使用，因为超出的尺寸的会被隐藏
5. 父级div定义overflow:auto


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:auto}
   .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
   </div>
```

- 原理：必须定义width或zoom:1，同时不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度
- 优点：简单，代码少，浏览器支持好
- 缺点：内部宽高超过父级div时，会出现滚动条。

6. 父级div也一起浮动


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;margin-bottom:10px;float:left}
   .div2{background:#800080;border:1px solid red;height:100px;width:98%;/*解决代码*/clear:both}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
   </div>
```

- 原理：所有代码一起浮动，就变成了一个整体
- 优点：没有优点
- 缺点：会产生新的浮动问题。
7. 父级div定义display:table


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;display:table;margin-bottom:10px;}
   .div2{background:#800080;border:1px solid red;height:100px;width:98%;}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
</div>
<div class="div2">
   div2
   </div>
```

- 原理：将div属性变成表格
- 优点：没有优点
- 缺点：会产生新的未知问题
建议：不推荐使用，只作了解
8. 结尾处加br标签clear:both


```
<style type="text/css"> 
   .div1{background:#000080;border:1px solid red;margin-bottom:10px;zoom:1}
   .div2{background:#800080;border:1px solid red;height:100px}
   
   .left{float:left;width:20%;height:200px;background:#DDD}
   .right{float:right;width:30%;height:80px;background:#DDD}
   
   .clearfloat{clear:both}
   </style> 
<div class="div1"> 
<div class="left">Left</div> 
<div class="right">Right</div>
<br class="clearfloat" />
</div>
<div class="div2">
   div2
   </div>
```

- 原理：父级div定义zoom:1来解决IE浮动问题，结尾处加br标签clear:both
- 建议：不推荐使用，只作了解
### html5都有哪些新的JS API
- 多媒体：video、audio、
- 游戏：canvas、webgl、
- 存储：localstorage、sessonstorage、websql、indexedDB
- 网络：websocket
- 地理定位
- 拖拽
- 新选择器
### html5的css3新增的伪类

- :first-of-type    p:first-of-type    选择属于其父元素的首个 <p> 元素的每个 <p> 元素。     
- :last-of-type    p:last-of-type    选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- :only-of-type    p:only-of-type    选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- :only-child    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
- :nth-child(n)    p:nth-child(2)    选择属于其父元素的第二个子元素的每个 <p> 元素。 
- :nth-last-child(n)    p:nth-last-child(2)    同上，从最后一个子元素开始计数。
- :nth-of-type(n)    p:nth-of-type(2)    选择属于其父元素第二个 <p> 元素的每个 <p> 元素。   
- :nth-last-of-type(n)    p:nth-last-of-type(2)    同上，但是从最后一个子元素开始计数。     
- :last-child    p:last-child    选择属于其父元素最后一个子元素每个 <p> 元素。  
- :root    :root    选择文档的根元素。   
- :empty    p:empty    选择没有子元素的每个 <p> 元素（包括文本节点）。  
- :target    #news:target    选择当前活动的 #news 元素。
- :enabled    input:enabled    选择每个启用的 <input> 元素。  
- :disabled    input:disabled    选择每个禁用的 <input> 元素  
- :checked    input:checked    选择每个被选中的 <input> 元素。  
- :not(selector)    :not(p)    选择非 <p> 元素的每个元素。
- ::selection    ::selection    选择被用户选取的元素部分
### css3都有哪些新特性
1.   选择器
1.   RGBA和透明度
1.   多栏布局
1.   多背景图
1.   Word Wrap
1.   文字阴影
1.   @font-face属性
1.   圆角(边框半径)
1.   边框图片
1.   盒阴影
1.   盒子大小
1.   媒体查询
1.   语音
### 标签上title和alt的区别是什么
title作为属性时，用来为元素提供额外说明信息。例如，给超链接标签a添加了title属性，把鼠标移动到该链接上面是，就会显示title的内容，以达到补充说明或者提示的效果。而alt属性则是用来指定替换文字，只能用在img、area和input元素中（包括applet元素），用于网页中图片无法正常显示时给用户提供文字说明使其了解图像信息。注意，alt是替代图像作用而不是提供额外说明文字的。

根据一些SEO人士的说法，使用alt属性还具有搜索引擎优化效果，因为搜素引擎是无法直接读取图像的信息的，alt可以为其提供文字信息所以对搜索引擎比较友好。通常人们容易搞错的是title和alt这两个属性同时用于img标签的时候。在旧版本的IE浏览器中，鼠标经过图像时显示的提示文字是alt的内容，而忽略了title属性，这个曾经误导了很多人。因此，如果想在IE中显示title的内容，要么title属性和alt一致，要么alt内容为空（“”，空格也不能有）。不过，在新版的IE（IE8及以上）中，已不会出现这种情况了。
另外，当a标签内嵌套img标签时，起作用的是img的title属性。
### css reset的作用和用途
重置浏览器的css默认属性 浏览器的品种不同，样式不同，然后重置，让他们统一.
### document.write和innerHTML区别
document.write会将页面上的所有内容清除包括标题，
innerHTML只会重写所属元素的内容
### split()和join()的区别
前者是切割成数组的形式，后者是将数组转换成字符串
### 事件绑定和普通事件的区别

```
var btn = document.getElementById("btn");

    btn.onclick = function () {
        alert('普通事件1');//不执行
    }
    btn.onclick = function () {
        alert('普通事件2');//弹出
    }

//上面用普通方法添加两个事件，下面用事件绑定添加两个事件。

    btn.addEventListener('click', function  () {
        alert('事件绑定1');//弹出
    },false);
    btn.addEventListener('click', function  () {
        alert('事件绑定2');//弹出
    },false);
```

普通事件中的onclick是DOM0级事件只支持单个事件，会被其他onclick事件覆盖，而事件绑定中的addEventListener是DOM2级事件可以添加多个事件而不用担心被覆盖
### 如何阻止事件冒泡和默认事件
- 阻止事件冒泡-e.stopPropagation()
```
function stopBubble(e) { 
//如果提供了事件对象，则这是一个非IE浏览器 
if ( e && e.stopPropagation ) 
    //因此它支持W3C的stopPropagation()方法 
    e.stopPropagation(); 
else
    //否则，我们需要使用IE的方式来取消事件冒泡 
    window.event.cancelBubble = true; 
}
```
- 阻止默认事件-e.preventDefault()
```
//阻止浏览器的默认行为 
function stopDefault( e ) { 
    //阻止默认浏览器动作(W3C) 
    if ( e && e.preventDefault ) 
        e.preventDefault(); 
    //IE中阻止函数器默认动作的方式 
    else
        window.event.returnValue = false; 
    return false; 
}
```
### 解释jsonp的原理
- 作用：JSONP就是用来解决跨域请求问题的
- 原理：ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本，利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。
### document load和document ready的区别
- load是当页面所有资源全部加载完成后（包括DOM文档树，css文件，js文件，图片资源等），执行一个函数
问题：如果图片资源较多，加载时间较长，onload后等待执行的函数需要等待较长时间，所以一些效果可能受到影响
- $(document).ready()是当DOM文档树加载完成后执行一个函数 （不包含图片，css等）所以会比load较快执行
在原生的jS中不包括ready()这个方法，只有load方法就是onload事件
### 写一个正则验证URL
- 简单的url正则验证:var reg=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
- 比较全面的url:
它验证的情况包括IP，域名（domain），ftp，二级域名，域名中的文件，域名加上端口！用户名等等信息
```
var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
+ '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
+ '|' // 允许IP和DOMAIN（域名） 
+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
+ '[a-z]{2,6})' // first level domain- .com or .museum 
+ '(:[0-9]{1,4})?' // 端口- :80 
+ '((/?)|' // a slash isn't required if there is no file name 
+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$'; 
var re=new RegExp(strRegex);
```
### 写出下面弹出的值

```
    +function() {
        var a = 5;

        function a() {};
        alert(a);

        function b() {};
        b = 6;
        alert(b);
        var c = d = b;
    }()
    alert(d);
    alert(c);
```

```
结果                      原因
5                         在立即执行函数中，a函数没有调用,没起作用,所以a的值为5
6                         在立即执行函数中，b函数没有调用,没起作用,所以b的值为6
6                         b,d是全局变量
报错(c is undefined)       c是局部变量
```

### 写出如下点击li的输出值，并用三种方式正确输出li里的数字

```
<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>
    <script>
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        list_li[i].onclick = function() {
            console.log(i);
        }
    }
    </script>
```
结果：6 6 6 6 6 6
#### 闭包问题解决方法
依次输出li的数字第一种方法-声明一个属性保存下标

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        list_li[i].index = i;
        list_li[i].onclick = function() {
            console.log(this.index + 1);
        }
    }
```
依次输出li的数字第二种方法-用匿名函数

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        (function(i) {
            list_li[i].onclick = function() {
                console.log(i + 1);
            }
        })(i)
    }
```
依次输出li的数字第三种方法-事件绑定在新增的匿名函数返回的函数上

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        list_li[i].onclick = (function(i) {
            return function() {
                console.log(i + 1);
            }
        })(i)
    }
```
依次输出li的数字第四种方法-解决思路同第一种方法

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        (function(i) {
            var temp = i;
            list_li[i].onclick = function() {
                console.log(temp + 1);
            }
        })(i)
    }
```
依次输出li的数字第五种方法-解决思路同第三种方法

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        list_li[i].onclick = (function(i) {
            var temp = i;
            return function() {
                console.log(temp + 1);
            }
        })(i)
    }
```
依次输出li的数字第六种方法-将下标添加为绑定函数的属性

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        (list_li[i].onclick = function(i) {
            //arguments 参数对象  arguments.callee 参数对象所属函数
            console.log(arguments.callee.i + 1);
        }).i = i;
    }
```
依次输出li的数字第七种方法-通过 new 使用 Function 的构造函数创建 Function 实例实现
 */

```
    /*通过 new 使用 Function 的构造函数创建 Function 实例实现,
    由于传入的函数体的内容是字符串,故 Function 得到的是一个
    字符串拷贝,而没有得到 i 的引用(这里是先获取 i.toString()
    然后与前后字符串拼接成一个新的字符串,Function 对其进行反向
    解析成 JS 代码)*/
    
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        //每 new 一个 Function 得到一个 Function 对象(一个函数),有自己的闭包域
        list_li[i].onclick = new Function("console.log(" + (i + 1) + ")");

    }
```
依次输出li的数字第八种方法-直接通过 Function 返回一个函数

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        list_li[i].onclick = Function("console.log(" + (i + 1) + ")");
    }
```
依次输出li的数字第三种方法-使用ES6新语法 let 关键字 由于几新东西 各浏览器支持不同
chrome 及 opera支持以下语法

```
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
        let j = i;
        list_li[i].onclick = function() {
            console.log(j + 1);
        }
    }
```
### 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为二等生以此类推。不允许使用if switch等。
Math.floor(score/10)
### 写出如下输出的值，并写出把注释掉的代码取消注释的值，并解释为什么
    
```
this.a = 20;
    var test = {
        a: 40,
        init: function() {
            function go() {
                // this.a = 60;
                console.log(this.a);
            }
            go.prototype.a = 50;
            return go;
        }
    }
    var p = test.init();
    p();//this指向window
    new(test.init())();//this指向go对象
```

```
注释去掉前结果     原因
20                在普通函数中,this指向window,找的是window下的a属性,所以结果为20
50                在构造函数中,this指向go,但go里面没有该属性,去原型上找,在原型上找到了a属性,所以结果为50

注释去掉后的结果    原因
60                 普通函数中的this指向window,所以找的就是window下的a属性,在go函数中把window下的a重新赋值了,所以结果                     为60
60                 在构造函数中,this指向go,go里面有a属性,所以不会去原型上找了
```
