import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { AppService } from '../../services/app.service'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './app.profile.html'
})
export class ProfileComponent implements OnInit {
    url: string = "http://test.kluatr.ru/api";
    id: number;
    name: string;
    email: string;
 
    constructor(private router: Router, private http: Http, private activateRoute: ActivatedRoute, private appService: AppService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.http.get(this.url + "/user/profile", { withCredentials: true }).subscribe(
        response => {
            this.name = response.json().data.name;
            this.email = response.json().data.email;
            },
        err => {
            console.log(err);
            }
        );
    }
    
    toOrders() {
        this.appService.toOrders(this.id);
    }
    
    logout() {
        this.appService.logout();
    }

    toEditProfile() {
        this.router.navigate(["profile-edit", this.id]);
    }
}
