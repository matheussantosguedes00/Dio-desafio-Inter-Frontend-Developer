// o que são vetores e arravs

//como declarar um array

let array =['string',1, true];
console.log(array);

// Pode guardar ários tipos de dados 

let array1 =['string',1, true ,['array1'],['array2'],['array3'],['array4']];
console.log(array1);
console.log(array1[0]);

//forEach
array1.forEach(function (item,index) {console.log(item,index)})

//push();
array1.push('novo item ');
console.log(array1);

//pop()
array1.pop();
console.log(array1);

//shift()
array1.shift();
console.log(array1);

//unshift()
array1.unshift('novo item no inicio');
console.log(array1);


//indexOF
console.log(array1.indexOf(true));


//splice()
array1.splice(0,3);
console.log(array1);

//slice()
let novoArray =array1.splice(0,3);
console.log(novoArray);

//Objeto
let object={string:'string',Number:3,Boolean:true,array2:['array'],objectInterno:{objectInterno:'objeto interno'}};
console.log(object);
console.log(object.Boolean);
console.log(object.objectInterno);

var string = object.string
console.log(string);

var array6 = object.array2
console.log(array6);

var {string,Boolean,objectInterno}=object;
console.log(string,Boolean,objectInterno);

