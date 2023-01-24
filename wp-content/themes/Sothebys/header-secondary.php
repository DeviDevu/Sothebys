<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://sylt-sothebysrealty.com/wp-content/uploads/2021/03/favicon.png" type="image/x-icon">
    <title><?php echo get_field('title', 'option'); ?></title>
    <!--custom css-->
    <?php wp_head(); ?>
</head>

<body>
    <!-- ============================ -->
    <!-- HEADER -->
    <!-- ============================ -->
    <header id="header">
        <nav class="navbar navbar-expand-lg " id="navigation">
            <?php
            if (!empty(get_field('header_logo', 'option'))) :
                $logo = get_field('header_logo', 'options');
            ?>
                <a class="navbar-brand" target="<?php home_url() ?>" href="<?php home_url() ?>"><img src="<?php echo $logo['url']; ?>" alt="Logo"></a>
            <?php endif; ?>
            <button class=" navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div id="nav_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="search_wrap breakline">
                    <form class="d-flex">
                        <button class="btn">
                            <img src="<?php bloginfo('template_directory'); ?>/assets/images/search_icon.png" alt="" />
                            <span class="search_button">SUCHEN</span>
                        </button>
                    </form>
                </div>
                <?php wp_nav_menu(
                    array(
                        'theme_location' => 'top_menu',
                        'container'           => 'ul',
                        'menu_class' => 'navbar-nav ms-auto mb-2 mb-lg-0',
                    )
                );
                $contact_link = get_field('contact_menu', 'options');
                if (!empty($contact_link)) : ?>
                    <div class="contact_wrap breakline">
                        <a class="nav-link " target="<?php echo $contact_link['target'] ?>" href="<?php echo $contact_link['link'] ?>"><span class="icon"><img src="<?php bloginfo('template_directory'); ?>/assets/images/tel_icon.png" alt=""><?php echo $contact_link['title'] ?></span>
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        </nav>
        <section class="range_drp_wrap cnt_sec multiple_range_slider">
            <div class="range_action">
                <div class="filter_bl filter_bl_v">
                    <button class="filter_bt active ">
                        <span><img src="<?php bloginfo('template_directory'); ?>/assets/images/filter_icon.png" alt="">
                        </span>Filter</button>
                    <div class="close_btn visible_btn" id="close_3">
                        <button class="filter_no_text">
                            <span><img src="<?php bloginfo('template_directory'); ?>/assets/images/close_btn_2.png" alt=""></span>
                            <span class="visible_only_mob">schliessen</span>
                        </button>
                    </div>
                </div>
            </div>
            <?php get_search_form(); ?>
        </section>
    </header>