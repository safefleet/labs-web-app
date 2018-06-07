import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../shared/services/auth/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    private email: string = 'adina2@mail.com';
    private password: string = 'pass';

    constructor(public router: Router,
                private auth: AuthService) {}

    ngOnInit() {}

    login() {
        this.auth.login(this.email, this.password).subscribe(
            (response) => {
                console.log('token: ', response.token);
                localStorage.setItem('jwt', response.token);
            },
            (err) => {
                console.log('err: ', err);
            }
        );
    }
}
