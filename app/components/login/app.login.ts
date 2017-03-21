import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './app.login.html'
})
export class LoginComponent {
    url: string = "http://test.kluatr.ru/api/user";
    email: string;
    password: string;
    constructor(private http: Http,
        private router: Router) { }

    auth() {
        this.http.post(this.url + "/login", {
            email: this.email,
            password: this.password
        },
            { withCredentials: true }).subscribe(
            response => {
                let id: number = response.json().data.userId;
                this.router.navigate(["profile", id]);
            },
            err => {
                console.log(err);
            }
            );
    }
}
