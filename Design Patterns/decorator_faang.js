class Pizza {
  cost() {
    return 10;
  }
}

class CheeseToppings {
  constructor(pizza) {
    this.pizza = pizza;
  }

  cost() {
    return this.pizza.cost() + 5;
  }
}

class PepricaToppings {
  constructor(pizza) {
    this.pizza = pizza;
  }

  cost() {
    return this.pizza.cost() + 2;
  }
}

class JalepinoToppings {
  constructor(pizza) {
    this.pizza = pizza;
  }

  cost() {
    return this.pizza.cost() + 2;
  }
}

let pizza = new Pizza();
pizza = new CheeseToppings(pizza);
pizza = new JalepinoToppings(pizza);

console.log(pizza.cost());
