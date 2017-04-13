
//定义变量
let name = '小七';
let age  = '100';

//以前的写法
/*const dog = {
	name : name,
	age : age,
	say : function(){
		return this.name + '---' + this.age;
	}
}*/

//es6的写法
const dog ={
	name,
	age,
	say(){
		return this.name + '---' + this.age;
	}
};

//导出对象
export default dog;