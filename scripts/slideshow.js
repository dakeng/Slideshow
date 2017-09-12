//注意this作用域

function Slideshow(files, element){
	//记录当前展示图片的索引
	this.current = 0;
	this.prev = (this.current - 1 + files.length) % files.length;
	this.next = (this.current + 1) % files.length;
	this.files = files;
	this.element = element;

	this.init().bindEvent().autoRoll();
}

Slideshow.prototype.createItem = function(index, className){
	let item =  document.createElement('div');
	item.className = `item ${className}`;
	let img = document.createElement('img');
	img.setAttribute('src', files[index]);

	item.appendChild(img);

	return item;
};

Slideshow.prototype.init = function(){
	//如果轮播中只有一张图片，返回
	if (this.files.length < 2) {
		return ;
	}
	//console.log(this.current);
	let currentItem = this.createItem(this.current, 'item-current');
	this.element.appendChild(currentItem);
	let prevItem = this.createItem(this.prev, 'item-prev');
	this.element.appendChild(prevItem);
	let nextItem = this.createItem(this.next, 'item-next');
	this.element.appendChild(nextItem);
	
	return this;
}

//向右滚动
Slideshow.prototype.rollR = function(){
	//下一张要展示的图片的索引
	this.current = (this.current + 1) % this.files.length;
	this.prev = (this.current - 1 + files.length) % files.length;
	this.next = (this.current + 1) % files.length;
	//将右边的图片移除
	this.element.removeChild(document.querySelector('#slideshow .item-prev'));
	//替换类
	replaceClass(document.querySelector('#slideshow .item-current'), 'item-current', 'item-prev');
	replaceClass(document.querySelector('#slideshow .item-next'), 'item-next', 'item-current');

	this.element.appendChild(this.createItem(this.next, 'item-next'));
	
	return this;
}

Slideshow.prototype.rollL = function(){
	this.current = (this.current - 1 + files.length) % this.files.length;
	this.prev = (this.current - 1 + files.length) % files.length;
	this.next = (this.current + 1) % files.length;
	this.element.removeChild(document.querySelector('#slideshow .item-next'));
	replaceClass(document.querySelector('#slideshow .item-current'), 'item-current', 'item-next');
	replaceClass(document.querySelector('#slideshow .item-prev'), 'item-prev', 'item-current');

	this.element.appendChild(this.createItem(this.prev, 'item-prev'));
	
	return this;
}

Slideshow.prototype.bindEvent = function(){
	let btnL = document.querySelector('#slideshow .arrows-left');
	let btnR = document.querySelector('#slideshow .arrows-right');

	//console.log(this);
	
	btnR.addEventListener('click', () => {this.rollR();});
	btnL.addEventListener('click', () => {this.rollL();});

	return this;
}

Slideshow.prototype.autoRoll = function(){
	let intervalID = window.setInterval(() => {
		this.rollR();
	},4000);

	return this;
}

function replaceClass(element, prevClass, currentClass){
	element.classList.remove(prevClass);
	element.classList.add(currentClass);

	return element;
}

