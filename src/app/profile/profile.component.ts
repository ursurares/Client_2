import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  image: string;

  user: User = new User();

  url: string = "assets/user.png";
  id: string;
  first_name: string;
  last_name: string;
  region: string;
  email: string;
  password: string;
  supervisor_id: string;
  phone: string;
  role: string;
  date: string;
  consulting_level: string;

  constructor(private service: UserService, public router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log("LocalStorage:",window.localStorage.getItem('user'));
    console.log("This.user",this.user);
    if(this.user){
      this.setFormInfo(this.user.first_name, this.user.last_name, this.user.region, this.user.email, this.user.password, this.user.supervisor_id, this.user.phone, this.user.role, this.user.date, this.user.consulting_level, this.user.photo);
    }
    // this.service.getUser().subscribe(data=> {
    //   console.log("o intrat")
    //   this.user = data;
    //   if(this.user) {
    //      this.setFormInfo(this.user.first_name, this.user.last_name, this.user.region, this.user.email, this.user.password, this.user.supervisor_id, this.user.phone, this.user.role, this.user.date, this.user.consulting_level, this.user.photo);
    //    }
    // });

  }

  setFormInfo(fn, ln, reg, email, passw, superv, phone, role, date, consult, photo) {
    console.log("init");
    console.log(photo);
    this.first_name = fn;
    this.last_name = ln;
    this.region = reg;
    this.email = email;
    this.password = passw;
    this.supervisor_id = superv;
    this.phone = phone;
    this.role = role;
    this.date = date;
    this.consulting_level = consult;
    if(photo !== null){
      this.url = photo;
      this.image = photo;
    } else {
      this.url ="assets/user.png";
    }
  }

  onFileSelected(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.onload = this._handleReaderLoaded.bind(this);
  
      reader.readAsDataURL(file);
    }
  }


  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.url= binaryString;
    this.image = binaryString;
  }

  saveProfile() : void {
    let user : User = new User();
    user.first_name = this.first_name;
    user.last_name = this.last_name;
    user.region = this.region;
    user.email = this.email;
    user.password = this.password;
    user.supervisor_id = this.supervisor_id;
    user.phone = this.phone;
    user.role = this.role;
    user.date = this.date;
    user.consulting_level = this.consulting_level;
    user.id = this.id;
    user.photo = this.image;
    console.log("photo edit");
    console.log(user.photo);
    this.service.saveProfile(user).subscribe();
  }

}





