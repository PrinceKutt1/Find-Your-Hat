const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let foundHat= false;
let a = 0;
let b = 0;

class Field {
  constructor(field){
    this._field = field;
  }
  get field (){
    return this._field;
  }
print () {
    console.log(this._field.join('\n').replace(/,/g, ""))
    this.input()
  }
  input () {
    let input = prompt('Find your hat, which way ? u, d, r, l: ')
    let coordonates = this.position(input)
    this.success(coordonates)
  }

  position (input) {
    if (input === 'r') {
      b += 1
    } else if (input === 'l') {
      b -= 1
    } else if (input === 'd') {
      a += 1
    } else if (input === 'u') {
      a -= 1
    } else {
      console.log('Please enter u, d, r or l')
    }
    return [a, b]
  }
success (coordonates) {
    let x = coordonates[0]
    let y = coordonates[1]
    while (!foundHat) {
      if (x === -1 || y === -1 || this._field[x][y] === hole) {
        console.log('Sorry! You lost')
        foundHat = true
      } else if (this._field[x][y] === hat) {
        console.log('Great! You won!')
        foundHat = true
      } else {
        this._field[x][y] = '*'
        console.log('Continue')
        console.log(this._field.join('\n').replace(/,/g, ""))
        this.input()
      }
    }
  }
}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░']
]);

myField.print()








