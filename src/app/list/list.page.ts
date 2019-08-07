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

  private asanas = [
    'uttanapadasan',
    'meditation',
  ];
  private images = [
    'http://4.bp.blogspot.com/-PKDm2cPUAug/U8ubRAdmdAI/AAAAAAAAAJs/xCoaRhWvqnw/s1600/Uttanapadasana+(The+Raised+Leg+Pose).png',
    'http://4.bp.blogspot.com/-PKDm2cPUAug/U8ubRAdmdAI/AAAAAAAAAJs/xCoaRhWvqnw/s1600/Uttanapadasana+(The+Raised+Leg+Pose).png',
  ];
  public items: Array<{ title: string; asanaImg: string;}> = [];
  constructor(private http: HttpClient,
    private asanaService: AsanaService, private router: Router) {
    for (let i = 0; i < this.asanas.length; i++) {
      this.items.push({
        title: this.asanas[i],
        asanaImg: this.images[i]
      });
    }
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

  sendInfoToService(asanaData) {
    this.asanaService.setAsanaInformation(asanaData);
    this.router.navigate(['asana-defination', asanaData.title]); 
  }
}
