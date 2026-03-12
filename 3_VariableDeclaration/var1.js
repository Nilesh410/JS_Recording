var a=10 //its scope is as global scope
console.log("a=",a)
// console.log(typeof(a))

function test()
{
    var b=20
    console.log("a=",a)  //inside the function
    console.log("b=",b)
}
test()
 
 console.log("a=",a)
 console.log("b=",b)

