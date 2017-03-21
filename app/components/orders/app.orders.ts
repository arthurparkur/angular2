import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AppService } from '../../services/app.service'

@Component({
    moduleId: module.id,
    selector: 'orders',
    templateUrl: './app.orders.html'
})
export class OrdersComponent implements OnInit {
    url: string = "http://test.kluatr.ru/api";
    id: number;
    array: Array<Object>;

    constructor(private router: Router, private http: Http,private activateRoute: ActivatedRoute, private appService: AppService) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.http.get(this.url + "/orders", { withCredentials: true }).subscribe(
        response => {
            this.array = response.json().data;
            },
        err => {
            console.log(err);
            }
        );
    }

    toProfile() {
        this.appService.toProfile(this.id);
    }

    logout() {
        this.appService.logout();
    }
}
