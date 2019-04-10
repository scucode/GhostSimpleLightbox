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
