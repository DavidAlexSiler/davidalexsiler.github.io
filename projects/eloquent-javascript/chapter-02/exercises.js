
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(i) {
  for(var line = '#'; line.length <= i; line += '#'){
    console.log(line);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i < 16; i++){
if(i % 15 === 0){
	console.log('fizzbuzz');
		}
  else if(i % 5 === 0){
  	console.log('buzz');
  		}
  else if(i % 3 === 0){
  	console.log('fizz');
  		}
  else{
  	console.log(i);
  		}
	}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(i){
// let boardSize = size;
  let board = "";
  for(var y = 0; y < i; y++){
    for(let x = 0; x < i; x++){
      if((x + y) % 2 === 0){
        board += ' ';
      }else{
        board += '#';
      }
    }
    board += "\n";
  }console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
