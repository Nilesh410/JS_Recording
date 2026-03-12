let str="India"
console.log(str) //India

// let str="Maharashtra" //redeclare in same scope its not allowed
// console.log(str)
function test()
{
    let str="Maharashtra" //redeclare in different scope its allowed
    console.log(str) //Maharashtra
}
test() 
console.log(str) //India