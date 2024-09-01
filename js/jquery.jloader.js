<script type="text/javascript" src="jquery-1.10.2.js"></script>


(function($) {  

  $.jLoader = {
  defaults: {
    imgDir: "images/",
    imgContainer: "",
    imgTotal: 8,
    imgFormat: ".jpg",
    simpleFileNames: true
  }
};

$.fn.extend({  
  jLoader:function(config, fileNames) {  
              
    var config = $.extend({}, $.jLoader.defaults, config);  
  
    config.imgContainer = this.attr("id");      
  
    (config.simpleFileNames == true) ? simpleLoad(config) : complexLoad(config, fileNames) ;  
  
    return this;  
  }  
});  

   
})(jQuery);