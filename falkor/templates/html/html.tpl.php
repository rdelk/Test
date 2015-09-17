<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

  <head>
    <title><?php print $head_title; ?></title>

    <?php print $head; ?>
    
    <meta name="description" content="">
    
  	<!-- Import Stylesheets -->
    <?php print $styles; ?>
     
    <!--[if lte IE 8]>

    <![endif]-->

  </head>

  <body class="<?php print $classes; ?>" <?php print $attributes; ?>>
    
    <!--[if lte IE 7]>
      <div class="chromeframe">
        You are using an <strong>outdated</strong> browser.<br/>
        Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
      </div>
    <![endif]-->

    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>
    
  	<!-- Javascript -->
    <?php print $scripts; ?>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>
  </body>

</html>
