import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'user-card',
  template: `
    <mat-card style="margin-top: 20px;" fxLayout="column" fxLauoutGap="20px" fxLayoutAlign="start center">
      <mat-card-title>{{user.name}}</mat-card-title>
      <mat-card-content>{{user.email}}</mat-card-content>
    </mat-card>
    `,
  styles: [
    ''
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void { }
}
