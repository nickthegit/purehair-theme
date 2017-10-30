<?php include("header.php"); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<main>

    	<?php include("window.php"); ?> <!-- inner page window -->

	    <div class="post-content-wrap container pal">

	    	<div class="post-title">
	    		<!-- <h1><?php single_post_title(); ?></h1> -->
	    		<h3><?php echo get_the_date(); ?></h3>
	    	</div>
			<div class="post-body">
	    		<p><?php the_content(); ?></p>
	    	</div>



	    </div>


		    <?php include("cta.php"); ?> <!-- CTA -->

	</main> <!-- main content END -->

<?php include("footer.php"); ?> <!-- Footer -->

<?php endwhile; else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
