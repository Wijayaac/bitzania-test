import sal from "sal.js";

class SalAnimation {
  constructor() {
    this.init();
  }
  init() {
    sal({
      threshold: 0.2,
    });
  }
}

const salAnimation = new SalAnimation();
