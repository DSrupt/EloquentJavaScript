var size = 8;
var output ="";
for (var i =0; i < size; i++) {
  if(i%2==0){
    output = "";
    for (var j=0; j < size; j++) {
      output += " #";
    }
    console.log(output);
  }
  else {
    output = "";
    for (var j=0; j < size; j++) {
      output += "# ";
    }
    console.log(output);
  }
}
