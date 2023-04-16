//with map
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const name2 = names.map((names) => `${names}!!!`)

console.log(name2);



//impure function

const createpersonwithage = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: "Bobo"
};

const newperson = createpersonwithage(18, person);

console.log({person, newperson});

//pure function
const createpersonwithage2 = (age, person2) => {
    return {...person2, age}; //agar age nya masuk ke object
};

const person2 = {
    name: "Bobo"
};

const newperson2 = createpersonwithage2(18, person2);

console.log({person2, newperson2});

console.log();
console.log();

//mutable 

const user = {
    firstName: "Lee",
    LastName: "Donghee" //typo
};

const rename = (newLastName, user) => {
    user.LastName = newLastName
};

rename("Donghae", user);
console.log(user);

//diubah jadi immutable 

const user2 = {
    firstName2: "Lee",
    LastName2: "Donghee" //typo
};

const rename2 = (newLastName2, user2) => {
    return{...user2, LastName2: newLastName2}
};

rename2("Donghae", user2);
console.log(user2);

//without rekursif

const countdown = start => {
    while(start > 0){
        console.log(start);
        start -= 1;
    }
}

countdown(10);

console.log();
//with rekursif

const countdown2 = start2 =>{
    console.log(start2);
    if(start2 > 0) countdown2(start2 - 1);
}

countdown2(10);

console.log();

//higher order function

const hello = () => {
    console.log('Hello!')
  };
  
const say = (someFunction) => {
    someFunction();
  }
  
const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
hello();
say(hello);
sayHello()();


  
  