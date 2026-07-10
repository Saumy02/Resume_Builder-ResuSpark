//Work Experience

function addNewWEfield(){
    // console.log ("Adding a new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

//Academic Qaualification

function addNewAQfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

//Projects


function addNewPRfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


    let prOb=document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prOb.insertBefore(newNode,prAddButtonOb);

}
//skill function
function addNewSKfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");


    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);

}

//generating CV
function generateCV(){
    // console.log("GeneratingCV")
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;
    //class
    document.getElementById("nameT3").innerHTML=document.getElementById("clField").value;
    
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //email
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;


    //skill
    let sks=document.getElementsByClassName("skField");

    let str2="";

    for (let e of sks){
        str2=str2+`<li>${e.value}</li>`;
    }
    document.getElementById(`skT`).innerHTML=str2;

    //Important Link
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;

    // //Details
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    

    //we

    let wes=document.getElementsByClassName("weField");

    let str="";

    for (let e of wes){
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById(`weT`).innerHTML=str;

    //peojects
    let prs=document.getElementsByClassName("prField");

    let str3="";

    for (let e of prs){
        str3=str3+`<li>${e.value}</li>`;
    }
    document.getElementById(`prT`).innerHTML=str3;


    //aq
    
    let aqs=document.getElementsByClassName("aqField");

    let str1="";

    for (let e of aqs){
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById(`aqT`).innerHTML=str1;

    //code for photo

    let file=document.getElementById("imgField").files[0];

    console.log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the images

    reader.onloadend=function(){
        document.getElementById("imgTam").src=reader.result;
    };

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

}

printCV

function printCV(){
    window.print();
}
