let myarray = ["Cokelat", 42.5, 22, true, "Programming"];

myarray.push("hai"); myarray.push("lol");
myarray.pop();
myarray.unshift(1); myarray.unshift(2); 
myarray.shift(); 

delete myarray[2];
myarray.splice(3, 1);

console.log(myarray);