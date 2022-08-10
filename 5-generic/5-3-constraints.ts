interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!!');
  }

  workPartTime() {}
}

// Bad
function pay(employee: Employee): Employee {
  employee.pay;
  return employee;
}

// Goods
function payGood<T extends Employee>(employee: T): T {
  employee.pay;
  return employee;
}

const jisu = new FullTimeEmployee();
const bob = new PartTimeEmployee();

jisu.workFullTime();
bob.workPartTime();

// jisuAfterPay.workFullTime()을 사용할 수 없음.
const jisuAfterPay = pay(jisu); // as FullTimeEmployee로 지정할 수 있지만 as 사용은 지양함.
const bobAfterPay = pay(bob);
