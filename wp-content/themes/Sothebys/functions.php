<?php
//    Load Style
function load_stylesheets()
{
    wp_register_style('carousel', get_template_directory_uri() . '/assets/css/owl.carousel.min.css', array(), 1, 'all');
    wp_enqueue_style('carousel');
    wp_register_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', array(), 1, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('all', get_template_directory_uri() . '/assets/css/all.min.css', array(), 1, 'all');
    wp_enqueue_style('all');

    wp_register_style('font', get_template_directory_uri() . '/assets/css/fonts.css', array(), 1, 'all');
    wp_enqueue_style('font');

    wp_register_style('aos', get_template_directory_uri() . '/assets/css/aos.css', array(), 1, 'all');
    wp_enqueue_style('aos');

    wp_register_style('styles', get_template_directory_uri() . '/assets/css/style.css', array(), 1, 'all');
    wp_enqueue_style('styles');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');
//Add js
function addjs()
{
    wp_deregister_script('jquery');

    wp_register_script('jquery', get_template_directory_uri() . '/assets/js/jquery-min.js', array(), 1, 1);
    wp_enqueue_script('jquery');

    wp_register_script('bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array(), 1, 1);
    wp_enqueue_script('bootstrap');

    wp_register_script('carousel', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', array(), 1, 1);
    wp_enqueue_script('carousel');

    wp_register_script('matchHeight', get_template_directory_uri() . '/assets/js/jquery.matchHeight-min.js', array(), 1, 1);
    wp_enqueue_script('matchHeight');

    wp_register_script('aos', get_template_directory_uri() . '/assets/js/aos.js', array(), 1, 1);
    wp_enqueue_script('aos');

    wp_register_script('waypoints', get_template_directory_uri() . '/assets/js/jquery.waypoints.min.js', array(), 1, 1);
    wp_enqueue_script('waypoints');

    wp_register_script('counterup', get_template_directory_uri() . '/assets/js/jquery.counterup.min.js', array(), 1, 1);
    wp_enqueue_script('counterup');

    wp_register_script('script', get_template_directory_uri() . '/assets/js/script.js"', array(), 1, 1);
    wp_enqueue_script('script');
}
add_action('wp_enqueue_scripts', 'addjs');
//Add ACF options
if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Header Settings',
        'menu_title'    => 'Header',
        'parent_slug'   => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title'    => 'Theme Footer Settings',
        'menu_title'    => 'Footer',
        'parent_slug'   => 'theme-general-settings',
    ));
}
//Add theme Support
add_theme_support('menus');

//Register Menu
register_nav_menus(array(
    'top_menu' => __('Top Menu'),
    'footer_menu'  => __('Footer Menu')
));

function sothebys_menu_class($classes, $item, $args)
{
    if ('top_menu' == $args->theme_location) {
        $classes[] = 'nav-item';
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'sothebys_menu_class', 10, 3);

function sothebys_menu_link_attributes($atts, $item, $args)
{
    if ('top_menu' == $args->theme_location) {
        $atts['class'] = 'nav-link';
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'sothebys_menu_link_attributes', 10, 3);
