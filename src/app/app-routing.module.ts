import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RecordComponent } from './Components/record/record.component';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent },
{path: 'log-in', component: LogInComponent },
{path: 'record', component: RecordComponent},
{path: '**', redirectTo: 'home', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
