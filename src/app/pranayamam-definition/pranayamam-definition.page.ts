import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { HttpClient } from '@angular/common/http';
import { PranayamamService } from '../pranayamam/pranayamam.service';

@Component({
  selector: 'app-pranayamam-definition',
  templateUrl: './pranayamam-definition.page.html',
  styleUrls: ['./pranayamam-definition.page.scss'],
})
export class PranayamamDefinitionPage implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private http: HttpClient,
    private pranayamamService: PranayamamService) { }

  ngOnInit() {
    this.data = this.pranayamamService.getPranayamaInformation();
  }

  openPranayamaVideo(videoId) {
    this.youtube.openVideo(videoId);
  }

}
