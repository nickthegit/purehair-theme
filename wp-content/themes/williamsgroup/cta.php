              <?php
                $args = array( 'post_type' => 'call_to_action', 'posts_per_page' => 1 );
                $lastposts = get_posts( $args );
                foreach ( $lastposts as $post ) :
                setup_postdata( $post ); ?>

                    <section class="cta-section grid paxl typo-center"> <!-- CTA start -->
                        <h3><?php the_field( 'cta_bold_text' ); ?></h3>
                        <p><?php the_field( 'cta_subtext' ); ?></p>
                        <a href="<?php the_field( 'cta_button_link' ); ?>"><button class="button"><?php the_field( 'cta_button_text' ); ?></button></a>
                    </section> <!-- CTA END -->

            <?php endforeach;
            wp_reset_postdata(); ?>
