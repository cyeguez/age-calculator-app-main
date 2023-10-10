const inputDay = document.getElementById('fieldDay');
const inputMonth = document.getElementById('fieldMonth');
const inputYear = document.getElementById('fieldYear');
const btn = document.getElementById('btnSend');
const labelDay = document.getElementById('labelDay');
const labelMonth = document.getElementById('labelMonth');
const labelYear = document.getElementById('labelYear');
const dayError=  document.getElementById('dayError');
const monthError=  document.getElementById('monthError');
const yearError=  document.getElementById('yearError');
const placeDay = document.getElementById('placeDay');
const placeMonth = document.getElementById('placeMonth');
const placeYear = document.getElementById('placeYear');

const today= new Date();
let dayNow = today.getDay();
let monthNow = today.getMonth() + 1  ;
let yearNow = today.getFullYear();






function validation(e){
  e.preventDefault();
  let day=validationDay(inputDay.value, inputDay, labelDay, dayError);
  let month=validationMonth(inputMonth.value, inputMonth, labelMonth, monthError);
  let year= validationYear(inputYear.value, inputYear, labelYear, yearError);
  
 let dateOfBirth= new Date(year,month-1,day);
 console.log(day)



   const diferenciaEnMilisegundos = today - dateOfBirth; 
   const milisegundosEnUnAño = 1000 * 60 * 60 * 24 * 365.25;
   const userYear = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnAño);
   const userMonth = Math.floor((diferenciaEnMilisegundos % milisegundosEnUnAño) / (1000 * 60 * 60 * 24 * 30.44));
   const userDay = Math.floor((diferenciaEnMilisegundos % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    
  if(dateOfBirth != undefined && dateOfBirth!= NaN){

    placeYear.innerHTML= userYear;
    placeMonth.innerHTML = userMonth;
    placeDay.innerHTML= userDay; 
  
  }
 


}


function validationDay(valuex, valuey, valuez,valuek){
  if (valuex>=1 && valuex<=31){
   hiddenErron(valuey, valuez, valuek);
   return(valuex)
  }else{    
    showError(valuey, valuez,valuek);
    
    
  }

}

function validationMonth(valuex,valuey,valuez,valuek){
  if(valuex>=1 && valuex<=12 ){          
    hiddenErron(valuey,valuez,valuek);
    return(valuex);
    }else{
    showError(valuey,valuez,valuek)
  }
}

function validationYear(valuex,valuey,valuez,valuek){
  if(valuex.length ==4 && valuex<=today.getFullYear()) {
   hiddenErron(valuey,valuez,valuek);
   return (valuex);   
  }else{
    showError(valuey,valuez,valuek);
  }
}

function showError(valuey, valuez, valuek){  
  valuey.classList.add('error-input');
  valuez.classList.add('error-label');
  valuek.innerHTML= `Must be a valid ${valuey.name}`;
}

function hiddenErron(valuex, valuey, valuek){
  valuex.classList.remove('error-input');
  valuey.classList.remove('error-label');
  valuek.innerHTML='';
}
btn.addEventListener("click",validation);