function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML=`Agora são ${hora} horas e ${minutes} minutos`
    
    if(hora >=0 && hora<12){
        //BOM DIA!
        img.src= 'Manhã.jpg'
        document.body.style.background = '#e2cd9f'

    }else if(hora >= 12 && hora<=18){
        //BOA TARDE!
        img.src= 'Tarde.jpg'
        document.body.style.background = '#b98466f'
    }else{
        //BOA NOITE!
        img.src= 'Noite.jpg'
        document.body.style.background ='#515154'
    }

}
