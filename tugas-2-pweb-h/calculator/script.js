function display(val){
    document.getElementById('screen').value += val
}
function clrscr(){
    document.getElementById('screen').value = ''
}
function solve(){
    let equation = document.getElementById('screen').value
    let screen = eval(equation)
    document.getElementById('screen').value = screen
}