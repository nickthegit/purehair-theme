<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <link rel="stylesheet" href="/wp-content/themes/williamsgroup/assets/css/style.css">

    <link href='https://fonts.googleapis.com/css?family=Yantramanav:400,300,700,500' rel='stylesheet' type='text/css'>


    <title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?></title>

</head>

<body>

    <header class="clearHeader"> <!-- header start -->

        <div class="logo-strap"><!--  logo strap start -->
                <?php the_custom_logo(); ?>
            <span>
                <div class="nav-icon right-arrow">
                    <div class="span"></div>
                </div>
            </span>
        </div> <!-- logo strap END -->

        <?php include("sidebar.php"); ?>

    </header> <!-- header END -->

    <div class="content-wrap"> <!-- content wrap start -->