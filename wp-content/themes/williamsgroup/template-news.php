<?php /* Template Name: News Template */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <?php include("window.php"); ?> <!-- inner page window -->

    <div class="container-large">

    <section class="grid news-item-wrap">

        <?php
            $args = array( 'posts_per_page' => -1 );
            $lastposts = get_posts( $args );
            foreach ( $lastposts as $post ) :
            setup_postdata( $post ); ?>

            <figure class="effect-jazz unit size1of4 tablet1of2 mini1of2 mobile1of1 typo-center fade-in-up-effect">
                <picture>
                <!--     <?php echo get_the_post_thumbnail( $post_id, 'medium' );?> -->
                <img src="<?php the_field( 'news_thumb' ); ?>">
                </picture>
                <figcaption>
                    <h2><?php the_title(); ?></h2>
                    <p><?php the_excerpt(); ?></p>
                    <a href="<?php the_permalink(); ?>">View more</a>
                </figcaption>
            </figure>

        <?php endforeach;
        wp_reset_postdata(); ?>

    </section>

    </div>

    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->

<?php include("footer.php"); ?> <!-- Footer -->
