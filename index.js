var CC, YY, MM, DD, d, dayValue;
var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var female = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var Day = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
       alert( "Invalid! Give valid year of birth! ie 2021" );
       document.myForm.year.focus() ;
       return false;
    }
    else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
       alert( "Invalid! Give valid month of birth! between 1 and 12" );
       document.myForm.month.focus() ;
       return false;
    }