import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RecordComponent } from './Components/record/record.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MyInventoryComponent } from './Components/my-inventory/my-inventory.component';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent },
{path: 'log-in', component: LogInComponent },
{path: 'record', component: RecordComponent},
{path: 'add-product', component: AddProductComponent},
{path: 'MyInventory', component: MyInventoryComponent},
{path: '**', redirectTo: 'home', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
