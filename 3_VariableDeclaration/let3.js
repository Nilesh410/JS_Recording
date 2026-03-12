let str="India"
console.log(str) //india
str="Maharashtra" //reinitialize in same scope =allowed
console.log(str) //maharashtra
function test()
{
    str="Delhi" //reinitialize in different scope =allowed
    console.log(str) //delhi
}
test()
console.log(str) //delhi