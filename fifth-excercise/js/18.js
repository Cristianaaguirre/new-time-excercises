const metodoDePago = "Efectivo";

switch (metodoDePago) {
    case "Tarjeta" : 
        console.log("Pagaste con tarjeta")
        break;
    case "Cheque" : 
        console.log("Pagaste con cheque")
        break;
    case "Efectivo" : 
        console.log("Pagaste con efectivo")
        break;
    case "Credito" : 
        console.log("Pagaste con credito")
        break;
    case "Debito" : 
        console.log("Pagaste con debito")
        break;
    default : 
        console.log("Aun no pagaste")
        break;
};