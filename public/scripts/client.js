/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
  

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

  }
  
// creates tweets based on CSS styling 
  const createTweetElement = function(tweet) {
    let $tweet = $(` <article class="tweet">
    <header>
    <p class="bulb"><i class="fa-solid fa-lightbulb"></i></i> ${tweetData.user.name}</p>
    <p class="username">${tweetData.user.handle}</p>
    </header>
    <div>
      <p><b>${tweetData.content.text}</b></p>
    </div>
    <footer>
      <p>${timeago.format(tweetData.created_at)}</p>
      <p class="icons"><i class="fa-solid fa-font-awesome"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></i></p>
    </footer> `)
    return $tweet;
}


renderTweets(data);


// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.dummy-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.;
