import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userLogin';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	userLogin:UserLogin;
	json;

	constructor(private router: Router,private http:HttpClient) { }

	ngOnInit() {

	}

	loginForm = new FormGroup({
		email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
		password: new FormControl('', Validators.required)
	});

	login(): void {
		let postData={
			username: this.loginForm.get('email').value,
			password: this.loginForm.get('password').value
		}
		console.log("Postdata:",postData);
		this.http.post("http://localhost:8080/users",postData).toPromise().then((data:any)=>{
			console.log("Returndata:",data);
			if(data != null){
				window.localStorage.setItem('user',JSON.stringify(data));
				this.router.navigate(['profile/'+data.id]);
			}
		})
	}

	// onSubmit() {
	// 	// TODO: Use EventEmitter with form value
	// 	console.warn(this.loginForm.value);
	// 	console.log("Tibi is gay terrorist");
	// 	this.http.post<any>("localhost:8080/users",
	// 		{
	// 			"username": this.loginForm.get('email').value,
	// 			"password": this.loginForm.get('password').value
	// 		})
	// 		.subscribe(
	// 			data => {
	// 				console.log("POST Request is successful ", data);
	// 				this.router.navigate(['profile']);
	// 			},
	// 			error => {
	// 				console.log("Error", error);
	// 			}
	// 		);
	// }
	// user: User = {
	// 	id: "1",
	// 	first_name:"Ion",
	// 	last_name:"Popescu",
	// 	email:"ion.popescu@cleversrl.ro",
	// 	password:"parola123",
	// 	supervisor_id:"2",
	// 	phone:"0712345678",
	// 	role:"developer",
	// 	date: "2018-10-11 ",
	// 	consulting_level:"Junior Consultant",
	// 	region: "aaa",
	// 	photo: ""
};