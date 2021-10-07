<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body>
    <header class="site-header contenedor">
        <div class="logo">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg">
            </a>
        </div>

        <div class="informacion-header">
            <div class="redes-sociales">
                <!-- TODO: Agregar menu -->
            </div>

            <div class="direccion">
                <p>54298 Three Avenue, LA 4321798</p>
                <p>Teléfono: 23541975600</p>
            </div>
        </div>
        
    </header>