
console.log(require('./task1.js').drawPyramid(4));
console.log(require('./task2.js').secondLargest1([2,4,7,1,8]));
console.log(require('./task3.js').secondLargest2([2,4,7,1,8]));
console.log(require('./task4.js').alphaFreq("aditya"));
console.log(require('./task5.js').readContent(["file1.txt","file2.txt","file3.txt"]));
console.log(require('./task6.js').propName({ name: 'John', age: 26, location: 'Canada' }));
console.log(require('./task7.js').valueOfName([{name: 'John', age: 26}, {name: 'Dev', age: 32}]))

/*
- n(integer) as input and prints a star pyramid
eg. for n=4, output:
   *
  ***
 *****
*******

- arr(array) as input and returns the second biggest number in it(with using in-built sort)?

- arr(array) as input and returns the second biggest number in it(without using sort)?

- str(string) as input and returns occurrence of each alphabet?

- file_name(string) as input and returns the file contents?

- obj(object) as input and returns an array of the properties' names of the passed object
Eg. for input = { name: 'John', age: 26, location: 'Canada' } , output = ['name', 'age', 'location']

- arr(array[object]) as input and list the value of property 'name' of all the objects in array
Eg. for input = [{name: 'John', age: 26}, {name: 'Dev', age: 32}] , output = ['John', 'Dev']

*/