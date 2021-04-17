import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCompoment } from "./components/layout/dashboard.component";
import { PostComponent } from './containers/post/post.component';
import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [
  {
    path: '', component: DashboardCompoment,
    children: [
      { path: '', component: UsersComponent },
      { path: 'post', component: PostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
