var input = process.argv.slice(2).join('');

/*function charSplitter(str){
   var noSpace = str.split(" ").join('').toLowerCase();
   return noSpace
}*/


function charCounter(str){
  var output = {};
  for(var i = 0; i < str.length; i++){
    var x = str.charAt(i)
    output[x] = (isNaN(output[x]) ? 1 : output[x] + 1);
  }
  return output
}

console.log(charCounter(charSplitter(input)));
