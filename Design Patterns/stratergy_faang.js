// Q: Implement a discount system where different discount strategies can be applied at runtime (e.g., percentage-based, flat discount).

class Percentage {
  discount() {
    console.log(`Discount of 10% will be applied on orders above 2000`);
  }
}

class FlatDiscount {
  discount() {
    console.log(
      `Flat discount of Rs. 50 will be applied on all orders above 500`
    );
  }
}

class Discount {
  setStratergy(stratergy) {
    this.stratergy = stratergy;
  }

  discount() {
    this.stratergy.discount();
  }
}

const discount = new Discount();
discount.setStratergy(new FlatDiscount());
discount.discount();
discount.setStratergy(new Percentage());
discount.discount();
