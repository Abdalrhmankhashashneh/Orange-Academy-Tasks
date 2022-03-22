console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1.7 , 9 , 45, ];

 ["Str" , "alex","moh" ] ;

 ['the','fox' ,'over' ,  'lazy' , 'dog' ];

*/


let a = [1.7, 9, 45];
let b = ['Str ', 'alex ', 'moh '];
let c = ['the ', 'fox ', 'over ', 'lazy ', 'dog'];
document.writeln(a + '<br>' + b + '<br>' + c);



/*
2
What the index of "Banana"[1] ,"Tomato "[0]
var fruits=["Tomato","Banana","Watermelon"];

*/
var fruits = ["Tomato", "Banana", "Watermelon"];
document.writeln('<br>the index of banana is : ' + fruits.indexOf('Banana', 0));
document.writeln('<br>the index of Tomato is : ' + fruits.indexOf('Tomato', 0));

/*
3
Create an array represents your:
1- Favorite Food (5)  var movie = [ "meet" , "chiken" , "mansaf" , "mqlobeh" , "spagity"]
2- Favorite Sport (3) var movie = [ "swiming" , "football" , "basketball" ]
3- Favorite Movie (4) var movie = [ "the short gay" , "home" , "up" , "fast and furis" ]
*/
var Food = ["meet", "chiken", "mansaf", "mqlobeh", "spagity"]
var Sport = ["swiming", "football", "basketball"]
var movie = ["the short gay", "home", "up", "fast and furis"]
document.writeln('<br>' + Food + '<br>' + Sport + '<br>' + movie);

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
function firstOfArray(arr[]){

}
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(a) {
    return a[0]
}
let s = [1, 4, 5];
document.writeln('<br> firstOfArray Is :' + firstOfArray(s));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(a) {
    return a[2]
}
let s2 = [1, 4, 5];
document.writeln('<br> LastOFArray Is :' + lastOfArray(s));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
document.write('<br>' + array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
array2.pop();
array2.push(3.5);
array2.shift();
array2.unshift(5);
document.writeln("<br>" + array2);


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(ar2) {
    n = parseInt(ar2.length / 2);
    if (ar2.length % 2 == 0) {
        document.writeln('<br> ' + ar2[n - 1]);
        document.writeln(ar2[n]);
    }
    else {
        document.writeln('<br> ' + ar2[n - 1]);
    }
}
let ar2 = [1, 4, 5, 3, 3, 4, 5, 2, 3, 4];
middleOfArray(ar2);


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals = ['zebra', 'elephant'];
document.writeln('<br>' + animals);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexofarray(arr, n) {
    document.write('<br> indexOfArray nums [ ' + n + ' ] is : ' + arr[n]);
}
var nums = [1, 2, 3, 8, 9];
indexofarray(nums, 2);




/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(ar2) {
    ar2.pop();
    return ar2;
}
var nums = [1, 2, 3, 8, 9];
document.writeln('<br> ' + arrayExceptLast(nums))

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function arrayExceptLast(ar2, n) {
    ar2.push(n);
    return ar2;
}
var nums = [1, 2, 3, 8, 9];
document.writeln('<br> ' + arrayExceptLast(nums, 55))


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums = [1, 2, 3, 8, 9];
let sumofthearray = 0;
for (i = 0; i < nums.length; i++) {
    sumofthearray += nums[i];
}
document.writeln("<br> Sum Of Array  is : " + sumofthearray);
sumofthearray = 0;
var l = 0;
while (l < nums.length) {
    sumofthearray += nums[l];
    l++;
}
document.writeln("<br> Sum Of Array  is : " + sumofthearray);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function minInArray(n) {
    var min = n[0];
    var l = 0;
    for (i = 0; i < nums.length; i++) {
        if (min > nums[i])
            min = nums[i];

    }

    while (l < n.length) {
        l++;
        if (min > nums[i])
            min = nums[i];
    }
    return min;
}
document.writeln('<br>' + minInArray(nums));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function removeFromArray() {
    var n = 2;
    for (i = 0; i < nums.length; i++) {
        if (n == nums[i]) {
            delete nums[i]
        }
    }
    var l = 0;
    while (l < nums) {
        l++;
        if (n == nums[l]) {
            delete nums[l]
        }
    }
}
removeFromArray();
document.writeln('<br>' + nums);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];
var odd = [];
var even = [];
function oddArray() {

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 != 0) {
            odd.push(nums[i]);
        }
        else {
            even.push(nums[i]);
        }
    }
    var l = 0;
    while (l < nums) {
        l++;
        if (nums[i] % 2 != 0) {
            odd.push(nums[i]);
        }
        else {
            even.push(nums[i]);
        }
    }

}
oddArray();
document.write("<br>  odd number is : " + odd + " even number is : " + even);

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1.5, 2.2, 3.6, 8, 9, 77]

function SumOftheArray(A) {
    sumofthearray = 0;
    for (i = 0; i < nums.length; i++) {
        sumofthearray += nums[i];
    }
    return sumofthearray;
}

function aveArray() {
    return parseFloat(SumOftheArray(nums) / (nums.length - 1));
}
document.writeln('<br> ' + aveArray());



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = ["alex", "mercer", "madrasa", "rashed25", "emad", "hala"]

function shorterInArray() {
    var max = nums[0];
    for (i = 0; i < nums.length; i++) {

        if (max.length < nums[i].length) {
            max = nums[i];
        }

    }
    return max;
}
document.writeln(shorterInArray());

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string = "alexnnnnnnnn mercer madrasa rashed2 emad hala"

function repeatChar(a, a1) {
    var howmuch = 0;

    d = a.split(' ');
    document.write('<br> ' + d)
    for (i = 0; i < d.length; i++) {
        var c = d[i];
        for (j = 0; j < c.length; j++) {
            if (a1 == c[j]) {
                howmuch++;
            }

        }
    }
    return howmuch;
}

document.writeln("<br> " + repeatChar(string, 'n'))

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
var odd = [];
var even = [];
function evenIndexOddLength(a) {
    for (i = 0; i < a.length; i++) {
        if (a[i].length % 2 == 0) {
            even.push(a[i]);

        }
        else {
            odd.push(a[i]);
        }

    }
}
evenIndexOddLength(strings)
document.write(' <br> the odd string is : ' + odd + " <br>  the even string is : " + even)


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [44, 5, 4, 3, 2, 10]
function powerElementIndex(a) {
    var x = 0;
    a[0] = 1;
    for (i = 0; i < a.length; i++) {
        x = a[i];
        for (j = 1; j < a.indexOf(a[i]); j++) {
            x *= a[i];

        }
        a[i] = x;
        x = 0;
    }
    return a;
}
document.write('<br> ' + powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]

var ev = []
var od = []
function eve(a) {
    for (i = 0; i < a.length; i++)
        if (a[i] % 2 == 0) {
            ev.push(a[i]);
        }
        else {
            od.push(a[i]);
        }
}
eve(nums);
document.write(' <br> the odd string is : ' + od + " <br>  the even string is : " + ev)
