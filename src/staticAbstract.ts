// ///////////////////////////////
// STATIC CONCEPTS
// ///////////////////////////////

export class Address {
  private _address: string = "";
  private _zipCode: string = "";
  private static defaultZipCode = "80000-000"; // atributo estático é acessado na Classe (Address.defaultZipCode) e não na Instância do objeto ( obj = new Address)

  // Método estático só pode ser acessado pela classe e não na instância do objeto
  public static isZipCodeDiffThanDefault(zipCode: string): boolean {
    return zipCode !== Address.defaultZipCode;
  }
}

console.log(Address.isZipCodeDiffThanDefault("80000-000")); // acessando o método estático da Classe
console.log(Address.isZipCodeDiffThanDefault("80000-001"));

// ///////////////////////////////
// ABSTRACT CONCEPTS
// ///////////////////////////////

abstract class Person {
  protected abstract score: number;

  constructor(protected name: string) {}

  public setScore(score: number): void {
    if (score < 0 || score > 1000) {
      throw new Error("Invalid Score");
      this.score = score;
    }
  }
  public abstract increaseScore(): number; // Método abstrato (faz-se somente a assinatura e implementa-se na classe herdada)
}

// const person = new Person - Impossível em classe abstrata

class Student extends Person {
  protected score: number; // Atributo deve ser instanciado por existir como abstrato na classe pai

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }

  // implementação do método abstrato fica a nivel do
  public increaseScore(): number {
    return (this.score = this.score + 100);
  }
}

const student1 = new Student("Bruno", 800);
console.log(student1);
