let num = [5,8,2,9,3];
num.sort();

// for(let i = 0; i < num.length; i++){
//     console.log(`A posião ${i} tem o valor ${num[i]}`);
// }

for(let i in num){
    console.log(`A posião ${i} tem o valor ${num[i]}`);
}