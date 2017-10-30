<?php /* Template Name: Prices Template alt */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <?php include("window.php"); ?> <!-- inner page window -->

    <section class="price-content-wrap">

        <div class="container pbxl mtl">

            <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
            the_content();
            endwhile; else: ?>
            <p>Sorry, no posts matched your criteria.</p>
            <?php endif; ?>

        </div>

    </section>


    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->

<?php include("footer.php"); ?> <!-- Footer -->
