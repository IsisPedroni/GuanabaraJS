var idade = 78;

if(idade < 16){
    console.log(`Não vota : ${idade}` );
}else if(idade < 18 || idade > 65){
    console.log(`Vota opcional: ${idade}`);
}else{
    console.log('Voto obrigatorio');
}