<?php
add_action('init', 'amz_amazon_blocks');
function amz_amazon_blocks() {
    $assets_file = include_once AMZ_PATH . '/blocks/amazon/build/index.asset.php';

    wp_register_script(
        'amz-amazon-block',
        plugins_url('./build/index.js',__FILE__),
        $assets_file['dependencies'],
        $assets_file['version']
    );

    wp_register_style(
        'amz-amazon-block',
        plugins_url('./build/index.css',__FILE__),
        array(),
        $assets_file['version']
    );

    register_block_type(
        'amz/amazon',
        array(
            'editor_script' => 'amz-amazon-block',
            'style' => 'amz-amazon-block'
        )
        );
}