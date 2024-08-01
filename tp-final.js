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
    switch (product) {
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
    if (payment === 'efectivo') {
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

function gestionarPedido(name, age, product, quantity, payment, hour) {
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

function solicitarDatos(){
    let name = prompt("Ingrese el nombre del cliente:");
    if ((name.length) > 30 || (name.length) <= 0){
        console.log("Nombre no valido")
    }
    console.log("Nombre: " + name);

    let age = prompt("Ingrese la edad del cliente:");
    if (isNaN(age) || age <= 0) {
        console.log("Edad no valida");
        return
    }
    else{
        console.log("Edad: " + age);
    }

    let product = prompt("Ingrese el producto que desea comprar (manzana, naranja, durazno):");
    if (product == "manzana" || product == "naranja" || product == "durazno"){
        console.log("Producto: " + product);
    }
    else{
        console.log("Producto no valido");
        return
    }

    let quantity = prompt("Ingrese la cantidad a comprar:");
    if (isNaN(quantity) || quantity <= 0) {
        console.log("Cantidad no valida");
        return
    }
    else{
        console.log("Cantidad: "+ quantity);
    }

    let payment = prompt("Ingrese el método de pago (efectivo, tarjeta):");
    if (payment == 'efectivo' || payment == 'tarjeta') {
        console.log("Metodo de Pago: "+ payment);
        }
    else{
        console.log("Método de pago no valido");
        return
    }

    let hour = prompt("Ingrese la hora del pedido (en formato 24 horas):");
    if (isNaN(hour) || hour < 0 || hour > 23) {
        console.log("Hora no valida");
        return
    }
    else{
        console.log("Hora del pedido: "+ hour);
    }
    gestionarPedido(name, age, product, quantity, payment, hour);
}
solicitarDatos();
