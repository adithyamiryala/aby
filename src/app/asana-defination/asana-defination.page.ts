import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsanaDefination } from './asana-defination.model';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-asana-defination',
  templateUrl: './asana-defination.page.html',
  styleUrls: ['./asana-defination.page.scss'],
})
export class AsanaDefinationPage implements OnInit {

  private subscription: any;
  asanaDefination: AsanaDefination;

  constructor(
    private route: ActivatedRoute,
    private youtube: YoutubeVideoPlayer
  ) {
    this.asanaDefination = new AsanaDefination();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.load(params['title']);
    });
  }
  load (title) {
    if (title == 'meditation') {
        this.asanaDefination.asanaTitle = "meditation",
        this.asanaDefination.definition = "Meditation is very good for health",
        this.asanaDefination.advantages = "It will help you in "
    }
  }

  openMyVideo(){
    this.youtube.openVideo("2zFOa_N-9Ow");
  }
}
