export class Address {
  street: string;
  number: number;
  postalCode: String;

  constructor(street: string, number: number, postalCode: string) {
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
  }
}

export class User {
  name: string;
  email: string;
  address: Address[] = [];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  setAddress(newAddress: Address): void {
    this.address.push(newAddress);
  }

  getAddress(): Address[] {
    return this.address;
  }
}

const address1 = new Address("Rua X", 100, "213123-123");
const user = new User("Apolo", "apolo@lira.com");
user.setAddress(address1);

console.log(user);
