import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main/app.main';
import { LoginComponent } from './components/login/app.login';
import { OrdersComponent } from './components/orders/app.orders';
import { ProfileComponent } from './components/profile/app.profile';
import { ProfileEditComponent } from './components/profile-edit/app.profile.edit';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AppService } from './services/app.service';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'orders/:id', component: OrdersComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'profile-edit/:id', component: ProfileEditComponent},
    {path: '**', component: LoginComponent}
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), Ng2PaginationModule],
    declarations: [MainComponent, LoginComponent, OrdersComponent, ProfileComponent, ProfileEditComponent],
    providers: [AppService],
    bootstrap: [MainComponent]
})
export class AppModule {
    
}