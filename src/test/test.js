class Humen{

    student;

    constructor(student) {
        this.student = student
        console.log('构造方法自动调用');
    }

    speak() {
        console.log('发言');
    }
}


class Men extends Humen {}

const v1 = new Men('XXX');
v1.speak();
console.log(v1);