import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsanaDefination } from './asana-defination.model';

@Component({
  selector: 'app-asana-defination',
  templateUrl: './asana-defination.page.html',
  styleUrls: ['./asana-defination.page.scss'],
})
export class AsanaDefinationPage implements OnInit {

  private subscription: any;
  asanaDefination: AsanaDefination;

  constructor(
    private route: ActivatedRoute
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
}
