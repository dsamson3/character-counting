var input = process.argv[2].split(" ").join('').toLowerCase();

function charPosition(str){
  var output = {};
  for(var i = 0; i < str.length; i++){
    var character = str.charAt(i)
    if(output[character]) {
      output[character].push(i)
    } else {
      output[character] = [i];
    }
  }
  return output;
}
console.log(charPosition(input))