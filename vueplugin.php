<?php

/*
Plugin Name: Latest Post By Bisnu
Description:  Latest Post Shortcode
Version: 1.0
*/

wp_enqueue_script('vue', 'https://unpkg.com/vue@3/dist/vue.global.js', [], '3.0');
wp_enqueue_script("latestpost", plugin_dir_url(__FILE__) . "/latestposts.js", ['vue'], '1.0.0', true);


function handle_shortcode()
{

    // return require_once('template.html');
    return "<div id='app'></div>";

}



add_shortcode("latestPosts", 'handle_shortcode');