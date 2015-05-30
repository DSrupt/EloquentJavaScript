function countBs(string){
  count = 0;
  for (var i = 0; i < string.length; i++) {
    if(string.charAt(i)=="B"){
      count ++;
    }
  }
  return count;
}

function countChar(string, char){
  count = 0;
  for (var i = 0; i < string.length; i++) {
    if(string.charAt(i)==char){
      count ++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
