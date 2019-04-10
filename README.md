# Simple Lightbox for Ghost Galleries

I was looking for a simple solution to add a lightbox to the standard Ghost gallery, I couldn't find one, so I put together the code below.

The following bit of jQuery and CSS when added to the Code Injection, Post Footer will add a lightbox style function to the post gallery.


# Theme Compatibility

I've tested this with the following free themes:

* Casper Version 2.9.7
* Massively Version 1.0.1

If you have tested it with a premium field and would like me to note it here, please let me know.

# Javascript

```
<script>
  $(function() {
      $( ".kg-gallery-container" ).prepend( "<div id='kg-gallery-zoom' style='display:none;'><img src=''/><div id='kg-gallery-buttons'></div></div>" );
      $( ".kg-gallery-container .kg-gallery-image img" ).each(function(e){
        var thissrc = $(this).attr('src');
        var label = e + 1;
        $( "#kg-gallery-buttons").append('<span class="kg-gallery-btn" data-src="'+thissrc+'">' +label  +'</span>');
      });
      $( ".kg-gallery-btn").click(function(e){
          e.preventDefault();
          $( "#kg-gallery-zoom img").attr('src',$(this).data( "src" ));
      });
      $( ".kg-gallery-image img").click(function(image){
          $( "#kg-gallery-zoom img").attr('src',$(this).attr('src'));
          $( "#kg-gallery-zoom").fadeIn();
          $(".floating-header").fadeOut();
      });
      $( "#kg-gallery-zoom img").click(function(image){
          $( "#kg-gallery-zoom img").attr('src','');
          $( "#kg-gallery-zoom").fadeOut();
          $(".floating-header").fadeIn();
      });
  });
</script>
```

# CSS

```
<style>
#kg-gallery-zoom {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    left:0px;
    overflow: hidden;
    padding:30px;
    position: fixed;
    top:0px;
    width: 100%;
}
#kg-gallery-zoom img {
    cursor: -moz-zoom-out;
    cursor: -webkit-zoom-out;
    cursor: zoom-out;  
    height: auto;
    height:auto;
    left: 50%;
    max-height:80%;
    max-width:80%;
    position: absolute;
    top: 0;
    top: 5%;
    transform: translateX(-50%);
    width:auto;
}
.kg-gallery-image img {
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;  
}
.kg-gallery-btn{
    background-color: #000;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin: 0.25em;
    text-align: center;
    width: 30px;
}
.kg-gallery-btn:active,
.kg-gallery-btn:focus {
    background-color:#ccff00;
}
#kg-gallery-buttons {
    bottom:30px;
    margin-left:auto;
    margin-right:auto;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index:99999;
}
</style>  
```

# Copyright & License

Copyright (c) 2013-2019 Stewart Culshaw - Released under the [MIT license](LICENSE). Ghost and the Ghost Logo are trademarks of Ghost Foundation Ltd.
