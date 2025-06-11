//The Strategy pattern defines a family of algorithms and allows them to be interchangeable. The algorithm can be selected at runtime based on the context.

class CreditCardPayment {
  payment(amount) {
    console.log(`Paid amount Rs.${amount} with credit card`);
  }
}

class Paypal {
  payment(amount) {
    console.log(`Paid amount Rs.${amount} with paypal`);
  }
}

class PaymentStratergy {
  setStratergy(startergy) {
    this.startergy = startergy;
  }

  payment(amount) {
    this.startergy.payment(amount);
  }
}

const payment = new PaymentStratergy();
payment.setStratergy(new Paypal());
payment.payment(100);
payment.setStratergy(new CreditCardPayment());
payment.payment(200);
