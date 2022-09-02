document.getElementById("sum").textContent=sum(3, 3); //exemplo1
document.getElementById("mult").textContent=multiplicando(9, 5);
document.getElementById("sub").textContent=subtraindo(2, 2, 6, 5)
//em JS eu vou buscar o elemento "sum" com base no id dele em HTML
//em JS eu vou buscar o elemento "mult" com base no id dele em HTML
//pode ser aplicado o mesmo nome para id e função como em exemplo1
//nao pode ser aplicado mesmo nome para id ou funções diferentes

function sum(a, b) {
    return a + b;
}
function multiplicando(a, b){
    return a * b;
}
function subtraindo (a, b, c, d){
    return a - b + c - d;
}