const birthDay = [1999,2000,2001,1997,1994,1975,1976];
Array.prototype.newReduce = function(callback,initiaValue){
    if(typeof callback !== 'function') console.log(error);//简单判断一下，是否是函数参数
    else{
        let nowInitiaValue = initiaValue !== undefined;//判断是否有初始条件
        let value = nowInitiaValue ? value : this[o];//返回第一个value值
        for(let i = nowInitiaValue ? 0 : 1;i < this.length;i++){
            let result = this[i];
            value = callback(value,result,i.this);//调用函数，并给value赋值
        }
        return value;
    }
}
birthDay.reduce((ele,cur)=>{
    return ele + cur;
});
birthDay.reduce(function sum(ele,cur){
    return ele + cur;
},20);
