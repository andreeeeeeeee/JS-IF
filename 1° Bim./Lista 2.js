//1.

var vkg, cons, vt;
vkg = Number(prompt("Digite o preço por quilograma: "));
cons = Number(prompt("Digite o consumo(em gramas):"));
vt = cons / 1000 * vkg
alert("O valor total é: " + vt.toFixed(2))



//2.

var H1, H2, H, M1, M2, M, MT, S1, S2, S;
H1 = parseInt(prompt("Digite a hora: "));
M1 = parseInt(prompt("Digite os minutos: "));
S1 = parseInt(prompt("Digite os segundos: "));
H2 = parseInt(prompt("Digite a hora(posterior à anterior): "));
M2 = parseInt(prompt("Digite os outros minutos: "));
S2 = parseInt(prompt("Digite os outros segundos: "));
H = (H2 * 60) - (H1 * 60)
M = M2 - M1
S = (S2 / 60) - (S1 / 60)
MT = H + M + S
alert("o evento durou " + MT + " minutos")



//3.

var x1, x2, y1, y2, x, y, n, d;
x1 = Number(prompt("Digite o valor de x1: "));
y1 = Number(prompt("Digite o valor de y1: "));
x2 = Number(prompt("Digite o valor de x2: "));
y2 = Number(prompt("Digite o valor de y2: "));
x = (x2 - x1)
y = (y2 - y1)
n = Math.pow(x, 2) + Math.pow(y, 2)
d = Math.sqrt(n)
alert("a distância entre P(" + x1 + "," + y1 + ") e P(" + x2 + "," + y2 + ") é de: " + d)



//4.

var nome, ncar, vt, salt;
nome = prompt("Digite o nome do vendedor: ");
ncar = parseInt(prompt("Digite o número de carros vendidos pelo Sr. " + nome + ":"));
vt = Number(prompt("Digite o valor total de vendas do Sr. " + nome + ":"));
salt = 500 + (50 * ncar) + (vt * 5 / 100)
alert("O salário total do Sr. " + nome + " é de R$" + salt)



//5.

var p = Number(prompt("Digite o número atual:"));
var t = Number(prompt("Digite o tamanho máximo da lista:"));
pp = (p + 1) % t
pa = (p - 1) % t
alert("A próxima posição é " + pp + " e a posição anterior é " + pa)
