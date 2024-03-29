var students = [
    {
        name: "Ifeoma",
        age: 25,
        address: "no 5 creek close",
        tribe:"igbo",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.7",
        grade: [60,70,80,90.100]
    },
    {
        name: "Gift",
        age: 24,
        address: "three container",
        tribe:"igala",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.0",
        grade: [40,30,45,50,80]
    },
    {
        name: "Mark",
        age: 28,
        address: "Rayfield",
        tribe:"Idoma",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "5.6",
        grade: [10,20,30,40,50]
    },
    {
        name: "Charlse",
        age: 25,
        address: "Katako",
        tribe:"igbo",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "5.3",
        grade: [15,25,35,45,55]
    },
    {
        name: "tosin",
        age: 24,
        address: "Farin-gada",
        tribe:"Yoruba",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.6 ",
        grade: [90.80,70,60,50]
    },
    {
        name: "Victoria",
        age: 25,
        address: "Forestry",
        tribe:"Plateau",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.0 ",
        grade: [10,90,70,50,30]
    },
    {
        name: "Mariam",
        age: 27,
        address: "behind pts",
        tribe:"igala",
        gender: "female",
        department: "computer science",
        level: 400,
        height: "5.3",
        grade: [49,67,47,55,49]
    },
    {
        name: "Yohanna",
        age: 25,
        address: "Angwa Rukuba",
        tribe:"Afizere",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.7",
        grade: [100,50,55,65,67]
    },
    {
        name: "Nanret",
        age: 23,
        address: "Maza",
        tribe:"Mwagavul",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.6",
        grade: [70,80,100,30,40]
    },
    {
        name: "Elizabeth",
        age: 25,
        address: "Frin-gada",
        tribe:"ibibio",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.7",
        grade: [33,20,45,33,56]
    },
    {
        name: "Susan",
        age: 25,
        address: "Farin-gada",
        tribe:"idoma",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "3.6 ",
        grade: [100,100,50,50,40]
    },
    {
        name: "Martins",
        age: 25,
        address: "Odus",
        tribe:"Kangoro",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "5.8",
        grade: [69,79,46,57,20]
    },
    {
        name: "Paul",
        age: 25,
        address: "Dodus",
        tribe:"igbo",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "4.8 ",
        grade: [40.90,50,48,30]
    },
    {
        name: "Joy",
        age: 23,
        address: "Ring-road",
        tribe:"edo",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.6",
        grade: [50,60,70,80,90]
    },
    {
        name: "Josephine",
        age: 23,
        address: "Ring-road",
        tribe:"eggon",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.5",
        grade: [30,70,50,20,49]
    },
    {
        name: "Peter",
        age: 23,
        address: "c brigde",
        tribe:"igala",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "3.5",
        grade: [60,70,80,90.100]
    },
    {
        name: "Uzaifat",
        age: 25,
        address: "Dodo street",
        tribe:"mwagavul",
        gender: "male",
        department: "computer science",
        level: 400,
        height: "4.3",
        grade: [64,58,70,56,45]
    },
    {
        name: "Deborah",
        age: 25,
        address: "Ring-road",
        tribe:"Plateau",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "4.5",
        grade: [23,45,67,34,56]
    },
    {
        name: "Steve",
        age: 24,
        address: "Katako",
        tribe:"igbo",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "5.7",
        grade: [89,56,34,23,11]
    },
    {
        name: "Tiwa",
        age: 26,
        address: "Nasarrawa-gwom",
        tribe:"Yoruba",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.4",
        grade: [10,11,12,13,14]
    },
    {
        name: "Kevin",
        age: 23,
        address: "maza",
        tribe:"Shandam",
        gender: "female",
        department: "computer science",
        level: 300,
        height: "5.0 ",
        grade: [20,40,60,80,45]
    },
    {
        name: "K Nanbal",
        age: 26,
        address: "Legislative",
        tribe:"mupun",
        gender: "male",
        department: "computer science",
        level: 300,
        height: "5.0",
        grade: [20,39,54,70,90]
    }

];
var max =0;

students.forEach(function(value){
    if(max < value.height){
        max = value.height;
    }
});

console.log(max);


var studentA = students.filter((student)=> student.height == max);
    console.log(studentA);
