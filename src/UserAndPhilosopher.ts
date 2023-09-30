class Address {
  street: string;
  numberAddr: number;
  public readonly postalCode: String;

  constructor(street: string, number: number, postalCode: string) {
    this.street = street;
    this.numberAddr = number;
    this.postalCode = postalCode;
  }
}

export class User {
  protected name: string; // protected: acesso da classe User e de quem Herda User
  private _email: string; // private: SOMENTE dentro da própria classe User
  private address: Address[] = [];

  constructor(name: string, email: string) {
    this.name = name;
    this._email = email;
  }

  setAddress(newAddress: Address): void {
    this.address.push(newAddress);
  }

  getAddress(): Address[] {
    return this.address;
  }

  // Getter comum
  public getName(): string {
    return this.name;
  }

  // Getter simplificado para chamada como atributo
  public get email(): string {
    return this._email;
  }

  // Setter simplificado para chamada como atributo
  public set email(email: string) {
    this._email = email;
  }

  public userPermissionId(): number {
    return 1;
  }
}

const address1 = new Address("Rua X", 100, "213123-123");
const user = new User("Apolo", "apolo@lira.com");
user.setAddress(address1);

console.log(user);
console.log(user.getName() + " is above all humans."); // Getter comum

user.email = "απολο@λιρα.cομ"; // Setter simplificado com chamada como atributo
console.log("email: " + user.email); // Getter simplificado com chamada como atributo

// Inheritance
class Philosopher extends User {
  createdAt: String;

  constructor(name: string, email: string, createdAt: String) {
    super(name, email); // Passa os parametros recebidos no construtor para a classe pai User
    this.createdAt = createdAt;
  }
  public getName(): string {
    return `Great ${this.name}`;
  }

  public userPermissionId(): number {
    return super.userPermissionId() + 1; // super para acessar os atributos da classe pai
  }
}

const aristotle = new Philosopher("ærɪstɒtəl", "ærɪstɒtəl@gmail.com", "384aC");

console.log(aristotle.getName() + " is awesome");
console.log("User permission: " + aristotle.userPermissionId());
