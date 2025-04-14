//测试 test.html在浏览器中不显示 ？！！！！！
// js 语法后面加不加 ； 都可以
console.log("hello world");

//let vs const
    // let a  , 代表声明一个变量 a
    // const name = “jack” 这里 name 不可被改变 。
        // 但对于表格 可以更改里面的内容
//几种类型：String Number Boolean null Undefied
const n = "jack" ;
const age = 30;
console.log(typeof age)

console.log("name is " + n)

console.log(n.length)
console.log(n.toUpperCase())
console.log(n.toLowerCase())
console.log(n.substring(0,2))
console.log(n.substring(0,3).toUpperCase())
console.log(n.split(""))

const s = "a, b, c, d, e"

console.log(s.split(", "))

const tabTest = [
    {
        id : 1,
        text1 : " text1 of index 1",
        text2 : "text2 of index 1",
    },
    {
        id : 2,
        text1 : " text1 of index 2",
        text2 : "text2 of index 2",
    },
    {
        id : 3,
        text1 : " text1 of index 3",
        text2 : "text2 of index 3",
    },
];
console.log(tabTest);
console.log(tabTest[1].text2);
// while loop
let i = 0
while (i< 3){
    console.log(`while Loop Number  : ${i}`);
    i++;
}

//for 
for(let i = 0 ; i < tabTest.length; i++){
    console.log(tabTest[i].text1);
}
// for 2
for(let i of tabTest){
    console.log(i.text1);
}
