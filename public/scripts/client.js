/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


// to protect app from script attacks
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//function to loop through array of objects and envoke create tweets
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('.dummy-tweets').empty();
  
  for (let tweet of tweets){
    $('.dummy-tweets').prepend(createTweetElement(tweet));
  }
}


// creates tweets based on CSS styling 
const createTweetElement = function(tweet) {
  let $tweet = $(` <article class="tweet">
  <header>
  <p><img class="bulb" src="${escape(tweet.user.avatars)}" alt="icon picture"> <span class="name">${escape(tweet.user.name)}<span></p>
  <p class="username">${escape(tweet.user.handle)}</p>
  </header>
  <div class="text-container">
  <p><b>${escape(tweet.content.text)}</b></p>
  </div>
    <footer>
    <p>${escape(timeago.format(tweet.created_at))}</p>
      <p class="icons"><i class="fa-solid fa-font-awesome"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i></i></p>
      </footer> `)
    return $tweet;
  }

  
  
  // ajax get request. grab json data from "database" and feed them to renderTweets
  const loadTweets = function() {
  
    $.ajax({ 
      method: "GET",
      url: '/tweets',
      dataType: 'JSON' })
      .then(res => { 
      renderTweets(res) 
      $('.text-area').val('');
      $('.counter').val('140');

    })
      .catch(err => {
      console.log('err', err)
    })
  
  }
  //form validation with error messages // parses data from textarea and uses a ajax post request to pass data to loadTweets 
  const postingTweets = function () {

    const $form =  $(".tweetSubmit")
      $form.submit(function( event ) {
    
      event.preventDefault();//stops post from happening 
      $('.error').slideUp().text();
      const input = $("textarea").val();
      
      if (!input){
        $('.error').text(`⛔️ Invalid request: Please enter some text to compose a tweet! ⛔️`).slideDown();
        return;
      }

      if (input.length <= 0 || input === null){
        $('.error').text(`⛔️ Invalid request: Please enter some text to compose a tweet! ⛔️`).slideDown();
        return;
      }

      if (input.length > 140){
        $('.error').text(`⛔️ Invalid request: 140 character limit exceeded. ⛔️`).slideDown(400);
        return;
      }

      let text = $( this ).serialize();
  
      $.ajax({
        method: "POST",
        url: '/tweets',
        data: text
      }).then(data => {
     
        loadTweets();
      
      })
        .catch(err => {
        console.log('err', err)
      })
      
      
    });

  }


 //event listener for scroll // fades in a arrow that when clicked takes user to top of page  
const scollToTop = function() {


  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
  });
  
  $("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });


}

  $(document).ready(function() {

    loadTweets();
    postingTweets();
    scollToTop();
    
  
      
  });
   


