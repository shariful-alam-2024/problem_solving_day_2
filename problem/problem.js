
//question1:ans:- 

// const person={
//       name:"shariful alam",              //here name and age is property.
//       age:23,
// };

// const {name:username,age}=person;  
// console.log(username);                 // We can also write the output to  console.log(username,age);
// console.log(age);                     
                  
//question3:ans:- 


// class Rectangle{
//       constructor(width,hight){
//             this.width = width;
//             this.hight = hight;
//       }

//       RectangleArea(){
//             return this.width * this.hight;
//       }

// }



// const myRectangleArea = new Rectangle(50,200);

// console.log(myRectangleArea.RectangleArea());


//question4:ans:-

// class person{
//       constructor(firstName, lastName){
//          this.firstName = firstName;
//          this.lastName = lastName;
//       }
//       get fullName(){
//             return `${this.firstName} ${this.lastName}`;

//       }
//       set fullName(name){
//             const [firstName , lastName] = name.split(' ');

//             this.firstName = firstName;
//             this.lastName = lastName;
//       }
// }
// const personName = new person('shariful', 'alam');
// console.log(personName.fullName);



//question5:ans:-

// const circle =class{
//       constructor(radius){
//             this.radius =radius;
//       }
//       getCircumference(){
//             return 2 *Math.PI * this.radius;
//       }
// };
// const myCircle = new circle(100);
// console.log(myCircle.getCircumference());


//question6:ans:-

// const A = 'name';
// const B = "Father's Name";
// const C = " mother's Name";
// const D = 'Division';
// const E = 'District';
// const F = 'department';
// const person = {
//       [A] : 'SHARIFUL ALAM',
//       [B]:"ATIAR RAHAMAN",
//       [C]:"MERI BEGUM",
//       [D]:'BARISAL',
//       [E]:'PIROJPUR',
//       [F]:'COMPUTER SCIENCE AND ENGINEERING'
// }

// console.log(person);

//question 7:ans:-



// class Animal{
//       constructor(name){
//             this.name = name;
//       }
//       speak(){
//             console.log(`${this.name}`);
//       }
// }

// class Dog extends Animal{
//       constructor(name,breed){
//             super(name);
//             this.breed = breed;
//       }
//       speak(){
//             console.log(`${this.name}`);
//       }
// }

// const animal = new Animal('Generic animal');
// animal.speak();
// const dog = new Dog('Buddy','Golden retriever');
// dog.speak();

// console.log(dog.name);
// console.log(dog.breed);

//question 8:ans:-


class MathUtil{
      static square(number){
            return number * number;
      } 
}
const num = 12;
const squared = MathUtil.square(num);
console.log(squared); 

//question 9:ans:-


class shape{
      constructor(){
            if(new.target === shape){
                  throw new Error("Cannot instantiate abstract class Shape directly")
            }
      }
      area(){
            throw new Error("Method 'area()' must be implemented")
      }
}
class circle extends shape{
      constructor(radius){
            super();
            this.radius = radius;
      }
      area(){
            return Math.PI* this.radius*this.radius;
      }
}
class Rectangle extends shape{
      constructor(width, hight){
            super();
            this.width = width;
            this.hight = hight;
      }
      area(){
            return this.width*this.hight;
      }
}

try{
      const Shape = new Shape();
}catch(e){
      console.log(e.message);
}
const Circle =new circle(50);
console.log(Circle.area());
const rectangle =new Rectangle(20,30);
console.log(rectangle.area());




//question 10:ans:-

const mySymbol = Symbol('uniqueKey');
const myObject = {
      [mySymbol]: 'value associated with the symbol'
};
const anotherSymbol = Symbol('uniqueKey');
myObject[anotherSymbol] = 'another value';
console.log(myObject[mySymbol]);
console.log(myObject[anotherSymbol]);
console.log(myObject);
