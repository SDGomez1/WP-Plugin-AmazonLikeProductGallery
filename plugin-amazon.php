<?php
/*
 * Plugin Name:       Amazon Product Gallery
 * Description:       This plugin creates a gallery view for products
 * Plugin URI:        https://github.com/SDGomez1/WP-Plugin-AmazonLikeProductGallery
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Sergio Gomez & Miguel Clavijo
 * Author URI:        https://github.com/SDGomez1 & https://github.com/KnowedMe
 */
define("AMZ_PATH",plugin_dir_path(__FILE__));
require_once AMZ_PATH . '/blocks/amazon/index.php';
