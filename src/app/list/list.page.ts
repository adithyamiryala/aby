import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AsanaService } from './list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  // providers: [AsanaService]
})
export class ListPage implements OnInit {
  private productURL = "./assets/json/yogaAsanas.json";
  public data: any;
  public asanaData: Array<{title: string, definition: string, procedure: Array<string>, 
    benefits: Array<string>, limitations: Array<string>, 
    image: string, videoId: string}>;

  constructor(private http: HttpClient,
    private asanaService: AsanaService, 
    private router: Router) {
      this.getProducts();
  }

  ngOnInit() {
  }
  
  getProducts() {
    this.http.get(this.productURL).subscribe((res) => {
      this.data = res;
      this.asanaData= this.data;
    })
  }

  sendInfoToAsanaService(asanaData) {
    this.asanaService.setAsanaInformation(asanaData);
    this.router.navigate(['asana-defination', asanaData.title]); 
  }
}
