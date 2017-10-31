
  </div> <!-- content wrapper END -->

    <footer class="grid phxl ptxl pbl typo-center"> <!-- footer start -->

        <div id="footer_image"></div>

        <div id="footer_contact"></div>
        <p class="typo-underline"><a href="/contact/">Opening Times</a></p>

        <div>
            <?php wp_nav_menu( array( 'theme_location' => 'footer-menu' ) ); ?>
        </div>

        <p class="copyright">&copy; <?php echo date('Y'); ?> <?php echo bloginfo( 'name' ); ?>, All rights reservered <?php echo bloginfo( 'name' ); ?> is part of the Williams Salon Group see other Salons <a href="/salons">Here</a>. Created by <a href="http://nickjohn.co.uk">Nick John</a></p>

    </footer> <!-- footer END -->

<!-- JAVASCRIPT -->
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCHELusqRwxcdU39sX-vvzvSahqIaCL30A"></script>
<script src="/wp-content/themes/williamsgroup/assets/js/project.js" type="text/javascript"></script>

 
<!-- GOOGLE ANALYTICS -->
<script>

  var rlUrl = window.location.hostname;
  var analyticsId;

  if ( rlUrl.indexOf('purehairsherborne.co.uk') >= 0){
    var analyticsId = 'UA-80436237-1';
  }
  else if ( rlUrl.indexOf('beautybaryeovil.co.uk') >= 0){
    var analyticsId = 'UA-80436237-2';
  }
  else if ( rlUrl.indexOf('unisexyeovil.co.uk') >= 0){
    var analyticsId = 'UA-80436237-4';
  }
  else if ( rlUrl.indexOf('hairandcare4u.co.uk') >= 0){
    var analyticsId = 'UA-80436237-3';
  }

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', analyticsId, 'auto');
  ga('send', 'pageview');

</script>



<div id="outdated"></div>
</body>

</html>
