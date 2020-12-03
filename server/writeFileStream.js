const fs = require('fs');
const path = require('path');

const locationFile = path.join(__dirname, '/exampleWrite.csv');
const writeStream = fs.createWriteStream(locationFile, 'utf8');
const data = 'nothing to see now';
const data2 = ['hey', 'ho', 'here we', 'go'];

const looperArray = (length) => {
  const result = [];
  for (var i = 0; i < length; i++) {
    const newDog = {'name': 'bob' + i, 'age': i};
    result.push(newDog);
  }
  return result;
};

const looperWrite = (inputData) => {
  for (var i = 0; i < inputData.length; i++) {
    writeStream.write(inputData[i].name + ',' + inputData[i].age + '\n');
  }
  writeStream.end('END');
};


console.log(JSON.stringify(looperArray(10)));

looperWrite(looperArray(10));

// writeStream.write(data);

