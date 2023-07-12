// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RecordComponent } from './Components/record/record.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BackgroundComponent } from './Components/background/background.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MyInventoryComponent } from './Components/my-inventory/my-inventory.component';
// Librerias
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    RecordComponent,
    NavbarComponent,
    BackgroundComponent,
    AddProductComponent,
    MyInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
