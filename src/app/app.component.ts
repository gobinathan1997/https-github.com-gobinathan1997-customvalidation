import { Component, VERSION } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


registerForm= new FormGroup({
  userName:new FormControl('gobinathan',[Validators.required,this.validateUserName]),
  email:new FormControl('gobinathan@gmailcom',Validators.required),
  password:new FormControl(''),
  confirmPassword:new FormControl('')
}, [this.camparePassword]);

validateUserName(control:AbstractControl):ValidationErrors | null{
  if(control.value.toString().startsWith('a')){
    return{invalid:true};
  }
  else{
    return null;
  }
}
camparePassword(control:AbstractControl){

const v= control as FormGroup
if(v.controls.confirmPassword.value===v.controls.password.value){
  v.controls.confirmPassword.setErrors({match:true});
}
else{
  v.controls.confirmPassword.setErrors({match:false});

}
return v;


}
submit(){
  console.log(this.registerForm);
}

}
