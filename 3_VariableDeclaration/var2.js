var a="India" //scope=global scope
console.log(a)
a="Maharashtra" //reinitialize in same scope 
console.log(a)
function test()
{
    console.log(a)
    a="Delhi"   //reinitialize in a different scope
    console.log(a)
}
test()
console.log(a)