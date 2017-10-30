<?php /* Template Name: Salons Template */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <?php include("window.php"); ?> <!-- inner page window -->

    <div class="container pal">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
            the_content();
            endwhile; else: ?>
            <p>Sorry, no posts matched your criteria.</p>
            <?php endif; ?>
    </div>

    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->


<span id="salons-page" style="display: none" />

<?php include("footer.php"); ?> <!-- Footer -->
