"use strict";
//Tipos de objetos para interface
function showProductsDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirts = {
    name: "Camisa",
    price: 1.99,
    isAvailable: true,
};
showProductsDetails(shirts);
function showUserDetails(user) {
    console.log(`o Usuario tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
    else {
        console.log(" O usuario não tem função");
    }
}
showUserDetails({ email: "Souza@gmail.com", role: "DESENVOLVEDOR" });
showUserDetails({ email: "PICACHU@gmail.com" });
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
