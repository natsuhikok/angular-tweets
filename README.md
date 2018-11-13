## Project description
This app have a user search screen and a hashtag search screen, both screens display a list of Tweets. The Tweets data is fetched from an API[https://am-twitter-scrape.herokuapp.com/]( https://am-twitter-scrape.herokuapp.com/).

Both screen has features below:
* an input filed to input search term
* table to display search results
* navigation to switch views between user screen and hashtag screen
* message to show status: error and loading
* pagination if the search result has more than 10 tweets

the contents in tweets data table are below:
* tweet content
* number of likes, replies, and retweets
* two of hashtags if the tweet has more than two hashtags
* date

The search term for the user search screen should be single user name. The term for the hashtag search screen should be single hashtag. Matching method is both Exact match.

live demo: 

## Language
Angular 5

## Install

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4. Make sure to install `@angular/cli@1` as Angular CLI was version 1.7 for Angular 5.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `num run build` to build the project for a production. The build artifacts will be stored in the `dist/` directory.

## documentation for Angular 5

(Angular 5 Documentation)[https://devdocs.io/angular~5/]