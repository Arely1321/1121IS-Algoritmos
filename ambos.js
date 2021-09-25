var p = "3 dulces";
var a = "5 dulces";
var e = "7 dulces";
var i = "9 dulces";
var o = "compra";
var u = "vende";

if (o){
    switch(p){
        case "9 dulces":
            console.log("Compra 9 dulces");
        break;
        case "7 dulces":
            console.log("Compra 7 dulces");
        break;
        case "5 dulces":
            console.log("Comora 5 dulces");
        break;
        case "3 dilces":
            console.log("Compra 3 dulces");
        break;
        default:
            console.log("¿Cuantos dulces desea comprar?");
    }
    
}
else {
    console.log("Compre los dulces que quiera");
}