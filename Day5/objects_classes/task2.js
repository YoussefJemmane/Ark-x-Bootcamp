class Person {
    constructor(name,age){  
        this.name = name;
        this.age = age;
    }
    compareAge(otherPerson) {
        if (this.age > otherPerson.age) {
            return `${this.name} is older than ${otherPerson.name}`;
        } else if (this.age < otherPerson.age) {
            return `${this.name} is younger than ${otherPerson.name}`;
        } else {
            return `${this.name} and ${otherPerson.name} are the same age`;
        }
    }
}

p1 = new Person("Youssef", 22);
p2 = new Person("Alice", 25);

console.log(p1.compareAge(p2)); 