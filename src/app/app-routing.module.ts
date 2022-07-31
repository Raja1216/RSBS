import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './features/account/account.component';
import { AccountDetailsComponent } from './features/account-details/account-details.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/details', component: AccountDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
