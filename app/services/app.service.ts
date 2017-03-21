import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
 
@Injectable()
export class AppService{

    constructor(private router: Router, private http: Http) {  } 

    logout() {
        this.http.get("http://test.kluatr.ru/api/user/logout", { withCredentials: true }).subscribe(
            response => {
                this.router.navigate(["login"]);
            },
            err => {
                console.log(err);
            }
        );
    }

    toProfile(id: number) {
        this.router.navigate(["profile", id]);
    }

    toOrders(id: number) {
        this.router.navigate(["orders", id]);
    }
}