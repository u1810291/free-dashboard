import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './view/Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './view/Layout/pages-layout/pages-layout.component';
import { ForgotPasswordBoxedComponent } from './view/DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './view/DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './view/DemoPages/UserPages/register-boxed/register-boxed.component';

import { ChartjsComponent } from './view/DemoPages/Charts/chartjs/chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: ChartjsComponent, data: { extraParameter: '' } },
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      { path: 'login', component: LoginBoxedComponent, data: { extraParameter: '' } },
      { path: 'register', component: RegisterBoxedComponent, data: { extraParameter: '' } },
      { path: 'forgot-password', component: ForgotPasswordBoxedComponent, data: { extraParameter: '' } },
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
