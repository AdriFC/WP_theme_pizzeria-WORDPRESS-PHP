<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'curso-pizzeria' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3fIF!qksPo$`K-xQv)}W`l#d16`^3S^3qbQ |-qPMc8]^R8Z<}#~IeRst{blkwI]' );
define( 'SECURE_AUTH_KEY',  'gfz92+$J~<#5W>pNd^98/u ,0(ZG$moJ*{b[yfX>;O9kelieaMiz}PYK{wPBCCpD' );
define( 'LOGGED_IN_KEY',    'b58O!NY^MaO?Y;v%k2`slQyKS@J=>O!yK$%?FY1dIUmzF=m`R#loa]^rv7f5~0u(' );
define( 'NONCE_KEY',        '7zf0/T*GSQNNcq-mw/9`wPo?Oiq&ptXP)fz}9MOH2U0n$7Wp>3*8gMr>#m-(kWh(' );
define( 'AUTH_SALT',        'H<KY1,}u|>SN~%&/RcPPJbh1&{fQS6W`ZdxbXb-@Xz+w!<@q4R xfNcmWO09.P!$' );
define( 'SECURE_AUTH_SALT', '^bx<0=~dU1L~/}.Bi`g[33|jdW_5-beQ`anVi%<LxQ&3!>^kZC/Y?<Z~|Pa_#Fm*' );
define( 'LOGGED_IN_SALT',   'RloM&0HY1&,^mLb:q3QD9hK!5.Gg/b_`[c~NV^j?z4_iH-Z<0O?{ya[SwskN&tQ8' );
define( 'NONCE_SALT',       'V+.>aReJ7SC<hB{lhzfo X0?[/?^)tSkI3n-/_LI I||3|]xb=-]^8k-4^~d><]+' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
