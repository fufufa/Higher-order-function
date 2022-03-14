Function.prototype.newBefore = function(beforein){
    const mySelf = this;
    return function(){
       beforein.apply(this,arguments);//执行新函数，修正this
       return mySelf.apply(this,arguments);//返回原函数
    }
}
Function.prototype.newAfter = function(afterfn){
    const mySelf = this;//保存原函数
    return function(){
        let ret = mySelf.apply(this,arguments)//执行原函数
        afterfn.apply(this,arguments);//执行新函数
        return ret;
    }
}
let func = function(){
    console.log(2);
}
func = func.newBefore(function(){
    console.log('woshi');
}).newAfter(function(){
    console.log('tiandi');
})
func(); 