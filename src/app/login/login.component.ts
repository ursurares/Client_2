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
		console.log(postData);
		// this.userLogin.username=this.loginForm.get('email').value;
		// this.userLogin.password=this.loginForm.get('password').value;
		this.http.post("http://localhost:8080/users",postData).toPromise().then((data:any)=>{
			console.log(data);
			this.json=JSON.stringify(data.json);
		})
		// if (this.loginForm.get('email').value == 'admin@clever.com' && this.loginForm.get('password').value == 'admin') {
		// 	console.warn(this.loginForm.value);
		// 	alert("Nice");
		// 	//this.router.navigate(["user"]);
		// } else {
		// 	console.warn(this.loginForm.value);
		// 	alert("Invalid credentials");
		// }
	}



	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.loginForm.value);
		this.http.post<any>("localhost:8080/users",
			{
				"username": this.loginForm.get('email').value,
				"password": this.loginForm.get('password').value
			})
			.subscribe(
				data => {
					console.log("POST Request is successful ", data);
					this.router.navigate(['profile']);
				},
				error => {
					console.log("Error", error);
				}
			);
	}
	// updateName() {
	// 	this.userdata.setValue('Gigel');
	//   }

	user: User = {
		id: 1,
		first_name: "Ion",
		last_name: "Popescu",
		region: "Cluj",
		email: "ion.popescu@cleversrl.ro",
		password: "parola123",
		supervisor_id: "2",
		phone: "0712345678",
		role: "developer",
		date: new Date(2018, 10, 11),
		consulting_level: "Junior Consultant"
	};


}
