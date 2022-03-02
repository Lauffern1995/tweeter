/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//function to loop through array of objects and envoke create tweets
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets){
    $('.dummy-tweets').prepend(createTweetElement(tweet));
  }
}
// creates tweets based on CSS styling 

  const createTweetElement = function(tweet) {
    let $tweet = $(` <article class="tweet">
    <header>
    <p><img class="bulb" src="${tweet.user.avatars}" alt="icon picture"> <span class="name">${tweet.user.name}<span></p>
    <p class="username">${tweet.user.handle}</p>
    </header>
    <div>
    <p><b>${tweet.content.text}</b></p>
    </div>
    <footer>
    <p>${timeago.format(tweet.created_at)}</p>
      <p class="icons"><i class="fa-solid fa-font-awesome"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></i></p>
    </footer> `)
    return $tweet;
}




$(document).ready(function() {


  //created custom post request based on serialized form submission
  const $form =  $(".tweetSubmit")
  $form.submit(function( event ) {
    event.preventDefault();//stops post from happening 
    let text = $( this ).serialize();
    
    
    $.ajax({
      method: "POST",
      url: '/tweets',
      data: text
    }).catch(err => {
      console.log('err', err)
    })
 
  });



const loadTweets = function() {

  $.ajax({ 
    method: "GET",
    url: '/tweets',
    dataType: 'JSON' })
    .then(res => { 
    renderTweets(res) 
  })
    .catch(err => {
    console.log('err', err)
  })

}



loadTweets();

  
});

