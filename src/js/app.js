import Team from './Team';
import Person from './Person';

const person1 = new Person('Unit1');
const person2 = new Person('Unit2');
const person3 = new Person('Unit3');

const team = new Team('Reya');
team.add(person1);
team.add(person2);
team.add(person3);

const generator = team[Symbol.iterator]();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const unit of team) {
  console.log(unit);
}
