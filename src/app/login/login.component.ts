import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
		
	}

	loginForm= new FormGroup({
		email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
		password:new FormControl('',Validators.required)
	});

	login() : void {
		if(this.loginForm.get('email').value == 'admin@clever.com' && this.loginForm.get('password').value == 'admin'){
			console.warn(this.loginForm.value);
			alert("Nice");
		 //this.router.navigate(["user"]);
		}else {
			console.warn(this.loginForm.value);
		  	alert("Invalid credentials");
		}
	}

	// this.httpClient.post("localhost:8080/users",
    // {
    //     "username":  this.loginForm.get('email').value,
    //     "password":  this.loginForm.get('password').value
    // })
    // .subscribe(
	// 	data  => {
	// 		console.log("POST Request is successful ", data);
	// 		},
	// 		error  => {
	// 		console.log("Error", error);
	// 	}
	// );

	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.loginForm.value);
	  }
	// updateName() {
	// 	this.userdata.setValue('Gigel');
	//   }

	user: User = {
		id:1,
		first_name:"Ion",
		last_name:"Popescu",
		region:"Cluj",
		email:"ion.popescu@cleversrl.ro",
		password:"parola123",
		supervisor_id:"2",
		phone:"0712345678",
		role:"developer",
		date:new Date(2018,10,11),
		consulting_level:"Junior Consultant"
	};
	

}
