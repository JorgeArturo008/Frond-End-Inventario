import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInInput } from 'src/app/Models/UserModel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
 
   loginusuario2: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthServiceService, private router: Router) {
    this.loginusuario2 = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  };
  

  ngOnInit(): void {}

      LogIn(){


        const Datos: LogInInput = { 
          username: this.loginusuario2.value.username,   
          email: this.loginusuario2.value.email,
          password: this.loginusuario2.value.password,
        };

        console.log(Datos)

        this.auth.LogIn(Datos).subscribe(data => {
          console.log('Exito', Datos)

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Hola de Nuevo ' + Datos.username,
            timer: 1500
          })

          this.router.navigate(["/home"])
        })




    
    }
  
}
