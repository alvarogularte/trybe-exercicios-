const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // const deliveryPerson = order.order.delivery.deliveryPerson;
  // const phoneNumber = order.phoneNumber;
  // const name = order.name;
  // const address = 'address';
  // const street = order[address].street;
  // const number = order[address].number
  // const apartment = order[address].apartment;
  
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const changeName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const total = order.payment.total = 50;

  console.log(`Olá ${changeName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${total},00`);
}
orderModifier(order);