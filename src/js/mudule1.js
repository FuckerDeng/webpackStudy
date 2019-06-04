export class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name + "\t" + this.age);
    }
}