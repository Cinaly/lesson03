/**
 * Created by web-01 on 2017/10/29.
 */
const util=require('util');
console.log(util.isArray([]));
console.log(util.isArray({}));
console.log(util.isArray(''));
console.log('==================================');
function sup(){
    this.name='sup tester';
    this.dob='1999';
    this.hello=function () {
        console.log('hi,'+this.name);
    }
}
sup.prototype.sayName=function(){
    console.log('My name is '+this.name);
}

function sub(){
    this.name='jerry';
}
util.inherits(sub,sup); //前面的对象继承后面的对象,只能继承prototype里的东西

let objSub=new sub();
let objSup=new sup();


objSup.hello();
objSup.sayName();
console.log('------');
//objSub.hello();
objSub.sayName();

console.log(objSub);

console.log(objSup);