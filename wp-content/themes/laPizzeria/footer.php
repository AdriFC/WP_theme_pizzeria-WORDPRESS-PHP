    <footer class="site-footer">
        <?php
        $args = array(
            'theme_location' => 'header-menu',
            'container' => 'nav',
            'container_class' => 'footer-nav',
            'after' => '<span class="separador"> | </span>'
        );
        wp_nav_menu($args);
        ?>

        <div class="direccion">
            <p>54298 Three Avenue, LA 4321798</p>
            <p>Teléfono: 23541975600</p>
        </div>

    </footer>

    <?php wp_footer(); ?>
    </body>

    </html>