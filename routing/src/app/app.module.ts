import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './app.auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';

const APP_ROUTE: Route[] = [
  { path: 'home', component: HomepageComponent },
  { path: 'users', 
    component: UserComponent,
    resolve: { user: AuthGuard }, 
    children: [
      { path: ':id', 
        canActivate: [AuthGuard], 
        component: UserDetailsComponent, 
        children: [
          { path: 'edit', 
            component: UserEditComponent,
            canDeactivate: [AuthGuard] }
          ]}    
    ]},
  { path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomepageComponent}
];

// const APP_ROUTE: Route[] = [
//   { path: 'home', component: HomepageComponent },
//   { path: 'user/:id', component: UserDetailsComponent },
//   { path: 'users', component: UserComponent },
//   { path: '', 
//     redirectTo: '/home',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
