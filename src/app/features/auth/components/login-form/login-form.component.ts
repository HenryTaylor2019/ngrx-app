import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
	public loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.loginForm = formBuilder.group({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}

	ngOnInit(): void {}

	onSubmit(form: FormGroup) {}
}
