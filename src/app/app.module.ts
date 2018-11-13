import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TagsComponent } from './pages/tags.component';
import { UsersComponent } from './pages/users.component';
import { AppRoutingModule } from './app-routing.module';
import { TweetService } from './tweet.service';
import { TableComponent } from './table/table.component';
import { TweetsComponent } from './tweets/tweets.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    UsersComponent,
    TableComponent,
    TweetsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
