import { Routes } from '@angular/router';
import { RequestFormComponent } from './requests/components/request-form/request-form';
import { RequestTableComponent } from './requests/components/request-table/request-table';

export const routes: Routes = [
  { path: 'form', component: RequestFormComponent },
  { path: 'requests', component: RequestTableComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
