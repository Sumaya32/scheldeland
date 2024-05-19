<?php

add_action( 'init', 'register_cpt_tutorial' );

function register_cpt_tutorial() {

// ----- First post type
$labels = array( 
    'name' => _x( 'Hoofdgerechten', 'hoofdgerecht' ),
    'singular_name' => _x( 'Hoofdgerecht', 'hoofdgerecht' ),
    'add_new' => _x( 'Add New', 'hoofdgerecht' ),
    'add_new_item' => _x( 'Add New Hoofdgerecht', 'hoofdgerecht' ),
    'edit_item' => _x( 'Edit Hoofdgerecht', 'hoofdgerecht' ),
    'new_item' => _x( 'New Hoofdgerecht', 'hoofdgerecht' ),
    'view_item' => _x( 'View Hoofdgerecht', 'hoofdgerecht' ),
    'search_items' => _x( 'Search Hoofdgerechten', 'hoofdgerecht' ),
    'not_found' => _x( 'No Hoofdgerechten found', 'hoofdgerecht' ),
    'not_found_in_trash' => _x( 'No Hoofdgerechten found in Trash', 'hoofdgerecht' ),
    'parent_item_colon' => _x( 'Parent Hoofdgerecht:', 'hoofdgerecht' ),
    'menu_name' => _x( 'Hoofdgerechten', 'hoofdgerecht' ),
);


$args = array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Hoofdgerechten description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
    'graphql_single_name' => 'hoofdgerecht',
    'graphql_plural_name' => 'hoofdgerechten',
);



// ----- Second post type
$labels3 = array( 
    'name' => _x( 'Supplement', 'supplement' ),
    'singular_name' => _x( 'Supplement', 'supplement' ),
    'add_new' => _x( 'Add New', 'supplement' ),
    'add_new_item' => _x( 'Add New Supplement', 'supplement' ),
    'edit_item' => _x( 'Edit Supplement', 'supplement' ),
    'new_item' => _x( 'New Supplement', 'supplement' ),
    'view_item' => _x( 'View Supplement', 'supplement' ),
    'search_items' => _x( 'Search Supplement', 'supplement' ),
    'not_found' => _x( 'No Supplementen found', 'supplement' ),
    'not_found_in_trash' => _x( 'No Supplementen found in Trash', 'supplement' ),
    'parent_item_colon' => _x( 'Parent Supplement:', 'supplement' ),
    'menu_name' => _x( 'Supplementen', 'supplement' ),
);




$args3 = array( 
    'labels' => $labels3,
    'hierarchical' => false,
    'description' => 'Supplementen description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
        'graphql_single_name' => 'supplement',
        'graphql_plural_name' => 'supplementen',
);



// ----- Therd post type
$labels2 = array( 
    'name' => _x( 'Dessert', 'dessert' ),
    'singular_name' => _x( 'Dessert', 'dessert' ),
    'add_new' => _x( 'Add New', 'dessert' ),
    'add_new_item' => _x( 'Add New Dessert', 'dessert' ),
    'edit_item' => _x( 'Edit Dessert', 'dessert' ),
    'new_item' => _x( 'New Dessert', 'dessert' ),
    'view_item' => _x( 'View Dessert', 'dessert' ),
    'search_items' => _x( 'Search Desserten', 'dessert' ),
    'not_found' => _x( 'No desserten found', 'dessert' ),
    'not_found_in_trash' => _x( 'No Desserten found in Trash', 'dessert' ),
    'parent_item_colon' => _x( 'Parent Dessert:', 'dessert' ),
    'menu_name' => _x( 'Desserten', 'dessert' ),
);




$args2 = array( 
    'labels' => $labels2,
    'hierarchical' => false,
    'description' => 'Desserten description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
        'graphql_single_name' => 'dessert',
        'graphql_plural_name' => 'desserten',
);



// -----Fourth post type
$labels = array( 
    'name' => _x( 'Kleine honger', 'kleine honger' ),
    'singular_name' => _x( 'Kleine honger', 'kleine honger' ),
    'add_new' => _x( 'Add New', 'kleine honger' ),
    'add_new_item' => _x( 'Add New Kleine honger', 'kleine honger' ),
    'edit_item' => _x( 'Edit Kleine honger', 'kleine honger' ),
    'new_item' => _x( 'New Kleine honger', 'kleine honger' ),
    'view_item' => _x( 'View Kleine honger', 'kleine honger' ),
    'search_items' => _x( 'Search Kleine honger', 'kleine honger' ),
    'not_found' => _x( 'No Kleine honger found', 'kleine honger' ),
    'not_found_in_trash' => _x( 'No Kleine honger found in Trash', 'kleine honger' ),
    'parent_item_colon' => _x( 'Parent Kleine honger:', 'kleine honger' ),
    'menu_name' => _x( 'Kleine honger', 'Kleine honger' ),
);


$args4 = array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Kleine honger description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
    'graphql_single_name' => 'Kleine_honger',
    'graphql_plural_name' => 'kleine_hongertjes',
);



