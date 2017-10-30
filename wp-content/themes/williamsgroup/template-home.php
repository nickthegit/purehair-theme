<?php /* Template Name: Home Template */ ?>

<?php include("header.php"); ?>

<section class="home-window">
    <picture>
        <source srcset="<?php the_field( 'home_hero_desktop' ); ?>" media="(min-width: 1025px)">
        <source srcset="<?php the_field( 'home_hero_tablet' ); ?>" media="(min-width: 768px)">
        <source srcset="<?php the_field( 'home_hero_mobile' ); ?>" media="(max-width: 767px)">
        <img class="fade-in-up-effect" src="<?php the_field( 'home_hero_desktop' ); ?>" align="bottom" alt="">
    </picture>
    <section class="mission-statement typo-center pal dark-gradient valign-no-height">
        <div class="mission-copy valign-inner">
            <h1 class="typo-uppercase"><?php the_field( 'home_mission_statement_header_one' ); ?></h1>
            <h2><?php the_field( 'home_mission_statement_header_two' ); ?></h2>
        </div>
    </section>
</section>

<main> <!-- main content start -->

    <section class="overview-section grid"> <!-- overview start -->

        <div class="overview-copy unit size1of2 tablet1of1 mini1of1 mobile1of1 paxl">
<!--             <h4>h4 title of subjet content (maybe an icon at th start</h4>
            </br> -->
            <h3><?php the_field( 'home_overview_title' ); ?></h3>
            </br>
            <p><?php the_field( 'home_overview_text' ); ?></p>
            </br>
            <a href="<?php the_field( 'home_overview_button_link' ); ?>"><button class="button-alt"><?php the_field( 'home_overview_button_text' ); ?></button></a>

        </div>

        <div class="overview-img-wrap unit size1of2 tablet1of1 mini1of1 mobile1of1 animated fadeIn">
            <picture>
                <source srcset="<?php the_field( 'home_overview_desktop' ); ?>" media="(min-width: 1025px)">
                <source srcset="<?php the_field( 'home_overview_tablet' ); ?>" media="(min-width: 768px)">
                <source srcset="<?php the_field( 'home_overview_mobile' ); ?>" media="(max-width: 767px)">
                <img class="fade-in-up-effect" src="<?php the_field( 'home_overview_desktop' ); ?>" alt="">
            </picture>
        </div>

    </section> <!-- overview END -->

    <section class="review-section grid pal"> <!-- review start -->

        <div class="unit size1of1 review-title pal">
            <h4>What our clients are saying about us...</h4>
        </div>

        <div class="unit size1of2 mini1of1 mobile1of1 review-review phl pbl">
            <h3 id="review_text_1"></h3>
        </div>

        <div class="unit size1of2 mini1of1 mobile1of1 review-review-2 review-review-hidden phl pbl">
            <h3 id="review_text_2"></h3>
        </div>

    </section> <!-- review END -->

    <section class="image-section grid"> <!-- image start -->
        <picture>
                <source srcset="<?php the_field( 'home_image_desktop' ); ?>" media="(min-width: 1025px)">
                <source srcset="<?php the_field( 'home_image_tablet' ); ?>" media="(min-width: 768px)">
                <source srcset="<?php the_field( 'home_image_mobile' ); ?>" media="(max-width: 767px)">
                <img class="fade-in-up-effect" class="" src="<?php the_field( 'home_image_desktop' ); ?>" alt="">
        </picture>
    </section> <!-- image END -->

    <section class="news-offers-section grid"> <!-- news & offers start -->

        <div class="unit size1of2 mini1of1 mobile1of1 news-wrap">
            <?php
                $args = array( 'posts_per_page' => 1, 'category' => 2 );
                $lastposts = get_posts( $args );
                foreach ( $lastposts as $post ) :
                setup_postdata( $post ); ?>

                <a href="<?php the_permalink(); ?>">

                    <div class="news-copy paxl">

                        <h4>What we are loving this month at <?php echo bloginfo( 'name' ); ?></h4>
                        </br>
                        <h3><?php the_title(); ?></h3>
                        </br>
                        <p><?php the_excerpt(); ?></p>

                    </div>

                    <picture class="fade-in-up-effect">
                        <?php echo get_the_post_thumbnail( $post_id );?>
                    </picture>

                </a>

            <?php endforeach;
            wp_reset_postdata(); ?>
        </div>


        <div class="unit size1of2 mini1of1 mobile1of1 offers-wrap">
            <?php
                $args = array( 'posts_per_page' => 1, 'category' => 3 );
                $lastposts = get_posts( $args );
                foreach ( $lastposts as $post ) :
                setup_postdata( $post ); ?>

                <a href="<?php the_permalink(); ?>">

                    <div class="offers-copy paxl">

                        <h4>Discover our latest offers</h4>
                        </br>
                        <h3><?php the_title(); ?></h3>
                        </br>
                        <p><?php the_excerpt(); ?></p>

                    </div>

                    <picture class="fade-in-up-effect">
                        <?php echo get_the_post_thumbnail( $post_id );?>
                    </picture>

            </a>

            <?php endforeach;
            wp_reset_postdata(); ?>
        </div>

    <!-- </section> <!-- news & offers END -->

    <!-- <section class="brands-section grid typo-center paxl"> <!-- brands start -->

    <!-- </section> <!-- brands END -->

    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->


<span id="home-page" style="display: none" />


<?php include("footer.php"); ?> <!-- Footer -->
