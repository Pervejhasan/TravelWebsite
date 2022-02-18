 //interface name er first letter Capital letter dea hoy
 
 interface Player{
name:string,
club:string,
salary:number,
wife?:string, 
previousClub?:string[]
 } 


 const messy:Player={
    name:"l messy",
    club:"Abahoni",
    salary:12000,
    wife:"oronil"
 }
 const hannan:Player={
    name:"l messy",
    club:"Abahoni",
    salary:12000
 }

 interface Employee{
     name:string,
     designation:string,
     salary:number,
     age:number
 }


 interface Developer extends Employee{
    language:string,
    codeEditor:string,
    typingSpeed:number
 }

 const zuku:Developer={
     language:"js",
     codeEditor:'vs code',
     typingSpeed:65,
     name:"zuker",
     designation:"ceo",
     salary:1000,
     age:24
 }