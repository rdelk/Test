
<footer class="page__footer">
	<nav>
		<?php 
		$main_menu = menu_tree('main-menu');
		print drupal_render($main_menu);
		?>
	</nav>

  <?php if (!empty($page['footer'])) print render($page['footer']) ?>
</footer>