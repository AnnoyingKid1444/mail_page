
const Grades = [
    {id: 1, year : '2023-2024', name: 'ENGLISH LANGUAGE', credit: 2, score: 100, grade: 'A+'},
    {id: 2, year : '2023-2024', name: 'INTRODUCTION TO INFORMATION SYSTEMS', credit: 2, score: 100, grade: 'A+'},
    {id: 3, year : '2023-2024', name: 'ENGLISH LANGUAGE', credit: 2, score: 100, grade: 'A+'},
    {id: 4, year : '2023-2024', name: 'ENGLISH LANGUAGE', credit: 2, score: 100, grade: 'A+'},
    {id: 5, year : '2023-2024', name: 'ENGLISH LANGUAGE', credit: 2, score: 100, grade: 'A+'},
    {id: 6, year : '2023-2024', name: 'ENGLISH LANGUAGE', credit: 2, score: 100, grade: 'A+'},
];
let res = Grades.map(function(item) {
    return <tr key={item.id}>
       <td>{item.year}</td>
       <td>{item.name}</td>
       <td>{item.credit}</td>
       <td>{item.score}</td>
       <td>{item.grade}</td>
    </tr>; 
 });

 export default res