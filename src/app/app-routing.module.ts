import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';


const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about/:id',
  component: AboutComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'register',
  component: SidebarComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
