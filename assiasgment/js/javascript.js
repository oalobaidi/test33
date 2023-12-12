
function validate() {
      
    if( document.myForm.UserName.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
  
    if( document.myForm.password.value == "-1" ) {
       alert( "Please provide your password!" );
       return false;
    }
    return( true );
 }
 function OnClicked(){ alert( "The form was submitted");}
