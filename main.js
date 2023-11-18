let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(
     // print jo bhi developer hai 
     (person)=>{
        if(person.profession==="developer"){
            console.log(person);
        }
     }   
    )
  }
  
  // 2. Add Data
  function addData() {
    // create var and asked
    let newname = prompt("Enter the name:");
    let newage = parseInt(prompt("Enter your age:"));
    let newprofession=prompt("Enter the profession:");
    console.log(newname, newage, newprofession);

    data.push({
        name:newname,
        age:newage,
        profession:newprofession
    });
    // console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
data=data.filter((person)=>person.profession!="admin");
console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyarray=[
        {name:"Ayush", age:21, profession:"developer"},
        {name:"Vimal", age:22, profession:"student"}
    ]
    // let combinedArr = data.concat(dummyarray);
    // console.log(combinedArr);

    data.push(...dummyarray);
    console.log(data);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgval=0;
    data.forEach((person)=>{
        avgval+=person.age;
    })
    console.log(avgval/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let status=false;
    data.forEach(person=>{
        if(person.age>25){
            status=true;
        }
    })
    let count=data.some(person=person.age>25);
    console.log(count?"Yes, person exist who have age greater than 25":"no, person doesn't exist who's age is greater than 25");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let proarr=[];
    data.forEach(person=>{
        if(!proarr.includes(person.profession)){
            proarr.push(person.profession);
        }
    })
    console.log(proarr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>b.age-a.agr);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(person=>{
        if(person.name=="john"){
            person.profession="manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {}