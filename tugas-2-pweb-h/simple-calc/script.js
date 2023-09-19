function solveSum(){
    let x = parseInt(document.getElementById('num1').value)
    let y = parseInt(document.getElementById('num2').value)
    let res = x+y
    document.getElementById('result').innerHTML = res
}
function solveSub(){
    let x = parseInt(document.getElementById('num1').value)
    let y = parseInt(document.getElementById('num2').value)
    let res = x-y
    document.getElementById('result').innerHTML = res
}function solveMul(){
    let x = parseInt(document.getElementById('num1').value)
    let y = parseInt(document.getElementById('num2').value)
    let res = x*y
    document.getElementById('result').innerHTML = res
}function solveDiv(){
    let x = parseInt(document.getElementById('num1').value)
    let y = parseInt(document.getElementById('num2').value)
    let res = x/y
    document.getElementById('result').innerHTML = res
}