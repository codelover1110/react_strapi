<?php
/**
 * Header file for the ERP default theme.
 *
 *
 * @package WordPress
 * @package Fhits
 * @since 1.0.0
 */
?>
<html>
<head>
<?php wp_head(); ?> 
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, max-scale=1">

<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="manifest" href="img/site.webmanifest">
    <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Core – Dashboard Builder">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@ui8">
    <meta name="twitter:title" content="Core – Dashboard Builder">
    <meta name="twitter:description" content="Core – Dashboard Builder">
    <meta name="twitter:creator" content="@ui8">
    <meta name="twitter:image" content="https://images.ui8.net/uploads/thumbnail_1636636019240.png">
    <meta property="og:title" content="Core – Dashboard Builder">
    <meta property="og:type" content="Core is a clean and minimal dashboard UI Kit targeting a wide variety of use cases for desktop, tablet, and mobile applications in awesome light or dark mode 🔥">
    <meta property="og:url" content="https://ui8.net/ui8/products/core-dashboard-builder">
    <meta property="og:image" content="https://images.ui8.net/uploads/thumbnail_1636636019240.png">
    <meta property="og:description" content="Core – Dashboard Builder">
    <meta property="og:site_name" content="Core – Dashboard Builder">
    <meta property="fb:admins" content="132951670226590">

<link href="<?php echo get_stylesheet_directory_uri().'/style.css'?>" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
 <script>
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
        if (screen.width < 375) {
          var newScale = screen.width / 375;
          viewportmeta.content = 'width=375, minimum-scale=' + newScale + ', maximum-scale=1.0, user-scalable=no, initial-scale=' + newScale + '';
        } else {
          viewportmeta.content = 'width=device-width, maximum-scale=1.0, initial-scale=1.0';
        }
      }
    </script>
