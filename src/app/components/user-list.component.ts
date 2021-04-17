import { Component, Input, OnInit } from '@angular/core';
import { User } from "../models/user";

@Component({
    selector: 'user-list',
    template: `
      <div fxLayout="row wrap" fxLayoutGap="30px" fxLayoutAlign="start center">
        <user-card [user]="user" *ngFor="let user of users"></user-card>
      </div>
    `,
    styles: ['']
})
export class UserListComponent implements OnInit {
    @Input() users: User[];
    constructor() { }

    ngOnInit(): void { }
}
