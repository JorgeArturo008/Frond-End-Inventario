import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInInput } from 'src/app/Models/UserModel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
 
   loginusuario2: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthServiceService) {
    this.loginusuario2 = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  };
  

  ngOnInit(): void {}

      LogIn(){


        const Datos: LogInInput = {    
          email: this.loginusuario2.value.email,
          password: this.loginusuario2.value.password,
        };

        this.auth.LogIn(Datos).subscribe(data => {
          console.log('Exito', Datos)
        })




    
    }
  
}
