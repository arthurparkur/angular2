import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service'

@Component({
    moduleId: module.id,
    selector: 'profile-edit',
    templateUrl: './app.profile.edit.html'
})
export class ProfileEditComponent {
    url: string = "http://test.kluatr.ru/api/user";
    name: string;
    id: number;

    constructor(private http: Http, private activateRoute: ActivatedRoute, private appService: AppService,
        private router: Router) {
        this.id = activateRoute.snapshot.params['id'];
    }

    toProfile() {
        this.appService.toProfile(this.id);
    }

    toOrders() {
        this.appService.toOrders(this.id);
    }

    logout() {
        this.appService.logout();
    }

    saveChanges() {
        this.http.post(this.url + "/profile/edit", {
            name: this.name
        }, { withCredentials: true }).subscribe(
            response => {
                this.router.navigate(["profile", this.id]);
            },
            err => {
                console.log(err);
            }
            );
    }
}
