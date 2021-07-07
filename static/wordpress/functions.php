<?php

// Theme setup
add_action('genesis_setup', 'setup_child_theme', 10);
function setup_child_theme() {
    add_theme_support( 'html5' );
    add_theme_support( 'genesis-responsive-viewport' );
    add_theme_support( 'genesis-structural-wraps', array( ' ' ) );
    
    remove_action( 'genesis_sidebar', 'genesis_do_sidebar' );
    remove_action( 'genesis_after_content', 'genesis_get_sidebar' );
    remove_action( 'genesis_after_content_sidebar_wrap', 'genesis_get_sidebar_alt' );
    remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
    remove_action( 'genesis_footer', 'genesis_do_footer' );
    remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );
    
    add_filter( 'genesis_markup_site-inner', '__return_null' );
    add_filter( 'genesis_markup_content-sidebar-wrap', '__return_null' );
}

/* Add scripts to footer */
add_action('wp_footer', 'add_scripts_to_foot');
function add_scripts_to_foot(){ ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <link rel="stylesheet" href="https://use.typekit.net/yzg6lah.css">
<?php }

/* Add scripts to head */
add_action('wp_head', 'add_scripts_to_head');
function add_scripts_to_head(){ ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="stylesheet" href="https://use.typekit.net/yzg6lah.css">
<?php }

// Enqueue Javascript files
add_action( 'wp_enqueue_scripts', 'enqueue_javascript' );
function enqueue_javascript() {
    wp_enqueue_script( 'follow', get_stylesheet_directory_uri() . '/js/javascript.js', array( 'jquery' ), '', true );
    remove_action( 'genesis_after_post', 'genesis_get_comments_template' );
    wp_deregister_script( 'jquery' );
    wp_deregister_script( 'jquery-ui' );
}

/** Load scripts before closing the body tag */
add_action('genesis_after_footer', 'child_script_managment');
function child_script_managment() {
      wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js' );
      wp_register_script( 'jquery-ui', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js' );
      wp_enqueue_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', array( 'jquery' ), '4.0', false );
      wp_enqueue_script( 'jquery-ui', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js', array( 'jquery' ), '1.9.2' );
}

// Add arrows to slides
function slide_arrows( $arrowtype, $startarrow ) { ?>
    <div class="slide-arrows">
        <?php if ( $arrowtype == "left" || $arrowtype == "both" ) { ?>
            <div class="slide_arrow left">
                <svg viewBox="0 0 13.2 22.3" xmlns="http://www.w3.org/2000/svg"><path d="m12.6 18.9-7.8-7.8 7.8-7.8c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0l-9.2 9.3c-.8.8-.8 2 0 2.8l9.2 9.2c.8.8 2 .8 2.8 0 .8-.8.8-2.1 0-2.9z"/></svg>
            </div>
        <?php } ?>
        <?php if ( $arrowtype == "right" || $arrowtype == "both" ) { ?>
            <div class="slide_arrow right"> <?php
                if ( $startarrow == "yes" ) { ?>
                    <p>Start Now</p>
                <?php } ?>
                <svg viewBox="0 0 13.2 22.3" xmlns="http://www.w3.org/2000/svg"><path d="m.6 18.9 7.8-7.8-7.8-7.7c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l9.2 9.2c.8.8.8 2 0 2.8l-9.2 9.2c-.8.8-2 .8-2.8 0-.8-.8-.8-2.1 0-2.9z"/></svg>
            </div>
        <?php } ?>
    </div>
<?php }

// Hide content editor for pages post type
add_action('admin_init', 'remove_textarea');
function remove_textarea() {
    remove_post_type_support( 'page', 'editor' );
}

// Add share icon shortcode
add_shortcode( 'social-icons', 'gss_shortcode' );

function gss_shortcode() {
	global $genesis_simple_share;

	$icons = '';
	
	if ( function_exists( 'genesis_share_get_icon_output' ) ) {
		$location = uniqid( 'gss-shortcode-' );
		$icons = genesis_share_get_icon_output( $location, $genesis_simple_share->icons );
	}
	
	return $icons;
}
