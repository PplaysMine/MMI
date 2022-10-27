import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { PaymentsViewComponent } from './views/payments-view/payments-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';

const routes: Routes = [
  { path: 'home', component: MainViewComponent },
  { path: 'settings', component: SettingsViewComponent },
  { path: 'payments', component: PaymentsViewComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
