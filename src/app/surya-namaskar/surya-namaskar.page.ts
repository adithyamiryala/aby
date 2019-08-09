import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-surya-namaskar',
  templateUrl: './surya-namaskar.page.html',
  styleUrls: ['./surya-namaskar.page.scss'],
})
export class SuryaNamaskarPage implements OnInit {

  private suryaNamaskarJSONURL = "./assets/json/yoga-surya-namaskar.json";
  public data: any;
  // public suryaNamaskarData: Array<{title: string, procedure: string, mantras: Array<string>,
  //  mantraCaption: Array<string>, images: Array<String>,
  //  benefits: Array<string>, limitations: Array<string>, videoImage: string, videoId: string}>;

  constructor(private http: HttpClient,
    private router: Router) {
      this.getSuryaNamaskarData();
  }

  ngOnInit() {
  }
  
  getSuryaNamaskarData() {
    this.http.get(this.suryaNamaskarJSONURL).subscribe((res) => {
      this.data = res;
      // this.suryaNamaskarData= this.data;
    })
  }

}
