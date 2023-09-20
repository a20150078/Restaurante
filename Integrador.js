alert("Bienvenidos a kfc");
dinero=parseInt(prompt("Cuanto dinero tienes"));
console.log("Traigo:", dinero)
entrada=parseInt(prompt("ingrese el valor de la entrada"));
console.log("El valor de la entrada es:",entrada);
segundo=parseInt(prompt("ingrese el valor del segundo"));
console.log("El valor del segundo es:",segundo);
postre=parseInt(prompt("ingrese el valor del postre"));
console.log("El valor del postre es:",postre);
total=entrada+segundo+postre;
igv=total*18/100
vuelto = dinero-total
console.log("El valor total es:",total);
console.log("El valor total con igv es:",igv+total);
console.log("Su vuelto seria de:",vuelto)