// -----Fiveth post type
$labels = array( 
    'name' => _x( 'Sharing food', 'sharing food' ),
    'singular_name' => _x( 'Sharing food', 'Sharing food' ),
    'add_new' => _x( 'Add New', 'sharing food' ),
    'add_new_item' => _x( 'Add New Sharing food', 'sharing food' ),
    'edit_item' => _x( 'Edit Sharing food', 'sharing food' ),
    'new_item' => _x( 'New Sharing food', 'sharing food' ),
    'view_item' => _x( 'View Sharing food', 'sharing food' ),
    'search_items' => _x( 'Search Sharing food', 'sharing food' ),
    'not_found' => _x( 'No Sharing food found', 'sharing food' ),
    'not_found_in_trash' => _x( 'No Sharing food found in Trash', 'Sharing food' ),
    'parent_item_colon' => _x( 'Parent Sharing food:', 'sharing food' ),
    'menu_name' => _x( 'Sharing food', 'sharing food' ),
);


$args5 = array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Sharing food description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
    'graphql_single_name' => 'Sharing_food',
    'graphql_plural_name' => 'Sharing_foods',
);



// -----Sixth post type
$labels = array( 
    'name' => _x( 'Maandelijkse menu', 'maandelijkse menu' ),
    'singular_name' => _x( 'Maandelijkse menu', 'maandelijkse menu' ),
    'add_new' => _x( 'Add New', 'maandelijkse menu' ),
    'add_new_item' => _x( 'Add New Maandelijkse menu', 'Maandelijkse menu' ),
    'edit_item' => _x( 'Edit Maandelijkse menu', 'maandelijkse menu' ),
    'new_item' => _x( 'New Maandelijkse menu', 'Maandelijkse menu' ),
    'view_item' => _x( 'View Maandelijkse menu', 'maandelijkse menu' ),
    'search_items' => _x( 'Search Maandelijkse menu', 'maandelijkse menu' ),
    'not_found' => _x( 'No Maandelijkse menu found', 'maandelijkse menu' ),
    'not_found_in_trash' => _x( 'No Maandelijkse menu found in Trash', 'maandelijkse menu' ),
    'parent_item_colon' => _x( 'Parent Maandelijkse menu:', 'maandelijkse menu' ),
    'menu_name' => _x( 'Maandelijkse menu', 'maandelijkse menu' ),
);


$args6= array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Maandelijkse menu description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
    'graphql_single_name' => 'Maandelijkse_menu',
    'graphql_plural_name' => 'Maandelijkse_menus',
);





// ----- Seventh post type
$labels = array( 
    'name' => _x( 'Kinder menu', 'kinder menu' ),
    'singular_name' => _x( 'Kinder menu', 'kinder menu' ),
    'add_new' => _x( 'Add New', 'kinder menu' ),
    'add_new_item' => _x( 'Add New Kinder menu', 'kinder menu' ),
    'edit_item' => _x( 'Edit Kinder menu', 'kinder menu' ),
    'new_item' => _x( 'New Kinder menu', 'kinder menu' ),
    'view_item' => _x( 'View Kinder menu', 'kinder menu' ),
    'search_items' => _x( 'Search Kinder menu', 'kinder menu' ),
    'not_found' => _x( 'No kinder menus found', 'kinder menu' ),
    'not_found_in_trash' => _x( 'No Kinder menu found in Trash', 'kinder menu' ),
    'parent_item_colon' => _x( 'Parent Kinder menu:', 'kinder menu' ),
    'menu_name' => _x( 'Kinder menu', 'kinder menu' ),
);




$args7 = array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Kinder menus description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
        'graphql_single_name' => 'Kinder_menu',
        'graphql_plural_name' => 'Kinder_menus',
);



// ----- Eighth post type
$labels = array( 
    'name' => _x( 'Kinder dessert', 'Kinder dessert' ),
    'singular_name' => _x( 'Kinder dessert', 'kinder dessert' ),
    'add_new' => _x( 'Add New', 'kinder dessert' ),
    'add_new_item' => _x( 'Add New Kinder dessert', 'kinder dessert' ),
    'edit_item' => _x( 'Edit Kinder dessert', 'kinder dessert' ),
    'new_item' => _x( 'New Kinder dessert', 'kinder dessert' ),
    'view_item' => _x( 'View Kinder menu', 'kinder dessert' ),
    'search_items' => _x( 'Search Kinder dessert', 'kinder dessert' ),
    'not_found' => _x( 'No kinder desserten found', 'kinder dessert' ),
    'not_found_in_trash' => _x( 'No Kinder dessert found in Trash', 'kinder dessert' ),
    'parent_item_colon' => _x( 'Parent Kinder dessert:', 'kinder dessert' ),
    'menu_name' => _x( 'Kinder dessert', 'kinder dessert' ),
);




$args8 = array( 
    'labels' => $labels,
    'hierarchical' => false,
    'description' => 'Kinder desserten description will be here',
    'supports' => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies' => array( 'category' ),
    'public' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 20,

    'show_in_nav_menus' => true,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => true,
    'capability_type' => 'post',

    'show_in_graphql' => true,
        'graphql_single_name' => 'Kinder_dessert',
        'graphql_plural_name' => 'Kinder_desserten',
);





register_post_type( 'Gerecht', $args );
register_post_type( 'Dessert', $args2 );
register_post_type( 'Supplement', $args3 );
register_post_type( 'Kleine honger', $args4 );
register_post_type( 'Sharing food', $args5 );
register_post_type( 'Maandelijkse menu', $args6 );
register_post_type( 'Kinder menu', $args7 );
register_post_type( 'Kinder dessert', $args8 );
}

?>