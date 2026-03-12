const a=10
console.log(a)
// a=20 //reinitialize in same scope as well as in different scope not allowed
console.log(a)
function test()
{
    const a=20 //redeclare for const in different scope is allowed 
    console.log(a)
}
test()
console.log(a)