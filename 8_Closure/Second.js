debugger
let globalVariable="Hello"
function outerFunction(){
    debugger
    let outerVariable="Coder"
    function innerFunction()
    {
        debugger
        let innerVariable="Learn the JS Programming"
        console.log(globalVariable)
        console.log(outerVariable)
        console.log(innerVariable)
    }
    return innerFunction
}

let result=outerFunction()
result()
