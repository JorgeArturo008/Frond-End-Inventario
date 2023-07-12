// Modulos

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RecordComponent } from './Components/record/record.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MyInventoryComponent } from './Components/my-inventory/my-inventory.component';

// Guards
import { StateLogGuard } from './Guard/state-log.guard';

// Rutas
const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent, },
{path: 'log-in', component: LogInComponent },
{path: 'record', component: RecordComponent},
{path: 'add-product', component: AddProductComponent, canActivate: [StateLogGuard]},
{path: 'Edit/:id', component: AddProductComponent, canActivate: [StateLogGuard]},
{path: 'MyInventory', component: MyInventoryComponent, canActivate: [StateLogGuard]},
{path: '**', redirectTo: 'home', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
