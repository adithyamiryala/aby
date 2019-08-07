import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsanaDefination } from './asana-defination.model';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { HttpClient } from '@angular/common/http';
import { AsanaService } from '../list/list.service';

@Component({
  selector: 'app-asana-defination',
  templateUrl: './asana-defination.page.html',
  styleUrls: ['./asana-defination.page.scss']
})
export class AsanaDefinationPage implements OnInit {

  private subscription: any;
  asanaDefination: AsanaDefination;
  

  constructor(
    private route: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private http: HttpClient,
    private asanaService: AsanaService) {
      this.asanaDefination = new AsanaDefination();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.load(params['title']);
    });
  }

  load (title) {
    this.asanaDefination = this.asanaService.getAsanaInformation();
  }

  openAsanaVideo(videoId){
    this.youtube.openVideo(videoId);
  }
}
