/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item,i)=>{
        if(item.profession=="developer"){
            console.log(arr[i].name); //or console.log(item.name);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item,i)=>{
        if(item.profession=="developer"){
            console.log(item.name);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push( {id:4,name:"susan",age:"20",profession:"intern"});
  //  console.log("Added Data",arr[arr.length-1]);
    console.log("Updated Array",arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
 arr=arr.filter((item,i)=>{
if(item.profession!="admin"){
    return true;//or return item;
} });
    console.log("Changed Array",arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2=[{ id: 4, name: "brad johnny", age: "21", profession: "intern" },
    { id: 5, name: "vann jackie", age: "23", profession: "chef" },
    { id: 6, name: "alastir karen", age: "22", profession: "magician" },
  ];
  arr=arr.concat(arr2);
  console.log("Concatenated Array",arr);
  }