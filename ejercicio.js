const a=prompt();
const b=prompt();
const c=prompt();

// a es mayor que todos
if(a>b && b>c){  
    console.log("el mayor es: ", a);
}

// c es mayor que todos
if(a<b && b<c){  
    console.log("el mayor es: ", c);
}
// b es mayor que todos
if(a<b && b>c){  
    console.log("el mayor es: ", b);
}

if(a==b && b==c){
    console.log("Todos son numeros iguales");
}
if(a==b && b!=c){
    console.log("El numero igual es: a y b");
    
}

if(a!=b && b==c){
    console.log("El numero igual es: b y c");
}
if(a==c && a!=b){
    console.log("El numero igual es: a y c");
}

