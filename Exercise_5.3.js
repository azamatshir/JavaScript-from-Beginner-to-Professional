// Создаие массива объектов
const myWork = [];

for ( i = 1; i < 10; i++) {
    let stat = i % 2 ? true : false;
    let temp = {
        name: `Lesson ${i}`, status: stat  
    }; 
    myWork.push(temp);
}

console.log(myWork);