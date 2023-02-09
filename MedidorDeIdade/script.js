function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
       
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançaa.png')
            }else if ( idade < 21){
                 //Jovem    
                 img.setAttribute('src','jovem homem.jpg')
                 document.body.style.background = '#b98466f'
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','índice.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idoso.jpg')
            }



        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criança.jpg')
            }else if (idade < 21){
                 //Jovem    
                 img.setAttribute('src','jovemmulher.jpg')
            }else if(idade<50){
                //Adulta
                img.setAttribute('src','adulta.webp')
            }else{
                //Idosa
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}