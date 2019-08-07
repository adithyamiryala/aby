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
  // providers: [AsanaService]
})
export class AsanaDefinationPage implements OnInit {

  private subscription: any;
  asanaDefination: AsanaDefination;
  private productURL = "./assets/json/yogaAsanas.json";
  public data: any;
  

  constructor(
    private route: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private http: HttpClient,
    private asanaService: AsanaService
  ) {
    this.asanaDefination = new AsanaDefination();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.load(params['title']);
    });
  }

  getProducts() {
    this.http.get(this.productURL).subscribe((res) => {
      this.data = res;
    })
  }

  load (title) {
    this.asanaDefination = this.asanaService.getAsanaInformation();
  /*  if (title == 'uttanapadasan') {
        this.asanaDefination.asanaTitle = "Uttana Padasana",
        this.asanaDefination.definition = "Uttana Padasana is an intense stretch of the legs.",
        this.asanaDefination.procedure = "To enter the pose, lie on the floor backside down and raise the hands over the head. Keeping the feet together tightly at the arches with toes pointed towards the ceiling, life both legs in the air on an inhale, keeping the torso on the floor and allowing the lower back to arch slightly, if needed. The chin should be tucked towrds the neck.",
        this.asanaDefination.benefits = "It enhances the lung capacity and breathing efficiency. Tones the cardio respiratory systems. Improves the functional capacity of digestive organs",
        this.asanaDefination.limitations = "Serious neck injuries and chronic pain and stiffness. Hypertension and cardiovascular diseases. Pregnant women",
        this.asanaDefination.asanaImage = "http://4.bp.blogspot.com/-PKDm2cPUAug/U8ubRAdmdAI/AAAAAAAAAJs/xCoaRhWvqnw/s1600/Uttanapadasana+(The+Raised+Leg+Pose).png",
        this.asanaDefination.asanaVideoId = "2zFOa_N-9Ow"
    }*/
  }

  openAsanaVideo(videoId){
    this.youtube.openVideo(videoId);
  }
}
