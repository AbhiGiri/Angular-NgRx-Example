import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  template: ` <mat-toolbar color="primary" style="height: 85px; padding: 0 16px;">
                <div fxLayoutAlign="start center" fxFlex="100%" fxHide.xs>
                  <button mat-button routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{excat: true}">User</button>
                  <button mat-button routerLink="post" routerLinkActive="active" >Post</button>
                </div>
              </mat-toolbar>
  `,
  styles: [`
    .selected{
      background-color: black;
    }
    `]
})

export class HeaderCompoment {

  constructor() {}
}
