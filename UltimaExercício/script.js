let amigo = {nome: "Levi",
sexo:'Masculino', peso: 74.4,
engordar(p = 0){
    console.log("Engordou")
    this.peso += p
}}
amigo.engordar(2)//add 2kg a variável "peso".
console.log(`${amigo.nome}, do sexo ${amigo.sexo}, pesa ${amigo.peso}Kg`)