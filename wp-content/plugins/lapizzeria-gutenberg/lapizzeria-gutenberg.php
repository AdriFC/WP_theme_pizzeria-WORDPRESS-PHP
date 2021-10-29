<?php
/*
    Plugin Name: La Pizzeria Gutenberg Blocks
    Plugin URI: 
    Description: Agrega bloques de Gutenberg nativos
    Version: 1.0
    Author: Adrián Fraga Cortés
    Author URI: https://www.linkedin.com/in/adrianfragacortes/
    License: GPL2
    License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

if(!defined('ABSPATH')) exit;

/*Categorías personalizadas*/
function lapizzeria_categoria_personalizada($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'lapizzeria',
                'title' => 'La Pizzeria',
                'icon' => 'store'
            )
        )
    );
}
add_filter('block_categories', 'lapizzeria_categoria_personalizada', 10, 2);

/** Registrar bloques, scripts y CSS */

function lapizzeria_registrar_bloques() {

    // Si gutenberg no existe, salir
    if(!function_exists('register_block_type')) {
        return;
    }

    // Registrar los bloques en el editor
    wp_register_script(
        'lapizzeria-editor-script', // nombre unico
        plugins_url( 'build/index.js', __FILE__), // archivo con los bloques
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // dependencias
        filemtime( plugin_dir_path(__FILE__) . 'build/index.js') // versión
    );

    // Estilos para el editor (unicamente)
    wp_register_style(
        'lapizzeria-editor-styles', // nombre
        plugins_url( 'src/css/editor.css', __FILE__), // archivo css para el editor
        array('wp-edit-blocks'), // dependencias
        filemtime( plugin_dir_path(__FILE__) . 'src/css/editor.css')
    );

    // Estilos para los bloques (backend y frontend)
    wp_register_style(
        'lapizzeria-frontend-styles', // nombre
        plugins_url( 'src/css/styles.css', __FILE__), // archivo css para el editor
        array(), // dependencias
        filemtime( plugin_dir_path(__FILE__) . 'src/css/styles.css')
    );

    // Arreglo de bloques
    $blocks = [
        'lapizzeria/boxes'
    ];

    // Recorrer bloques y agregar scripts y styles
    foreach($blocks as $block) {
        register_block_type($block, array(
            'editor_script' => 'lapizzeria-editor-script', // script principal para editor
            'editor_style' => 'lapizzeria-editor-styles', // estilos para el editor
            'style' => 'lapizzeria-frontend-styles' // estilos para el front end
        ));
    }

    /*Registrar un bloque dinámino*/
    register_block_type('lapizzeria/menu', array(
        'editor_script' => 'lapizzeria-editor-script', // script principal para editor
        'editor_style' => 'lapizzeria-editor-styles', // estilos para el editor
        'style' => 'lapizzeria-frontend-styles', // estilos para el front end
        'render_callback' => 'lapizzeria_especialidades_front_end' //Query a la bbdd
    ));

}
add_action('init', 'lapizzeria_registrar_bloques');

/*Consulta la bbdd para mostrar los resultados en el front end*/
function lapizzeria_especialidades_front_end() {
    //Obtener los datos del query
    $especialidades = wp_get_recent_posts(array(
        'post_type' => 'especialidades',
        'post_status' => 'publish',
        'numberposts' => 10
    ));

    //Revisar que haya resultados
    if(count($especialidades) == 0) {
        return 'No hay especialidades';
    }

    $cuerpo = '';
    $cuerpo .= '<h2>Nuestras especialidades</h2>';
    $cuerpo .= ' <ul class="nuestro-menu">';
    foreach($especialidades as $esp):
        // Obtener un objecto del post
        $post = get_post( $esp['ID'] );
        setup_postdata($post);

        $cuerpo .= sprintf(
            '<li>
                %1$s
                <div class="platillo">
                    <div class="precio-titulo">
                        <h3>%2$s</h3>
                        <p>€ %3$s</p>
                    </div> 
                </div>
                <div class="contenido-platillo">
                    <p>
                        %4$s
                    </p>
                </div>
            </li>',
            get_the_post_thumbnail($post, 'especialidades'),
            get_the_title($post),
            get_field('precio', $post),
            get_the_content($post)

        );
        wp_reset_postdata();
    endforeach;

    $cuerpo .= ' </ul>';

    return $cuerpo;
}

?>