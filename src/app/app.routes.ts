import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { WrestlerListComponent } from './components/wrestler-list/wrestler-list';

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  { path: "dashboard", component: Dashboard },
  { path: "wrestlers", component: WrestlerListComponent }
];
