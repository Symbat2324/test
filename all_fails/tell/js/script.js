let d = [
    {name:'Adam', age:21,telephone:"+996-555-555-555", status:'Menthor',budget: 10000},
    {name:'Baha',age:18,telephone:"+996-333-333-333",status:'student',budget: 10000},
    {name:'Nursultan',age:20,telephone:"+996-666-666-666",status:'student',budget: 10000},
    {name:'Eremet',age:17,telephone:"+996-111-111-111",status:'student',budget: 10000},
    {name:'Ømurbek',age:20,telephone:"+996-996-996-996",status:'student',budget: 10000},
    {name:'Batyrbek',age:17.5,telephone:"+996-123-123-123",status:'student',budget: 10000}
]
console.log(d)
console.log('******************')
d.forEach(el => {
    // console.log(d[el])
    console.log('Имя '+ el.name)
    console.log('Возраст '+ el.age)
    console.log('Телефон '+ el.telephone)
    console.log('Статус '+ el.status)
    console.log('******************')
});


//  МЕТОД MAP
// let newPeople = d.map(person =>{
//     return person.name
// });
// console.log(newPeople)


//МЕТОД FILTER
// const adults = d.filter(person => person.age >=18);
// console.log(adults)


//МЕТОД REDUCE
// const amount = d.reduce((total,d)=> total + d.budget, 0);
// console.log(amount)


//МЕТОД FIND
// const adam = d.find (person => person.name === 'Adam');
// console.log(adam);


//МЕТОД FINDINDEX
// const adamIndex = d.findIndex (person => person.name === 'Adam');
// console.log(adamIndex);
