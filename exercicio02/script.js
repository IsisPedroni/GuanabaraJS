function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fomularioAno = document.getElementById('txtAno');
    var res = document.getElementById('res');

    if(fomularioAno.value.length == 0 || Number(fomularioAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radSex');
        var idade = ano - Number(fomularioAno.value);
        var genero = ''

        var img = document.createElement('img');
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem';

            if(idade >=0 && idade <10 ){
                img.setAttribute('src', './img/menino.png')
            }else if (idade < 30 ) {
                img.setAttribute('src', './img/homemJovem.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/homemAdulto.png')
            }else{
                img.setAttribute('src', './img/homemIdoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher';
            
            if(idade >=0 && idade <10 ){
                img.setAttribute('src', './img/menina.png')
            }else if (idade < 30 ) {
                img.setAttribute('src', './img/mulherJovem.png')
            }else if(idade < 50){
                img.setAttribute('src', './img/mulherAdulta.png')
            }else{
                img.setAttribute('src', './img/mulherIdosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }

}