</head>
  <body <?php body_class(); ?>>
	<?php
	  wp_body_open();
	?>
	
  <script>
      if (JSON.parse(localStorage.getItem('darkMode'))) {
        document.body.classList.add("dark");
        document.addEventListener("DOMContentLoaded", function() {
          document.querySelector('#switch-theme-input').checked = true;
        });
      }
    </script>
    <header class="d-flex align-items-center px-xl-7 px-5 py-5">
      <div class="search-header me-auto">
        <div class="search-action">
          <button class="btn-action">
            <svg class="icon icon-arrow-left">	
              <use xlink:href="#icon-arrow-left"></use>
            </svg>
          </button>
        </div>
        <div class="search-input input-group">
          <div class="input-group-text justify-content-center">
            <button class="btn-search">
              <svg class="icon icon-search">	
                <use xlink:href="#icon-search"></use>
              </svg>
            </button>
            <button class="btn-action">
              <svg class="icon icon-arrow-left">	
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </button>
          </div>
          <input class="form-control rounded-2" type="text" placeholder="Search or type a command" aria-describedby="search-input">
          <div class="input-group-text justify-content-end">
            <button class="d-flex align-items-center justify-content-center btn-command"><span class="symbol">⌘</span>F</button>
            <button class="btn-remove">
              <svg class="icon icon-close-circled">	
                <use xlink:href="#icon-close-circled"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="search-result">
          <div class="group">
            <div class="category">Recent search</div>
            <div class="list mb-4">
              <div class="item d-flex py-3"><a class="link d-flex align-items-center flex-fill">
                  <div class="thumb"><img srcset="<?php echo get_stylesheet_directory_uri().'/img/content/image-05@2x.jpg 2x'?>" src="img/content/image-05.jpg" alt="Put your title here"/>
                  </div>
                  <div class="description">
                    <div class="caption">Small caption</div>
                    <div class="group-title">Put your title here</div>
                  </div></a>
                <button class="close">
                  <svg class="icon icon-close">	
                    <use xlink:href="#icon-close"></use>
                  </svg>
                </button>
              </div>
              <div class="item d-flex py-3"><a class="link d-flex align-items-center flex-fill">
                  <div class="thumb"><img srcset="img/content/image-06@2x.jpg 2x" src="img/content/image-06.jpg" alt="Put your title here"/>
                  </div>
                  <div class="description">
                    <div class="caption">Small caption</div>
                    <div class="group-title">Put your title here</div>
                  </div></a>
                <button class="close">
                  <svg class="icon icon-close">	
                    <use xlink:href="#icon-close"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="category">Suggestions</div>
            <div class="list mb-4">
              <div class="item py-3"><a class="link d-flex align-items-center">
                  <div class="circle-icon d-flex align-items-center justify-content-center">
                    <svg class="icon icon-photos">	
                      <use xlink:href="#icon-photos"></use>
                    </svg>
                  </div>
                  <div class="description flex flex-fill">
                    <div class="group-title">Put your title here</div>
                    <div class="caption">Small caption</div>
                  </div>
                  <button class="arrow">
                    <svg class="icon icon-forward">	
                      <use xlink:href="#icon-forward"></use>
                    </svg>
                  </button></a></div>
              <div class="item py-3"><a class="link d-flex align-items-center">
                  <div class="circle-icon d-flex align-items-center justify-content-center">
                    <svg class="icon icon-photos">	
                      <use xlink:href="#icon-photos"></use>
                    </svg>
                  </div>
                  <div class="description flex flex-fill">
                    <div class="group-title">Put your title here</div>
                    <div class="caption">Small caption</div>
                  </div>
                  <button class="arrow">
                    <svg class="icon icon-forward">	
                      <use xlink:href="#icon-forward"></use>
                    </svg>
                  </button></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar"><a class="btn btn-primary nav-item create" href="products-add.html" role="button">
          <svg class="icon icon-plus me-2">	
            <use xlink:href="#icon-plus"></use>
          </svg><span>Create</span></a>
        <div class="nav-item menu-item js-show-sidebar">
          <div class="nav-link d-flex align-items-center justify-content-center">
            <svg class="icon icon-menu">	
              <use xlink:href="#icon-menu"></use>
            </svg>
          </div>
        </div>
        <div class="nav-item search-item">
          <div class="nav-link d-flex align-items-center justify-content-center">
            <svg class="icon icon-search">	
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
        </div>
        <div class="nav-item messages-item toggle-item">
          <button class="toggle-head nav-link active">
            <svg class="icon icon-double-messages"> 
              <use class="fill" href="#icon-messages-fill"></use>
              <use class="stroke" href="#icon-messages-stroke"></use>
            </svg>
          </button>
          <div class="toggle-body"> 
            <div class="top d-flex align-items-center justify-content-between mb-3">
              <div class="toggle-title ms-3">Message</div>
              <div class="action-item">
                <button class="action-head action-btn">
                  <svg class="icon icon-more-horizontal">	
                    <use xlink:href="#icon-more-horizontal"></use>
                  </svg>
                </button>
                <div class="action-body p-3">
                  <button class="action-item">
                    <svg class="icon icon-check">	
                      <use xlink:href="#icon-check"></use>
                    </svg>Mark as read
                  </button>
                  <button class="action-item">
                    <svg class="icon icon-trash">	
                      <use xlink:href="#icon-trash"></use>
                    </svg>Delete message
                  </button>
                </div>
              </div>
            </div>
            <div class="message-list mb-4"><a class="item d-flex align-items-center justify-content-start p-3 position-relative" href="message-center.html">
                <div class="userpic flex-shrink-0 me-3 position-relative online"><img class="w-100" src="img/content/user-2.jpg"/></div>
                <div class="content w-100">
                  <div class="item-title mb-1 d-flex align-items-center justify-content-between">
                    <div class="name">Jarret Waelchi</div>
                    <div class="caption me-6">03:30PM</div>
                  </div>
                  <div class="text-shades-2 text-truncate">When do you release the coded for the Fleet - Travel kit?</div>
                </div></a><a class="item d-flex align-items-center justify-content-start p-3 position-relative" href="message-center.html">
                <div class="userpic flex-shrink-0 me-3 position-relative online"><img class="w-100" src="img/content/user-3.jpg"/></div>
                <div class="content w-100">
                  <div class="item-title mb-1 d-flex align-items-center justify-content-between">
                    <div class="name">Orval Casper</div>
                    <div class="caption me-6">11:59AM</div>
                  </div>
                  <div class="text-shades-2 text-truncate">When do you release the coded for the Fleet - Travel kit?</div>
                </div></a><a class="item d-flex align-items-center justify-content-start p-3 position-relative new" href="message-center.html">
                <div class="userpic flex-shrink-0 me-3 position-relative"><img class="w-100" src="img/content/user-4.jpg"/></div>
                <div class="content w-100">
                  <div class="item-title mb-1 d-flex align-items-center justify-content-between">
                    <div class="name">Michael Emard</div>
                    <div class="caption me-6">09:30AM</div>
                  </div>
                  <div class="text-shades-2 text-truncate">When do you release the coded for the Fleet - Travel kit?</div>
                </div></a><a class="item d-flex align-items-center justify-content-start p-3 position-relative" href="message-center.html">
                <div class="userpic flex-shrink-0 me-3 position-relative online"><img class="w-100" src="img/content/user-5.jpg"/></div>
                <div class="content w-100">
                  <div class="item-title mb-1 d-flex align-items-center justify-content-between">
                    <div class="name">Rouben Ward</div>
                    <div class="caption me-6">08:00AM</div>
                  </div>
                  <div class="text-shades-2 text-truncate">When do you release the coded for the Fleet - Travel kit?</div>
                </div></a><a class="item d-flex align-items-center justify-content-start p-3 position-relative new" href="message-center.html">
                <div class="userpic flex-shrink-0 me-3 position-relative"><img class="w-100" src="img/content/user-6.jpg"/></div>
                <div class="content w-100">
                  <div class="item-title mb-1 d-flex align-items-center justify-content-between">
                    <div class="name">Evalyn Jenkins</div>
                    <div class="caption me-6">07:01AM</div>
                  </div>
                  <div class="text-shades-2 text-truncate">When you release the coded for the Fleet - Travel kit?</div>
                </div></a>
            </div><a class="btn d-flex mx-3" href="/message-center.html">View in message center</a>
          </div>
        </div>
        <div class="nav-item notification-item toggle-item">
          <button class="toggle-head nav-link active">
            <svg class="icon icon-double-notification"> 
              <use class="fill" href="#icon-notification-fill"></use>
              <use class="stroke" href="#icon-notification-stroke"></use>
            </svg>
          </button>
          <div class="toggle-body"> 
            <div class="top d-flex align-items-center justify-content-between mb-3">
              <div class="toggle-title ms-3">Notification</div>
              <div class="action-item">
                <button class="action-head action-btn">
                  <svg class="icon icon-more-horizontal">	
                    <use xlink:href="#icon-more-horizontal"></use>
                  </svg>
                </button>
                <div class="action-body p-3">
                  <button class="action-item">
                    <svg class="icon icon-check">	
                      <use xlink:href="#icon-check"></use>
                    </svg>Mark as read
                  </button>
                  <button class="action-item">
                    <svg class="icon icon-trash">	
                      <use xlink:href="#icon-trash"></use>
                    </svg>Delete message
                  </button>
                </div>
              </div>
            </div>
            <div class="list-notifications mb-4"><a class="item d-flex align-items-center p-3 position-relative new" href="/notification.html">
                <div class="userpic flex-shrink-0 me-3 position-relative">
                  <div class="notify-icon d-flex align-items-center justify-content-center end-0 bottom-0 position-absolute blue">
                    <svg class="icon icon-messages-fill">	
                      <use xlink:href="#icon-messages-fill"></use>
                    </svg>
                  </div><img class="w-100" src="img/content/user-2.jpg"/>
                </div>
                <div class="content w-100">
                  <div class="item-title d-flex align-items-center justify-content-between">
                    <div class="name me-1">Domenica</div>
                    <div class="login me-auto">@domenica</div>
                    <div class="time me-6">1H</div>
                  </div>
                  <div class="message text-truncate">Comment on <b>Smiles – 3D icons</b>
                  </div>
                </div></a><a class="item d-flex align-items-center p-3 position-relative new" href="/notification.html">
                <div class="userpic flex-shrink-0 me-3 position-relative">
                  <div class="notify-icon d-flex align-items-center justify-content-center end-0 bottom-0 position-absolute red">
                    <svg class="icon icon-heart-fill">	
                      <use xlink:href="#icon-heart-fill"></use>
                    </svg>
                  </div><img class="w-100" src="img/content/user-3.jpg"/>
                </div>
                <div class="content w-100">
                  <div class="item-title d-flex align-items-center justify-content-between">
                    <div class="name me-1">Janice</div>
                    <div class="login me-auto">@ethel</div>
                    <div class="time me-6">2H</div>
                  </div>
                  <div class="message text-truncate">Likes <b>Smiles – 3D icons</b>
                  </div>
                </div></a><a class="item d-flex align-items-center p-3 position-relative new" href="/notification.html">
                <div class="userpic flex-shrink-0 me-3 position-relative">
                  <div class="notify-icon d-flex align-items-center justify-content-center end-0 bottom-0 position-absolute green">
                    <svg class="icon icon-shopping-bag-fill">	
                      <use xlink:href="#icon-shopping-bag-fill"></use>
                    </svg>
                  </div><img class="w-100" src="img/content/user-4.jpg"/>
                </div>
                <div class="content w-100">
                  <div class="item-title d-flex align-items-center justify-content-between">
                    <div class="name me-1">Janice</div>
                    <div class="login me-auto">@ethel</div>
                    <div class="time me-6">4H</div>
                  </div>
                  <div class="message text-truncate">Purchased <b>Smiles – 3D icons</b>
                  </div>
                </div></a><a class="item d-flex align-items-center p-3 position-relative new" href="/notification.html">
                <div class="userpic flex-shrink-0 me-3 position-relative">
                  <div class="notify-icon d-flex align-items-center justify-content-center end-0 bottom-0 position-absolute purple">
                    <svg class="icon icon-star-fill">	
                      <use xlink:href="#icon-star-fill"></use>
                    </svg>
                  </div><img class="w-100" src="img/content/user-5.jpg"/>
                </div>
                <div class="content w-100">
                  <div class="item-title d-flex align-items-center justify-content-between">
                    <div class="name me-1">Danial</div>
                    <div class="login me-auto">@ethel</div>
                    <div class="time me-6">6H</div>
                  </div>
                  <div class="message text-truncate">
                     Rate 
                    <svg class="icon icon-star-fill icon-small fill-yellow">	
                      <use xlink:href="#icon-star-fill"></use>
                    </svg> <b>5</b> for <b>Smiles – 3D icons</b>
                  </div>
                </div></a><a class="item d-flex align-items-center p-3 position-relative new" href="/notification.html">
                <div class="userpic flex-shrink-0 me-3 position-relative">
                  <div class="notify-icon d-flex align-items-center justify-content-center end-0 bottom-0 position-absolute blue">
                    <svg class="icon icon-messages-fill">	
                      <use xlink:href="#icon-messages-fill"></use>
                    </svg>
                  </div><img class="w-100" src="img/content/user-6.jpg"/>
                </div>
                <div class="content w-100">
                  <div class="item-title d-flex align-items-center justify-content-between">
                    <div class="name me-1">Esmeralda</div>
                    <div class="login me-auto">@ethel</div>
                    <div class="time me-6">8H</div>
                  </div>
                  <div class="message text-truncate">Comment on <b>Smiles – 3D icons</b>
                  </div>
                </div></a>
            </div><a class="btn d-flex mx-3" href="/notification.html">See all notifications</a>
          </div>
        </div>
        <div class="nav-item user-item toggle-item">
          <div class="toggle-head nav-link"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-1.jpg'?>"></div>
          <div class="toggle-body">
            <div class="nav"><a class="item" href="shop.html">Profile</a><a class="item" href="settings.html">Edit profile</a></div>
            <div class="nav"><a class="item" href="customers-overview.html">
                <svg class="icon icon-bar-chart">	
                  <use xlink:href="#icon-bar-chart"></use>
                </svg>Analytics</a><a class="item" href="affiliate-center.html">
                <svg class="icon icon-ticket">	
                  <use xlink:href="#icon-ticket"></use>
                </svg>Affiliate center</a><a class="item" href="explore-creators.html">
                <svg class="icon icon-grid">	
                  <use xlink:href="#icon-grid"></use>
                </svg>Explore creators</a></div>
            <div class="nav"><a class="item purple" href="upgrade-to-pro.html">
                <svg class="icon icon-leaderboard">	
                  <use xlink:href="#icon-leaderboard"></use>
                </svg>Upgrade to Pro</a></div>
            <div class="nav"><a class="item" href="settings.html">Account settings</a><a class="item" href="sign-in.html">Log out</a></div>
          </div>
        </div>
      </div>
    </header>
    <aside class="sidebar d-flex flex-column position-fixed flex-nowrap p-5">
      <button class="close-sidebar js-close-sidebar position-absolute">
        <svg class="icon icon-close">	
          <use xlink:href="#icon-close"></use>
        </svg>
      </button><a class="logo flex-shrink-0" href="<?php echo esc_url( home_url() ); ?>"><img class="logo-dark" src="<?php echo get_stylesheet_directory_uri().'/img/logo-dark.png'?>"><img class="logo-light" src="img/logo-light.png"></a>
      <div class="nav nav-pills flex-column mb-auto mt-8 menu">
        <div class="nav-item mb-2"><a class="nav-link d-flex align-items-center p-3 active" href="<?php echo esc_url( home_url() ); ?>">
            <svg class="icon icon-double-home icon-item"> 
              <use class="fill" href="#icon-home-fill"></use>
              <use class="stroke" href="#icon-home-stroke"></use>
            </svg>Home</a></div>
			<?php
			global $wpdb;
			$page_title = $wp_query->post->post_title;
			$menus = wp_get_menu_array('Main Menu'); 
            foreach($menus as $menu){				
				?>
        <div class="nav-item mb-2">
          <div class="nav-link d-flex align-items-center p-3 collapsed" data-bs-target="#sidebar-<?php echo $menu['title']?>-collapse" data-bs-toggle="collapse">
            <svg class="icon icon-double-diamond icon-item"> 
              <use class="fill" href="#icon-diamond-fill"></use>
              <use class="stroke" href="#icon-diamond-stroke"></use>
            </svg><?php echo $menu['title']?>
            <svg class="icon icon-cheveron ms-auto arrow">	
              <use xlink:href="#icon-cheveron"></use>
            </svg>
          </div>
          <div class="collapse submenu" id="sidebar-<?php echo $menu['title']?>-collapse" data-bs-parent=".sidebar">
           <div class="wrapper">
		   <?php if(!empty($menu['children'])){ 
		          foreach($menu['children'] as $child){
		    ?>
		    <a class="nav-link d-flex align-items-center p-3" href="<?php echo $child['url']?>"><?php echo $child['title']?></a>
		    <a class="btn-plus" href="<?php echo home_url(); ?>/index.php/add-product/">
              <svg class="icon icon-min-plus">	
               <use xlink:href="#icon-min-plus"></use>
              </svg></a>
		   <?php } } ?>
				</div>
          </div>
		</div>
	     <?php } ?>
        <!--<div class="nav-item mb-2">
          <div class="nav-link d-flex align-items-center p-3 collapsed collapsed" data-bs-target="#sidebar-customers-collapse" data-bs-toggle="collapse">
            <svg class="icon icon-double-profile-circled icon-item"> 
              <use class="fill" href="#icon-profile-circled-fill"></use>
              <use class="stroke" href="#icon-profile-circled-stroke"></use>
            </svg>Customers
            <svg class="icon icon-cheveron ms-auto arrow">	
              <use xlink:href="#icon-cheveron"></use>
            </svg>
          </div>
          <div class="collapse submenu" id="sidebar-customers-collapse" data-bs-parent=".sidebar">
            <div class="wrapper"><a class="nav-link d-flex align-items-center p-3" href="customers-overview.html">Overview</a><a class="nav-link d-flex align-items-center p-3" href="customer-list.html">Customer list</a></div>
          </div>
        </div>
        <div class="nav-item mb-2"><a class="nav-link d-flex align-items-center p-3" href="shop.html">
            <svg class="icon icon-double-store icon-item"> 
              <use class="fill" href="#icon-store-fill"></use>
              <use class="stroke" href="#icon-store-stroke"></use>
            </svg>Shop</a>
		</div>
        <div class="nav-item mb-2">
          <div class="nav-link d-flex align-items-center p-3 collapsed collapsed" data-bs-target="#sidebar-income-collapse" data-bs-toggle="collapse">
            <svg class="icon icon-double-pie-chart icon-item"> 
              <use class="fill" href="#icon-pie-chart-fill"></use>
              <use class="stroke" href="#icon-pie-chart-stroke"></use>
            </svg>Income
            <svg class="icon icon-cheveron ms-auto arrow">	
              <use xlink:href="#icon-cheveron"></use>
            </svg>
          </div>
          <div class="collapse submenu" id="sidebar-income-collapse" data-bs-parent=".sidebar">
            <div class="wrapper"><a class="nav-link d-flex align-items-center p-3" href="income-earning.html">Earning</a><a class="nav-link d-flex align-items-center p-3" href="income-refounds.html">Refunds</a><a class="nav-link d-flex align-items-center p-3" href="income-payouts.html">Payouts</a><a class="nav-link d-flex align-items-center p-3" href="income-statements.html">Statements</a></div>
          </div>
        </div>
        <div class="nav-item mb-2"><a class="nav-link d-flex align-items-center p-3" href="promote.html">
            <svg class="icon icon-double-promote icon-item"> 
              <use class="fill" href="#icon-promote-fill"></use>
              <use class="stroke" href="#icon-promote-stroke"></use>
            </svg>Promote</a></div>
      </div>-->
      <button class="arrow-show js-show-sidebar p-3 mb-3 d-block d-xl-none">
        <svg class="icon icon-arrow">	
          <use xlink:href="#icon-arrow"></use>
        </svg>
      </button>
      <div class="border-top bottom pt-4">
        <div class="help-block js-help-sidebar d-flex align-items-center p-3 nav-link">
          <svg class="icon icon-help icon-item">	
            <use xlink:href="#icon-help"></use>
          </svg>Help & getting started
          <div class="badge purple ms-auto d-none d-xl-block">8</div>
        </div>
        <input id="switch-theme-input" type="checkbox">
        <label class="switch-theme js-theme-switch d-flex" for="switch-theme-input">
          <div class="mode-light d-flex flex-fill align-items-center justify-content-center">
            <div class="theme-icon">
              <svg class="icon icon-double-sun"> 
                <use class="fill" href="#icon-sun-fill"></use>
                <use class="stroke" href="#icon-sun-stroke"></use>
              </svg>
            </div>
            <div class="theme-text">Light</div>
          </div>
          <div class="mode-dark d-flex flex-fill align-items-center justify-content-center">
            <div class="theme-icon">
              <svg class="icon icon-double-moon"> 
                <use class="fill" href="#icon-moon-fill"></use>
                <use class="stroke" href="#icon-moon-stroke"></use>
              </svg>
            </div>
            <div class="theme-text">Dark</div>
          </div>
        </label>
      </div>
    </aside>
    <aside class="help-sidebar d-flex flex-column position-fixed flex-nowrap py-5 px-3">
      <div class="border-bottom help-head pb-4 mb-6">
        <div class="d-flex align-items-center p-3">
          <svg class="icon icon-help-fill me-3">	
            <use xlink:href="#icon-help-fill"></use>
          </svg>
          <div class="sidebar-text me-auto">Help & getting started</div>
          <button class="js-help-sidebar">
            <svg class="icon icon-close">	
              <use xlink:href="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="help-list mb-auto pb-3"><a class="item p-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
          <div class="thumb flex-shrink-0"><img srcset="img/content/product-1@2x.jpg 2x" src="img/content/product-1.jpg" alt="Exclusive downloads"/>
          </div>
          <div class="description">
            <div class="help-title mb-2">Exclusive downloads</div>
            <div class="caption-info d-flex">
              <div class="badge min purple me-1">New</div>
              <div class="user d-flex align-items-center">
                <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-1.jpg'?>" alt=""></div>
                <div class="time pe-2">3 mins</div>
              </div>
            </div>
          </div></a><a class="item p-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
          <div class="thumb flex-shrink-0"><img srcset="img/content/product-2@2x.jpg 2x" src="img/content/product-2.jpg" alt="Behind the scenes"/>
          </div>
          <div class="description">
            <div class="help-title mb-2">Behind the scenes</div>
            <div class="caption-info d-flex">
              <div class="badge min purple me-1">New</div>
              <div class="user d-flex align-items-center">
                <div class="userpic me-1"><img src="img/content/user-2.jpg" alt=""></div>
                <div class="time pe-2">3 mins</div>
              </div>
            </div>
          </div></a><a class="item p-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
          <div class="thumb flex-shrink-0"><img srcset="img/content/product-3@2x.jpg 2x" src="img/content/product-3.jpg" alt="Use guidelines"/>
          </div>
          <div class="description">
            <div class="help-title mb-2">Use guidelines</div>
            <div class="caption-info d-flex">
              <div class="user d-flex align-items-center">
                <div class="userpic me-1"><img src="img/content/user-3.jpg" alt=""></div>
                <div class="time pe-2">3 mins</div>
              </div>
            </div>
          </div></a><a class="item p-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
          <div class="thumb flex-shrink-0"><img srcset="img/content/product-4@2x.jpg 2x" src="img/content/product-4.jpg" alt="Life &amp; work update"/>
          </div>
          <div class="description">
            <div class="help-title mb-2">Life & work update</div>
            <div class="caption-info d-flex">
              <div class="user d-flex align-items-center">
                <div class="userpic me-1"><img src="img/content/user-4.jpg" alt=""></div>
                <div class="time pe-2">3 mins</div>
              </div>
            </div>
          </div></a><a class="item p-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
          <div class="thumb flex-shrink-0"><img srcset="img/content/product-5@2x.jpg 2x" src="img/content/product-5.jpg" alt="Promote your product"/>
          </div>
          <div class="description">
            <div class="help-title mb-2">Promote your product</div>
            <div class="caption-info d-flex">
              <div class="user d-flex align-items-center">
                <div class="userpic me-1"><img src="img/content/user-5.jpg" alt=""></div>
                <div class="time pe-2">3 mins</div>
              </div>
            </div>
          </div></a></div>
      <ul class="nav nav-pills flex-column mt-3"><a class="nav-link d-flex align-items-center p-3" href="upgrade-to-pro.html">
          <svg class="icon icon-zap me-3">	
            <use xlink:href="#icon-zap"></use>
          </svg><span class="sidebar-text me-auto">Upgrade to Pro</span>
          <svg class="icon icon-cheveron">	
            <use xlink:href="#icon-cheveron"></use>
          </svg></a><a class="nav-link d-flex align-items-center p-3" href="index.html">
          <svg class="icon icon-download me-3">	
            <use xlink:href="#icon-download"></use>
          </svg><span class="sidebar-text me-auto">Download desktop app</span></a><a class="nav-link d-flex align-items-center p-3" href="message-center.html">
          <svg class="icon icon-messages-stroke me-3">	
            <use xlink:href="#icon-messages-stroke"></use>
          </svg><span class="sidebar-text me-auto">Message center</span>
          <div class="badge red">8</div></a></ul>
    </aside>
	
    