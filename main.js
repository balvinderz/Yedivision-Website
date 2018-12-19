var config = {
    apiKey: "AIzaSyAVO1Uydh2p8wdyIsQfyWAObW2br7BJ9E8",
    authDomain: "assignments-c2657.firebaseapp.com",
    databaseURL: "https://assignments-c2657.firebaseio.com",
    projectId: "assignments-c2657",
    storageBucket: "assignments-c2657.appspot.com",
    messagingSenderId: "291241787177"
  }
  firebase.initializeApp(config);
const database=firebase.database();
let li=document.getElementById("items");
var y=document.getElementById('button');
y.click();
function setType(databasetype,type)
{
  const ref=database.ref(databasetype);
  ref.on('value',function(data)
  {
    var subjectname;

      let objKey=Object.keys(data.val());
      for(obj in objKey)
      {
              let key=objKey[obj];
           //   li.innerHTML +=`<li>${data.val()[key].description}</li>
  
         //   `
        // if(`${data.val()[key].subjectcode}`==1)
         //{
            switch(`${data.val()[key].subjectcode}`)
            {
              case '1':
               subjectname="Discrete Mathematics";
              break;
              case '2':subjectname="OOPM";
              break;
              case '3':subjectname="AM-III"
              break;
              case '4':subjectname="DS";
              break;
              case '5':subjectname="DLDA";
              break;
              case '6':subjectname="ECCF";
              break;  
           
            }
            li.innerHTML+=`<div class="col-12 col-md-4"><div class="card margi animated fadeInUpBig fast"><div class="card-header psyduckcolor">
            <div class="row">
            <div class="col animated flash delay-1s">
            <h5 class="card-title text-white">`+subjectname+`</h5>
            </div>
            <div clsas="col ml-3">
            <img src="psy.png" class="rounded-circle img-responsive">
          </div>
          </div>
            </div>
  
  <div class="card-body"><div class="row"><div class="col"><p class="card-text animated rollIn delay-1s fast text-uppercase">${data.val()[key].description}</p></div>
      <div class="col"> 
         <button  target="_blank" class="btn btn-primary animated rollIn  fast delay-1s text-uppercase" onClick="download('${data.val()[key].link}','${data.val()[key].description}')" > 
   Download </button>
    </div>
     </div>
      </div> 
        </div>  
          </div>`
        // }       
  }
  const childs=Array.from(li.childNodes).reverse();
  li.innerHTML="";
  childs.forEach(item =>{
    li.appendChild(item);
  })
  })
}

function download(link,name)
{
  var httpsReference = firebase.storage().refFromURL(link);
var xhr=new XMLHttpRequest();
xhr.responseType='blob';
xhr.onload= function(event)
{

  var blob=xhr.response;
  
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = name+".pdf";
  a.click();
};

xhr.open('GET',link);
 xhr.send();

}