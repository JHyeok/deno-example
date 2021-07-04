// deno-lint-ignore-file no-inferrable-types
class Person {
  private _age: number = 0;
  private _firstName: string = "";
  private _lastName: string = "";

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }

    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid first name.");
    }

    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invalid last name.");
    }

    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person();
person.age = 10;
console.log(person.age);
person.firstName = "Sam";
person.lastName = "Gardner";

console.log(person.getFullName());
