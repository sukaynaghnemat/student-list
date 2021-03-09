'use strict';
let arryOfObject=[];

let div=document.getElementById('myDiv');
let tableEl=document.createElement('table');
div.appendChild(tableEl);

function tableHeader(){
     
    let row=document.createElement('tr');
    tableEl.appendChild(row);

    let id=document.createElement('th');
    row.appendChild(id);
    id.textContent="ID";

    let name=document.createElement('th');
    row.appendChild(name);
    name.textContent="name";

    let Email=document.createElement('th');
    row.appendChild(Email);
    Email.textContent="Email";

    let Mobile=document.createElement('th');
    row.appendChild(mobile);
    mobile.textContent="Mobile";

    let age=document.createElement('th');
    row.appendChild(age);
    age.textContent="Age";

    let tuition=document.createElement('th');
    row.appendChild(tuition);
    tuition.textContent="Tuition";

}
tableHeader();




function student(id,name,email,mobile,age,tuition){
    this.id=id;
    this.name=name;
    this.email=email;
    this.mobile=mobile;
    this.age=age;
    this.tuition=tuition;
    this.arryOfObject=[];
};

student.prototype.render=function(){

    let td;
    for(let i=0 ;i<arryOfObject.length ;i++){

        td=document.createElement('td');
        row.appendChild(td);
        td.textContent=arryOfObject[i];


    }


};

student.render();
const form= document.getElementById('myForm');
let 