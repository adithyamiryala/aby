import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-surya-namaskar',
  templateUrl: './surya-namaskar.page.html',
  styleUrls: ['./surya-namaskar.page.scss'],
})
export class SuryaNamaskarPage implements OnInit {

  private suryaNamaskarJSONURL = "./assets/json/yoga-surya-namaskar.json";
  public data: any;

  constructor(private http: HttpClient,
    private youtube: YoutubeVideoPlayer,
    private router: Router) {
      this.getSuryaNamaskarData();
  }

  ngOnInit() {
  }
  
  getSuryaNamaskarData() {
    this.http.get(this.suryaNamaskarJSONURL).subscribe((res) => {
      this.data = res;
    })
  }

  openSuryaNamaskarVideo(videoId){
    this.youtube.openVideo(videoId);
  }
}
