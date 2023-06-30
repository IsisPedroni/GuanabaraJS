function contar(){
    
    let ini = document.getElementById('txtI');
    let fim = document.getElementById('txtF')
    let passo = document.getElementById('txtP');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar! Preencha todos os dados';
        // alert('[ERRO] preencha todos os dados!');
    }else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0 ){
            alert('Passo Invalido');
            p = 1;
        };

        //contar crescenteU+1F3C3

        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{23E9} `;
            }
    
        //contar regressiva
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F3C3}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;

    }

}