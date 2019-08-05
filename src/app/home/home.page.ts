import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  constructor(private http: HttpClient) {
    this.getConfig();
  }

  getConfig() {
    this.data = this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
