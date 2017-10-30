<?php /* Template Name: Prices Template */ ?>

<?php include("header.php"); ?>

<main> <!-- main content start -->

    <?php include("window.php"); ?> <!-- inner page window -->

    <section class="accordion-wrap pbxl mtl">

        <?php $loop = new WP_Query( array( 'post_type' => 'price_list', 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'ASC' ) ); ?>
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

        <button class="accordion"><?php the_title(); ?></button>

        <div class="panel">
            <?php
            $custom_fields = get_post_custom();

            foreach ( $custom_fields as $field_key => $field_values ) {
            	if(!isset($field_values[0])) continue;
            	if(in_array($field_key,array("_edit_lock","_edit_last",))) continue;
            echo '<h2>' . $field_key . '</h2><p>' . $field_values[0] . '</p>';
            }
            ?>
        </div>

        <?php endwhile; wp_reset_query(); ?>

        <div>
            <p>
                *Style Director / Senior Stylist / Stylist
            </p>
        </div>

    </section>


    <?php include("cta.php"); ?> <!-- CTA -->

</main> <!-- main content END -->

<?php include("footer.php"); ?> <!-- Footer -->
