import { Routes } from '@angular/router';
import { HomepageComponent } from '@/features/homepage/homepage.component';
import { LoginComponent } from './features/auth/login/login.component';
import { InventoryComponent } from './features/stock/inventory/inventory.component';
import { AddProductComponent } from './features/stock/add-product/add-product.component';
import { HeaderComponent } from './features/core/header/header.component';
import { SidebarComponent } from './features/core/sidebar/sidebar.component';
import { WelcomepageComponent } from './features/auth/welcomepage/welcomepage.component';
import { RegisterComponentComponent } from './features/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: WelcomepageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'welcome', component: WelcomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponentComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'sidebar', component: SidebarComponent },
  { path: '**', redirectTo: 'homepage' },
];
