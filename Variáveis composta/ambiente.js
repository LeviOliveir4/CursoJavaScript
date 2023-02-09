let  num = [5, 8, 2, 9, 3 ]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O ultimo valor do vetor é ${num[5]} `)

/*for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(5)

if(pos == -1){
    console.log('o valor n foi encontrado')
}else{

    console.log(`o valor 5 está na posição ${pos}`)
}