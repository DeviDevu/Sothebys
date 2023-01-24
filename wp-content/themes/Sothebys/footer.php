<footer>
    <div class="container">
        <div class="footer_cnt row">
            <div class="col-xl-3 col-md-6">
                <?php
                if (!empty(get_field('footer_logo', 'option'))) :
                    $logo = get_field('footer_logo', 'option');
                ?>
                    <div class="footer_logo_wrap">
                        <div class="footer_logo">
                            <img src="<?php echo $logo['url']; ?>" alt="Logo">
                        </div>
                    <?php endif; ?>
                    <?php if (!empty(have_rows('contact', 'option'))) :
                        $details = get_field('contact', 'options') ?>
                        <div class="address">
                            <p><span><?php echo $details['address']; ?></span>
                            </p>
                        </div>
                        <ul class="footer_sm">
                            <li><a href="tel:<?php echo $details['phone']; ?>"><span><img src="<?php bloginfo('template_directory'); ?>/assets/images/tel_icon.png" alt=""></span>+<?php echo $details['phone']; ?></a></li>
                            <li><a href="mailto:<?php echo $details['email']; ?>"><span><img src="<?php bloginfo('template_directory'); ?>/assets/images/mail_icon.png" alt=""></span><?php echo $details['email']; ?></a></li>
                        </ul>
                    <?php endif; ?>
                    </div>
            </div>
            <?php if (!empty(have_rows('places', 'option'))) :
                $place = get_field('places', 'options'); ?>
                <div class="col-xl-4 col-md-6">
                    <div class="sothebys_links">
                        <div class="footer_head">
                            <h6><?php echo $place['title']; ?></h6>
                        </div>
                        <?php
                        while (have_rows('places', 'option')) : the_row(); ?>
                            <?php

                            if (have_rows('locations', 'option')) : ?>
                                <ul>
                                    <?php while (have_rows('locations', 'option')) : the_row();
                                        $location = get_sub_field('location_name');
                                        $map = get_sub_field('location_link'); ?>
                                        <li><a href="<?php echo $map; ?>"><?php echo $location; ?></a></li>
                                    <?php endwhile; ?>
                                </ul>
                        <?php endif;
                        endwhile; ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php if (!empty(have_rows('social_media', 'option'))) :
                $Socialmedia = get_field('social_media', 'options'); ?>
                <div class="col-xl-2 col-md-6">
                    <div class="footer_social_bl">
                        <div class="footer_head">
                            <h6><?php echo $Socialmedia['title']; ?></h6>
                        </div>
                        <?php
                        while (have_rows('social_media', 'option')) :
                            the_row();
                            the_sub_field('social_media', 'option');
                            if (have_rows('icons')) : ?>
                                <ul class="footer_social">
                                    <?php while (have_rows('icons', 'option')) :
                                        the_row();
                                        $icon = get_sub_field('icon', 'options');
                                        $link = get_sub_field('icon_link', 'options');
                                    ?>
                                        <li><a href="<?php echo $link['url']; ?>"><img src="<?php echo $icon['url']; ?>" alt="Icon"></a></li>
                                    <?php endwhile; ?>
                                </ul>
                        <?php endif;
                        endwhile; ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php if (!empty(have_rows('apps', 'option'))) : $Apps = get_field('apps', 'options') ?>
                <div class="col-xl-3 col-md-6">
                    <div class="footer_apps">
                        <div class="footer_head">
                            <h6><span><?php echo $Apps['title']; ?></span>
                            </h6>
                        </div>
                        <?php
                        while (have_rows('apps', 'option')) :
                            the_row();
                            the_sub_field('apps', 'option');
                            if (have_rows('icons')) : ?>
                                <ul class="apps_ul">
                                    <?php while (have_rows('icons')) : the_row();
                                        $app_icon = get_sub_field('app_icon', 'option');
                                        $app_link = get_sub_field('app_link', 'option');
                                    ?>
                                        <li><a href="<?php echo $app_link['url']; ?>"><img src="<?php echo $app_icon['url']; ?>" alt="Icon"></a></li>
                                    <?php endwhile; ?>
                                </ul>
                        <?php endif;
                        endwhile; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <div class="footer_btm">
            <?php if (!empty(have_rows('copyright_discription', 'option'))) : ?>
                <p><?php echo get_field('copyright_discription', 'option'); ?>
                </p>
            <?php endif; ?>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer_menu',
                'menu_class' => 'footer_menu',
                'container' => 'ul'
            ));
            ?>
        </div>
        <?php if (is_front_page()) : ?>
            <div class="footer_lst_btm">
                <div class="license-txt  text-center">
                    <?php echo get_field('trademark', 'option'); ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</footer>
<?php
wp_footer();
?>
</body>

</html>