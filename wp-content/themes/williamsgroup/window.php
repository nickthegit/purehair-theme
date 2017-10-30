    <section class="page-window">
        <div class="padding-hack">
            <div class="fade-in-up-effect"><?php the_post_thumbnail( 'full' ); ?></div>
        </div>

        <div class="window-copy typo-center mtm ptm pbl rule-bottom">
            <div class="phl">
                <h1><?php the_title(); ?></h1>
                <h2><?php the_field( 'subtitle' ); ?></h2>
            </div>
        </div>
    </section>
