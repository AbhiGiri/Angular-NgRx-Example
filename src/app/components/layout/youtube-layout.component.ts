import { Component } from "@angular/core";

@Component({
  selector: 'app-youtube-layout',
  template: `
            <app-header></app-header>
            <router-outlet></router-outlet>
  `,
  styles: [``]
})

export class YoutubeLayoutCompoment {

  constructor() {}
}
