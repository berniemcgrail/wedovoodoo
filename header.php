<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>We Do Voodoo</title>
		<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/CSS/main.css" />
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/CSS/mixins.css" type="text/css" media="screen" title="no title" charset="utf-8">
		
		<?php wp_head(); ?>
		
	</head>
	<body>
        <header class="cfx">
            <div class="row">
				<div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" width="163" height="80" alt="Logo"></div>
                <div class="hamburger-container">
                    <div class="hamburger">
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                        <div class="line line-3"></div>
                    </div>
                </div>
				
                <nav>
                    <?php wp_nav_menu( array( 'sort_column' => 'menu_order', 'container_class' => 'nav' ) ); ?>
					<ul class="social_icons">
						<li><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/Facebook.svg" class="svg"></a></li>
						<li><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/Twitter_logo_white.svg" class="svg"></a></li>
					</ul>
                </nav>
			</div>

	</header>