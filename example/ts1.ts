const sample = [];

sample.push(1);
sample.push("NodeJS Deno");
sample.push({ name: "cat" });

const a = "I'm a string!";

console.log(a);
console.log(sample[0]);

/*
타입스크립트에서 오버로딩은 지원하지 않는다.

class Note {
  answer(p1: string) {
    return "문자";
  }

  answer(p1: number) {
    return "숫자";
  }

  answer(p1: string, p2: number) {
    return "문자와 숫자";
  }
}

const note = new Note();

note.answer("몰라");
note.answer(5);
note.answer("알았어", 3);
*/
