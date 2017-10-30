<?php /* Template Name: About Template */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <?php include("window.php"); ?> <!-- inner page window -->

    <div class="container-large about pvm">

        <section class="pal mts typo-center">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
            the_content();
            endwhile; else: ?>
            <p>Sorry, no posts matched your criteria.</p>
            <?php endif; ?>
        </section>

    </div>

    <div class="our-story pvm">
        <div class="container-large about">
            <section class="grid pal typo-center">
                <h3><?php the_field( 'team_title' ); ?><div></div></h3>
                <p><?php the_field( 'team_copy' ); ?></p>

                <?php
                    $args = array( 'post_type' => 'staff_bios', 'posts_per_page' => -1,'orderby' => 'date', 'order' => 'ASC' );
                    $lastposts = get_posts( $args );
                    foreach ( $lastposts as $post ) :
                    setup_postdata( $post ); ?>

                        <div class="unit size1of4 tablet1of2 mini1of2 mobile1of1 staff-bio phs">
                            <img class="fade-in-up-effect" src="<?php the_field( 'image' ); ?>">
                            <div class="staff-copy">
                                <div class="staff-copy-wrap">
                                    <h3><?php the_title(); ?></h3>
                                    <h4><?php the_field( 'job_title' ); ?></h4>
                                    <!-- <p><?php the_field( 'bio' ); ?></p> -->
                                </div>
                            </div>
                        </div>

                <?php endforeach;
                wp_reset_postdata(); ?>

            </section>
        </div>
    </div>

    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->

<?php include("footer.php"); ?> <!-- Footer -->
