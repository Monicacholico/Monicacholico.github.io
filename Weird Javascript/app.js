


function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.name + ' ' + this.lastName;
}


let monica = new Person('Monica','Lopez')
console.log(monica);
console.log(monica.getFullName());



function AnotherPerson ( personObject){
    this.name = personObject.name;
    this.lastName = personObject.lastName;
}

const josh = new AnotherPerson({
    name: 'Josh',
    lastName: 'Maher'
})

// console.log(josh);


class NewPerson{
    constructor(personObject){
        this.name = personObject.name;
        this.lastName = personObject.lastName;
    }
}

const newOtherPerson = new NewPerson({
    name: 'Julian',
    lastName: 'Salas'
})

// console.log(newOtherPerson);





const objectMaker = document.getElementById('theButton');
objectMaker.addEventListener('click', function(){
    let name = document.getElementById('my-name').value;
    let lastName = document.getElementById('my-lastname').value;
    const newOtherPerson = new NewPerson({
        name: name,
        lastName: lastName
    })
    const ul = document.getElementById('object-list');
    console.log(ul);
    const li = document.createElement('li');
    console.log(li)
    li.innerHTML = `<div class="object-content">The new object person created is:<h3>${newOtherPerson.name} ${newOtherPerson.lastName}</h3></div>` ;
    ul.appendChild(li);

    console.log( newOtherPerson);
    
    


})



String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));



// Arrays prototypes with for in

// Array.prototype.customFunction = 

var arr = ['John', 'Jane', 'Jim'];


for(var prop in arr) {
    console.log( prop + ': ' + arr[prop]);
}

console.log(arr);


var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


// POLYFILL

if(!Object.create) {
    Object.create = function(o) {
        if(arguments.lenght > 1 ){
            throw new Error('Object.create impleentation' + ' only accepts the sifrst parameter.');
        }
        function F(){}
            F.prototype = o;
            return new F();
        };
}