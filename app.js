// set up initial variables
	var c = document.getElementById("canvasAnimation");
	var ctx = c.getContext("2d");
  console.log(c);
  //alert("test");



new Vue({
  el: '#vue-app',
  data: {
    json: null,
    frame: 0,
    speed: 1/3,

  },
  methods: {
    loadGif: function(){

    },
    clickSlider: function(e){
      //set gif speed to zero, set gif frame to slider point
    },
    gotoFrame: function(){
      //update the displayed frame of the gif
    },
    changeSpeed: function(speed){
      this.speed = speed;
    },
    startStop: function(){
      //animate.style.webkitAnimationPlayState = "paused";
      animate.classList.toggle('paused');
        // $("body").get(0).style.setProperty("--color", "hotpink");
        //TODO: make this work with something similar to above to edit CSS variable
    }
  },


  //called automatically on create, gets our character data from API
  created: function(){

    // var _this = this;
    // $.getJSON('http://localhost/apipath', function (json) {
    //   this.json = json;
    // })
  }

});
