import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './language/language.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';

const routes: Routes = [
  {path:'header',component: HeaderComponent},
  {path:'footer',component: FooterComponent},
  {path:'list-property',component: ListPropertyComponent},
  {path:'register',component: RegisterComponent},
  {path:'signin',component: SigninComponent},
  {path:'currency',component: CurrencyComponent},
  {path:'customer-service',component: CustomerServiceComponent},
  {path:'language',component: LanguageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
