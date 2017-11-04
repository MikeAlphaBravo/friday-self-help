Define a function that returns n lines of Pascal’s Triangle

function pasc(n){
var result = [];
    result[0] = [1];
    result[1] = [1,1];
for (var row = 2; row < n; row++){
    result[row] = [1];
    for (var col = 1; col <= row -1; col++){
        result[row][col] = result[row-1][col] + result[row-1][col-1];
        result[row].push(1);
    }
}
return result;
}

for (var i = 0; i < pasc(10).length; i++){
    document.write(pasc(10)[i]+"<br>");
    console.log(pasc(10)[i]+"<br>");
}

function pasc(queriedRow)
let result = []
  fill in rows 1 and 2 as [1] and [1,1]
//start row count on 2
  for (let row =2, row <= queriedRow, row++)
  //why define result[row] as [1]?
  for (let col = 1, col <= row -1, col++)
  //why -1 row?
    result // don't understand all the row col + and -
    result[row].push(1)
    //don't know why pushing argument 1

________________________________________________________

Define a function that takes an array of strings, and returns the most commonly occurring string in that array

let arr1 = ['1','2','1','red','50','1','3','4','1','blue']

function mostCommon(arr1){
  let doTheThing = {};
  for (let i = 0, i < arr1.length, i++){
    let x = arr1[i]
    if(doTheThing[x] > 1)
    ??
  }
}


function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
________________________________________________________

(function() {
   var a = b = 5;
})();

console.log(b);

output will be 5

________________________________________________________

console.log('hello'.repeatify(3));
write a function!

function(times) {
   let str = '';

   for (let i = 0; i < times; i++) {
      str += str;
   }

   return str;
};

Answer:
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str;
};

________________________________________________________

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

undefined //a is not defined until later in the function
2 //but not becuase foo is 2 but because at the end of the function we return 2

________________________________________________________

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

Answer:
Aurelio De Rosa //this exists within the function called upon
John Doe //test cannot collect the function var definitions outside of the function so it only knows fullname as the first var defined.
