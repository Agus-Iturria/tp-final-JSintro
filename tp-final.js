//EJERCICIO INTEGRADOR
function greetCustomer(name){
    return("Hola! " + name)
}
function adultCustomer(age){
    if (age < 18){
        return("No esta permitido que usted beba alcohol")
    }
    else{
        return("Usted puede beber alcohol")
    }
}
function totalOrderCost(product,quantity){
    let totalCost = 0
    switch(product){
        case "manzana":
             totalCost = (quantity * 20);
             return(totalCost);
             break;

        case "naranja":
            totalCost = (quantity * 15);
            return(totalCost);
            break;

        case "durazno":
            totalCost = (quantity * 40);
            return(totalCost);
            break;
        default:
            return totalCost = 0
    }
}
function applyDiscount(age,totalCost){
    if (age > 60){
        discount = totalCost *= 0.10
        return discount
    }
}
function determinePayment(payment,totalCost){
    if (payment === 'efectivo') {
        discount = totalCost *= 0.10;
        return discount
    }
}
function orderTime(hour){
    if (hour >= 12 && hour <= 14) {
        console.log("Es hour pico, puede haber demoras en el servicio.");
    }
}
function calculateCutlery(totalCost){
    let impuesto = 0
    impuesto = totalCost * 0.05; 
    return impuesto;
}
function gestionarPedido(name, age, product, quantity, payment, hour) {
    let totalCost = totalOrderCost(product, quantity);
    let ageDiscount = applyDiscount(age, totalCost);
    let paymentDiscount = determinePayment(payment,totalCost)
    let cutleryCost = calculateCutlery(totalCost);
    let finalCost = totalCost - ageDiscount - paymentDiscount + cutleryCost


    console.log(`${greetCustomer(name)}`);
    console.log(`${adultCustomer(age)}`);

    if (totalCost == 0){
        console.log("producto no disponible");
    }
    else{
        console.log(`Costo total inicial: $${totalCost}`);
        console.log(`Descuentos edad: $${ageDiscount}`);
        console.log(`Metodo de pago: ${payment}`);
        console.log(`Descuentos efectivo: $${(paymentDiscount)}`);
        console.log(`Impuesto: $${(cutleryCost)}`);
        console.log(`Costo Final: $${finalCost}`);
        console.log(`${orderTime(hour)}`);
    }
}
gestionarPedido("José", 63, "naranja", 1, "efectivo", 12);
