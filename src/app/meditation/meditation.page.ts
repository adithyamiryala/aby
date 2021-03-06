import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {

  private meditationJsonURL = "./assets/json/yoga-meditation.json";
  public data: any;

  constructor(private http: HttpClient,
    private youtube: YoutubeVideoPlayer,
    private router: Router) {
      this.getMeditationData();
  }

  ngOnInit() {
  }
  
  getMeditationData() {
    this.http.get(this.meditationJsonURL).subscribe((res) => {
      this.data = res;
    })
  }

  openMeditationVideo(videoId){
    this.youtube.openVideo(videoId);
  }

}
