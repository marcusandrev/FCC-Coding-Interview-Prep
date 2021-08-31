//Object Literals

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

//      <br />

function Book(name, author) {
    this.name = name
    this.author = author
    this.nameAndAuthor = () => {
        console.log(name) + console.log(author)
    }
}

const sample1 = new Book ('Sample book', 'Me')
sample1.nameAndAuthor()




//Prototype

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8