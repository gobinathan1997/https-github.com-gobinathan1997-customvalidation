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
})

validateUserName(control:AbstractControl):ValidationErrors | null{
  if(control.value.toString().startsWith('a')){
    return{invalid:true};
  }
  else{
    return null;
  }
}
}
