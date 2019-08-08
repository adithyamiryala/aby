import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Asanas',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Pranayamam',
      url: '/pranayamam',
      icon: 'pranayamam'
    },
    {
      title: 'Meditation',
      url: '/meditation',
      icon: 'meditation'
    },
    {
      title: 'Surya Namaskar',
      url: '/surya-namaskar',
      icon: 'surya-namaskar'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
