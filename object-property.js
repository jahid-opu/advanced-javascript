 const students = [
    {id:21, name:'Omar sunny'},
    {id:30, name:'Mannaaaaaa'},
    {id:35, name:'moyouri'},
    {id:50, name:'Deepjol'}
]; 

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id > 30);
console.log(bigger);

const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);
