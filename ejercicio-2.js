let lista1=[10,100,38,59,55];
let lista2=[10,22,38,150,0];
mayorl1=lista1[0];
mayorl2=lista2[0];
for(let i=0;i<lista1.length;i++){
    if(lista1[i]>mayorl1){
        mayorl1=lista1[i];
    }
}
for(let i=0;i<lista2.length;i++){
    if(lista2[i]>mayorl2){
        mayorl2=lista2[i];
    }
}
// console.log(mayorl1)
// console.log(mayorl2)
if(mayorl1>mayorl2){
    console.log("El mayor es: ", mayorl1);
}
else{
    console.log("El mayor es: ", mayorl2);
}
 