import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/UserModel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  loginusuario: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthServiceService, private router: Router) {
    this.loginusuario = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }


  ngOnInit(): void {
  }

  Registrarse() {
    const Datos: UserModel = {
      username: this.loginusuario.value.username,
      email: this.loginusuario.value.email,
      password: this.loginusuario.value.password,
      passwordConfirm: this.loginusuario.value.passwordConfirm,
    };

    console.log('Datos', Datos);
    
    if(Datos.email === '' || Datos.password === '' || Datos.passwordConfirm === '' || Datos.username === ''){
     console.log('Error no pueden ir Campos Vacios')
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error no pueden ir Campos Vacios!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

    }if(Datos.password !== Datos.passwordConfirm){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no son iguales',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else{
      this.auth.CreateUser(Datos).subscribe((data) => {
        console.log('Se Creo el usuario Correctamente');
        Swal.fire(
          'Good job!',
          'Bienvenido a YourInventory' + Datos.username,
          'success'
        )
        this.router.navigate(['/home'])
      });
      
    }
   
  }

}
