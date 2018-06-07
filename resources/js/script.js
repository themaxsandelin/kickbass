$(window).load(function(){
	
	$(window).on("touchmove", function(e){
		e.preventDefault();
	});

  var sounds = {
    'hihat': new Howl({urls: ['resources/audio/hi-hat.wav']}),
    'crash': new Howl({urls: ['resources/audio/crash.wav']}),
    'ride': new Howl({urls: ['resources/audio/ride.wav']}),
    'snare': new Howl({urls: ['resources/audio/snare.wav']}),
    'tomS': new Howl({urls: ['resources/audio/tom-s.wav']}),
    'tomM': new Howl({urls: ['resources/audio/tom-m.wav']}),
    'tomL': new Howl({urls: ['resources/audio/tom-l.wav']}),
    'kick': new Howl({urls: ['resources/audio/kick.wav']}),
  }

  $(".drum").on({
    tap: function() {
      var sound = $(this).attr('data-drum-sound');
      sounds[sound].play();
    }
  });
		
});