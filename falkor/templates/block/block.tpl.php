<section id="<?php print $block_html_id; ?>" class="cf <?php print $classes; ?>"<?php print $attributes; ?>>

  <header>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
      <h1<?php print $title_attributes; ?>><?php print $title; ?></h1>
    <?php endif;?>
    <?php print render($title_suffix); ?>
  </header>

	<?php if( $content ) { ?>
  <div <?php print $content_attributes; ?>>
    <?php print $content ?>
  </div>
  <?php } ?>
  
</section>
