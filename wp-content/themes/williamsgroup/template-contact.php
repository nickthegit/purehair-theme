<?php /* Template Name: Contact Template */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <section class="page-window">
        <div class="map-wrap">
            <div id="map"></div>
        </div>

        <div class="window-copy-map typo-center mtm ptm pbl rule-bottom">
            <div class="phl">
                <h1><?php the_title(); ?></h1>
                <h2><?php the_field( 'subtitle' ); ?></h2>
            </div>
        </div>
    </section> <!-- inner page window -->

    <!-- <div class="container"> -->

        <section class="grid pal typo-center contact">

            <div id="contact_details"></div>

        </section>

    <!-- </div> -->

    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->

<span id="contact-page" style="display: none" />

<?php include("footer.php"); ?> <!-- Footer -->
