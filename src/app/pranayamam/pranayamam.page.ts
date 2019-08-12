import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { PranayamamService } from './pranayamam.service';

@Component({
  selector: 'app-pranayamam',
  templateUrl: './pranayamam.page.html',
  styleUrls: ['./pranayamam.page.scss'],
})
export class PranayamamPage implements OnInit {

  private pranayamaJsonURL = "./assets/json/yoga-pranayama.json";
  public data: any;

  constructor(private http: HttpClient,
    private youtube: YoutubeVideoPlayer,
    private pranayamaService: PranayamamService,
    private router: Router) {
      this.getSuryaNamaskarData();
  }

  ngOnInit() {
  }
  
  getSuryaNamaskarData() {
    this.http.get(this.pranayamaJsonURL).subscribe((res) => {
      this.data = res;
    })
  }

  sendInfoToPranayamaService(pranayamaData) {
    this.pranayamaService.setPranayamaInformation(pranayamaData);
    this.router.navigate(['pranayamam-definition']); 
  }
}
