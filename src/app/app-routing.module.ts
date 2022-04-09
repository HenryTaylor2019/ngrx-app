import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LeaderBoardComponent } from './features/leader-board/leader-board.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'leaderboard', component: LeaderBoardComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'dash', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
