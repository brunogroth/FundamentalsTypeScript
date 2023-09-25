

export class User {
  name: string;
  email: string;
  address: Address;
  active: boolean = false;

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
    this.address = address;
  }
}

class Address {
  constructor(
    public street: string,
    public zipCode: string,
    public number?: number
  ) {}
}

const brunoAddress = new Address('Rua X', '80.555-139', 195);
const bruno = new User('Bruno', 'brunomail@gmail.com', brunoAddress,  true);

const homeroAddress = new Address('Rua Y', '80.555-111', 555);
const homero = new User('Homero', 'homero@gmail.com', homeroAddress, true);

const hesiodoAddress = new Address('Rua Z', '80.555-122', 999);
const hesiodo = new User('Hesiodo', 'hesiodo@gmail.com', hesiodoAddress, true);

console.log(bruno, homero, hesiodo.name);
