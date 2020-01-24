import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Clever SRL';
  postId;

  constructor(private http: HttpClient) { }

  ngOnInit() {      
    // Simple POST request with a JSON body and response type <any>
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
    })
}

}

