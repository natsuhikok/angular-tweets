import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TagsComponent } from './pages/tags.component';
import { UsersComponent } from './pages/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/tags', pathMatch: 'full' },
  { path: 'tags', component: TagsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}