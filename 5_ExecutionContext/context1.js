debugger
var a=20
var b=10
function add()
{ 
    debugger
    var a1=5
    var b1=3
    console.log("a+b=",a+b)
    console.log("a1+b1=",a1+b1)
}
function sub()
{
    debugger
    var a2=7
    var b2=3
    console.log("a-b",a-b)
    console.log("a1-b1",a2-b2)
}
add()
sub()