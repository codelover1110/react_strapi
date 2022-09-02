<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div class="wrap">
	<div id="primary" class="content-area">
		
		<div class="container">
        <div class="row">
        	<div class="col-lg-12">
        		   <div class="woocommerce">
               		 <?php while (have_posts()) : the_post(); 
           get_template_part( 'template-parts/content', 'page' );?>
  <?php the_content(); ?>

<?php endwhile; ?>
         			</div>
        	</div><!--col-12-->
        </div><!--row-->
   </div>
		
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php
get_footer();
