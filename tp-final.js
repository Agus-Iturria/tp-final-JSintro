function greetCustomer(name) {
    return "Hola! " + name;
}

function adultCustomer(age) {
    if (age < 18) {
        return "No está permitido que usted beba alcohol.";
    } else {
        return "Usted puede beber alcohol.";
    }
}

function totalOrderCost(product, quantity) {
    let totalCost = 0;
    switch (product.toLowerCase()) {
        case "manzana":
            totalCost = quantity * 20;
            break;
        case "naranja":
            totalCost = quantity * 15;
            break;
        case "durazno":
            totalCost = quantity * 40;
            break;
        default:
            totalCost = 0;
    }
    return totalCost;
}

function applyDiscount(age, totalCost) {
    if (age > 60) {
        return totalCost * 0.10;
    }
    return 0;
}

function determinePayment(payment, totalCost) {
    if (payment.toLowerCase() === 'efectivo') {
        return totalCost * 0.10;
    }
    return 0;
}

function orderTime(hour) {
    if (hour >= 12 && hour <= 14) {
        return "Es hora pico, puede haber demoras en el servicio.";
    }
    return "";
}

function calculateCutlery(totalCost) {
    return totalCost * 0.05;
}

function solicitarValidarNombre(){
    let name = prompt("Ingrese el nombre del cliente:");
    name = name.trim().toLowerCase();
    while ((name.length) > 30 || (name.length) <= 0 || !isNaN(name)){
        name = prompt("Nombre invalido, ingrese el nombre del cliente:");
    }
    console.log("Nombre: " + name);
    return name
}

function solicitarValidarEdad(){
    let age = prompt("Ingrese la edad del cliente:");
    age = age.trim()
    while (isNaN(age) || age <= 0) {
        age = prompt("Edad invalida, ingrese la edad del cliente:");
    }
    console.log("Edad: " + age);
    return age
}

function solicitarValidarProducto(){
    let product = prompt("Ingrese el producto que desea comprar (manzana, naranja, durazno):");
    product = product.trim().toLowerCase()
    while (product !== "manzana" && product !== "naranja" && product !== "durazno"){
        product = prompt("Producto invalido, ingrese el producto que desea comprar (manzana, naranja, durazno):");
    }
    console.log("Producto: " + product);
    return product
}

function solicitarValidarCantidad(){
    let quantity = prompt("Ingrese la cantidad a comprar:");
    quantity = quantity.trim()
    while (isNaN(quantity) || quantity <= 0) {
        quantity = prompt("Cantidad invalida, ingrese la cantidad a comprar:");
    }
    console.log("Cantidad: "+ quantity);
    return quantity
}

function solicitarValidarPago(){
    let payment = prompt("Ingrese el método de pago (efectivo, tarjeta):");
    payment = payment.trim().toLowerCase()
    while (payment.toLowerCase() !== 'efectivo' && payment.toLowerCase() !== 'tarjeta') {
        payment = prompt("Pago invalido, ingrese un pago a comprar:");
    }
    console.log("Metodo de Pago: "+ payment);
    return payment
    
}

function solicitarValidarHora(){
    let hour = prompt("Ingrese la hora del pedido (en formato 24 horas):");
    hour = hour.trim()
    while (isNaN(hour) || hour < 0 || hour > 23) {
        hour = prompt("Hora invalida, ingrese la hora del pedido (en formato 24 horas):");
    }
    console.log("Hora del pedido: "+ hour);
    return hour
}

function gestionarPedido() {
    let name = solicitarValidarNombre();
    let age = solicitarValidarEdad();
    let product = solicitarValidarProducto();
    let quantity = solicitarValidarCantidad();
    let payment = solicitarValidarPago();
    let hour = solicitarValidarHora();

    let totalCost = totalOrderCost(product, quantity);
    let ageDiscount = applyDiscount(age, totalCost);
    let paymentDiscount = determinePayment(payment, totalCost);
    let cutleryCost = calculateCutlery(totalCost);
    let finalCost = totalCost - ageDiscount - paymentDiscount + cutleryCost;

    console.log(greetCustomer(name));
    console.log(adultCustomer(age));

    if (totalCost == 0) {
        console.log("Producto no disponible.");
    } else {
        console.log(`Costo total inicial: $${totalCost} \nDescuento por edad: $${ageDiscount} \nMétodo de pago: ${payment} \nDescuento por efectivo: $${paymentDiscount} \nImpuesto: $${cutleryCost} \nCosto final: $${finalCost} \n${orderTime(hour)}`);
    }
}

gestionarPedido()