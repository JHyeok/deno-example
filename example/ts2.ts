// deno-lint-ignore-file no-inferrable-types
class Student {
  private emotion: string = "";
  private energy: number = 0;

  constructor(
    private grade: number,
    private name: string,
    private gender: string,
  ) {
    this.grade = grade;
    this.name = name;
    this.gender = gender;
  }

  static makeStudent(grade: number, name: string, gender: string) {
    return new Student(grade, name, gender);
  }

  private energyUp(energy: number) {
    this.energy += energy;
  }

  private energyDown() {
    this.energy -= 1;
  }

  protected happyEmotion() {
    this.emotion = "happy";
  }

  private angryEmotion() {
    this.energyDown();
    this.emotion = "angry";
  }

  bawl() {
    this.angryEmotion();
  }

  eat(food: number) {
    this.energyUp(food);
    this.happyEmotion();
  }
}

class Teacher extends Student {
  constructor(grade: number, name: string, gender: string) {
    super(grade, name, gender);
  }

  leaveWork() {
    super.happyEmotion();
  }
}

const tom = new Student(3, "tom", "male");
console.log(tom);
tom.eat(5);
console.log(tom);
tom.bawl();
console.log(tom);

const jin = new Teacher(4, "jin", "female");
console.log(jin);
jin.leaveWork();
console.log(jin);

const jim = Student.makeStudent(2, "jim", "male");
console.log(jim);
