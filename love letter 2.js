$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var musicScreen = $("#music-screen");
  var loveLetterContent = $("#love-letter-content");
  var backgroundMusic = $("#background-music")[0];
  var playMusicBtn = $("#play-music");
  var nextLetterBtn = $("#next-letter");
  var currentLetter = 0;
  
  // Love letters array
  var loveLetters = [
    {
      line2: "Dear crush, you are so beautiful",
      line3: "That every time i see you",
      line4: "my world stops,",
      line5: "Love, Your Secret Admirer ❤️"
    },
    {
      line2: "Every morning I wake up",
      line3: "thinking about your smile",
      line4: "You light up my entire world",
      line5: "Forever yours ✨"
    },
    {
      line2: "Your laugh is my favorite song",
      line3: "Your eyes are like stars",
      line4: "I could get lost in them forever",
      line5: "With all my love 💫"
    },
    {
      line2: "If I could give you one thing",
      line3: "It would be the ability to see",
      line4: "yourself through my eyes",
      line5: "You're perfect 🌹"
    },
    {
      line2: "Distance means nothing when",
      line3: "someone means everything",
      line4: "You mean everything to me",
      line5: "Always and forever 💕"
    }
  ];


  // Handle play music button
  playMusicBtn.click(function() {
    backgroundMusic.play().then(function() {
      // Music started playing, show love letter
      musicScreen.fadeOut(1000, function() {
        loveLetterContent.show().addClass('show');
      });
    }).catch(function(error) {
      console.log('Audio play failed:', error);
      // Show love letter anyway
      musicScreen.fadeOut(1000, function() {
        loveLetterContent.show().addClass('show');
      });
    });
  });

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });
  
  // Next letter functionality
  nextLetterBtn.click(function() {
    currentLetter = (currentLetter + 1) % loveLetters.length;
    updateLetter();
  });
  
  function updateLetter() {
    var letter = loveLetters[currentLetter];
    var $letterTexts = $(".letter-text");
    var $letterDiv = $(".letter");
    
    // Add changing effect to letter
    $letterDiv.addClass("changing");
    
    // Fade out current text
    $letterTexts.addClass("fade-out");
    
    setTimeout(function() {
      // Update text content
      $(".letter .line2").text(letter.line2);
      $(".letter .line3").text(letter.line3);
      $(".letter .line4").text(letter.line4);
      $(".letter .line5").text(letter.line5);
      
      // Fade in new text
      $letterTexts.removeClass("fade-out").addClass("fade-in");
      
      setTimeout(function() {
        $letterTexts.removeClass("fade-in");
        $letterDiv.removeClass("changing");
      }, 800);
    }, 300);
  }

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
