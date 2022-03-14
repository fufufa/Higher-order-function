const strArry = ['javascript','c++','c','python'];
const birthDay = [1999,2000,2001,1997,1994,1975,1976];
Array.prototype.newMap = function(fn,content) {
    let newArry = [];
    let arr = this;
    for(let i = 0;i < arr.length;i++){
        let result = fn.call(content,arr[i]);
        newArry.push(result);
    }
    return newArry;
}
let str = birthDay.newMap(ace => 2022-ace);
strArry.newMap(age => console.log(age));
strArry.newMap(function(age){
    console.log(age);
});
console.log(str);