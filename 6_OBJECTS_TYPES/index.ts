//Tipos de objetos para interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductsDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é ${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponivel");
  }
}

const shirts: Product = {
  name: "Camisa",
  price: 1.99,
  isAvailable: true,
};
showProductsDetails(shirts);

//Propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`o Usuario tem o email: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuario é: ${user.role}`);
  } else {
    console.log(" O usuario não tem função");
  }
}

showUserDetails({ email: "Souza@gmail.com", role: "DESENVOLVEDOR" });
showUserDetails({ email: "PICACHU@gmail.com" });

//readOnly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);
