var frase = prompt ("Frase:  ");
var n = 0;
var vocales = ['a','e','i','o','u']
for(var u=0;u<=frase.length;u++){
    if(vocales.indexOf(frase[u])>=0){
        ++n;
    }
}
console.log("Vocales: "+ n);