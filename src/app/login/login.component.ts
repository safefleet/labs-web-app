import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    private email: string;
    private password: string;
    private errorMessage;

    constructor(public router: Router,
                private auth: AuthService) {}

    ngOnInit() {}

    login() {
        this.auth.login(this.email, this.password).subscribe(
            (response) => {
                localStorage.setItem('jwt', response.token);
                this.router.navigate(['/vehicles']);
            },
            (err) => {
                console.log('err: ', err);
                this.errorMessage = 'Authentication failed!';
            }
        );
    }
}
