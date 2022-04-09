import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './features/shared/user-form/user-form.component';
import { UserCardsComponent } from './features/shared/cards/user-cards/user-cards.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { LeaderBoardComponent } from './features/leader-board/leader-board.component';
import { UserCardComponent } from './features/shared/cards/components/user-card/user-card.component';
import { NavComponent } from './features/shared/nav/nav.component';
import { HomeComponent } from './features/home/home.component';
import { EventFormComponent } from './features/shared/event-form/event-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { usersReducer } from './shared/store/reducers/users.reducer';
import { LeaderboardCardsComponent } from './features/shared/cards/leaderboard-cards/leaderboard-cards.component'
import { eventReducer } from './shared/store/reducers/event.reducer';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserCardsComponent,
    RegisterPageComponent,
    LeaderBoardComponent,
    UserCardComponent, 
    NavComponent, 
    HomeComponent,
    EventFormComponent,
    LeaderboardCardsComponent,
    LoginPageComponent,
    LoginFormComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      usersState: usersReducer,
      eventState: eventReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
