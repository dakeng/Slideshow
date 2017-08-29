# Slideshow

<p>基于原生js的轮播组件</br>

<p>实例：</br>

在html文件中添加一个div，并设置其id为slideshow

```html
<div id="slideshow">
	<i class=" arrows arrows-left"></i>
	<i class=" arrows arrows-right"></i>
</div>
```

实例化Slideshow，如

```javascript
var files = [
	'images/1.jpg',
	'images/2.jpg',
	'images/3.jpg',
	'images/4.jpg',
];
var e = document.getElementById('slideshow');
new Slideshow(files,e);
```
