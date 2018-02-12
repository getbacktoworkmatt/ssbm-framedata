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
    }
  },

  //called automatically on create, gets our character data from API
  created: function(){
    var _this = this;
    $.getJSON('http://localhost/apipath', function (json) {
      this.json = json;
    })
  }

});
