//方法一
const birthDay = [1999,2000,2001,1997,1994,1975,1976];
Array.prototype.newFilter = function(fn,content){
        let newArry = [];//创建空数组
        let arr = this;//拿到数组
        for(let i = 0;i < arr.length;i++){
            let result = fn.call(content,arr[i],arr,i);//用call方法实际是调用fn这个函数参数
            if(result) newArry.push(arr[i]);
        }
        return newArry;
}
function check(age){
    return age > 2000;
}
birthDay.newFilter(check);
//方法二
Array.prototype.my_Filter = function(callback){//回调函数
    if(typeof callback !=='function') console.log('error');
    else{
        let temp = [];
        for(let index = 0;index < this.length;index++){
            let result = this[index];
            if(callback(result,index,this)){
                temp.push(result);
            }
        }
        return temp;
    }
}
birthDay.my_Filter((ele)=>{
    return ele%2===0;
});