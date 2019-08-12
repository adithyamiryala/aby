import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  private aboutUsJsonURL = "./assets/json/yoga-about-us.json";
  public data: any;

  constructor(private http: HttpClient,
    private youtube: YoutubeVideoPlayer,
    private router: Router) {
      this.getAboutUsData();
  }

  ngOnInit() {
  }
  
  getAboutUsData() {
    this.http.get(this.aboutUsJsonURL).subscribe((res) => {
      this.data = res;
    })
  }

}
