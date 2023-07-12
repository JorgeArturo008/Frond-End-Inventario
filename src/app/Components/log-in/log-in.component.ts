import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInInput } from 'src/app/Models/UserModel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { DataServiceService } from 'src/app/Services/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginusuario2: FormGroup;
  Token: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthServiceService,
    private router: Router,
    private dataservice: DataServiceService
  ) {
    this.loginusuario2 = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviarDatos(datos: string) {
    const data = datos;
    this.dataservice.setData(data);
  }

  LogIn() {
    const Datos: LogInInput = {
      username: this.loginusuario2.value.username,
      email: this.loginusuario2.value.email,
      password: this.loginusuario2.value.password,
    };

    console.log(Datos);

    this.auth.LogIn(Datos).subscribe((data) => {
      this.Token = data.token;
      this.enviarDatos(this.Token);
      console.log('Exito', this.Token);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Hola de Nuevo ' + Datos.username,
        timer: 1500,
      });

      this.router.navigate(['/home']);
    });
  }
}
