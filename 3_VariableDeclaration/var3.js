var num=23
console.log(num) //23
var num="India"  //redeclare in a same scope 
console.log(num) //india
function test()
{
    var num=50  //redeclare in a different scope
     console.log(num) //50
}
test()
console.log(num) //india