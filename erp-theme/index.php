<?php
/**
    * Template Name: Front Page
*/
?>
<?php
get_header();
// Json Data FOR Customers
  $customers = '[ {  
         "name":"Chelsie Haley",
         "image":"img/content/user-2.jpg",
		 "progress":"56"
        },
        {  
         "name":"Filomena Fahey",
         "image":"img/content/user-3.jpg",
		 "progress":"32"
       },
       {  
         "name":"Orion Luettgen",
         "image":"img/content/user-4.jpg",
		 "progress":"70"
		},
	    {  
         "name":"Brown Beatty",
         "image":"img/content/user-5.jpg",
		 "progress":"44"
        },
	    {  
         "name":"Bessie Runolfsson",
         "image":"img/content/user-6.jpg",
		 "progress":"38"
        },
		 {  
         "name":"Orion Luettgen",
         "image":"img/content/user-1.jpg",
		 "progress":"15"
        },
		{  
         "name":"Daniel vitory",
         "image":"img/content/user-3.jpg",
		 "progress":"28"
        }
   ]';
    $customers=json_decode($customers);
	$total_customers=count($customers);
	$page_id=$post->ID;
	
	// Transaction Json
	
	 $transactions = '[ { 
         "image":"img/content/user-2.jpg",	 
         "name":"Chelsie Haley",
         "rate":"-$4.20",
		 "ttime":"4 Aug 1:00PM"
        },
        { 
         "image":"img/content/user-2.jpg",		
         "name":"Filomena Fahey",
         "rate":"$400",
		 "ttime":"13 Aug 3:10PM"
       },
       { 
         "image":"img/content/user-2.jpg",	   
         "name":"Orion Luettgen",
         "rate":"$420",
		 "ttime":"8 Aug 2:00PM"
		},
	    {
         "image":"img/content/user-2.jpg",			
         "name":"Brown Beatty",
         "rate":"$300",
		 "ttime":"10 Aug 3:05PM"
        }
   ]';
    $transactions=json_decode($transactions);
?>
    <main>
      <div class="page pt-5 px-4 pt-sm-6 px-sm-5 pt-xl-7 px-xl-7">
        <div class="page-head">
          <div class="h3 mb-4 mb-xl-5">
		  <?php
		  if($page_id == 47){
			  echo "OnlyFans-Client View";
		  }
		  else {
			  echo "OnlyFans-Home";
		  }
		  ?>
		 </div>
        </div>
        <div class="page-body">
          <div class="row g-0">
            <div class="col-lg-8 col-12 pe-lg-2">
			 <?php
			 if($page_id == 47){
			 ?>
			   <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color red">Transaction</div>
                  <select class="select select-small">
                    <option>All time</option>
                    <option>In a year</option>
                    <option>Per month</option>
                  </select>
                </div>
                <div class="card-body p-0">
			<?php
            foreach($transactions as $trans){
             ?>			
			 <div class="card-body customers-tabs p-0 d-flex align-items-start">
              <div class="row g-0 customers-list">
                <div class="sheet-table d-block d-md-table">                 
                  <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4 my-ow">
                    <div class="sheet-cell nav d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <a class="js-customer-show sheet-table-item d-flex align-items-center">
                        <div class="userpic me-3 flex-shrink-0">
						<img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/'.$trans->image?>" alt="Filomena Fahey"/></div>
                        <div class="sheet-table-details">
                         <div class="fw-bold mb-1"><?php echo $trans->name?></div>
                          <div class="caption text-shades-1">username</div>
                        </div>
                      </a>
                    </div>
                    <div class="sheet-table-details">
                     <div class="fw-bold mb-1"><?php echo $trans->rate ?></div>
                       <div class="caption text-shades-1"><?php echo $trans->ttime ?></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			<?php } ?>
			 <!--<div class="overview-container tab-content">
                    <div class="tab-pane overview-item fade active show" id="overview-item-1" role="tabpanel" aria-labelledby="overview-1">
                      <div class="users">
                        <div class="users-head d-flex align-items-center justify-content-between mb-4">
                          <div class="users-info">Welcome <b>857 customers</b> with a personal message 😎</div><a class="btn-stroke" href="message-center.html">Send <span class="ms-1 d-none d-sm-block" >message</span></a>
                        </div>
                        <div class="users-list d-flex justify-content-around"><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-2.jpg'?>"></div>
                            <div class="name">Gladyce</div></a><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-3.jpg'?>"></div>
                            <div class="name">Elbert</div></a><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-4.jpg'?>"></div>
                            <div class="name">Joyce</div></a><a class="users-item text-center d-none d-sm-block" href="customer-list.html">
                            <div class="icon-all d-flex align-items-center justify-content-center">
                              <svg class="icon icon-arrow">	
                                <use xlink:href="#icon-arrow"></use>
                              </svg>
                            </div>
                            <div class="name">View all</div></a></div>
                      </div>
                    </div>
                    <div class="tab-pane overview-item fade" id="overview-item-2" role="tabpanel" aria-labelledby="overview-2">
                      <div class="chart chart-overview-income">
                        <div id="overview-income"></div>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
			 
			 <?php } else { ?>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color red">Overview</div>
                  <select class="select select-small">
                    <option>All time</option>
                    <option>In a year</option>
                    <option>Per month</option>
                  </select>
                </div>
                <div class="card-body p-0">
                  <div class="overview js-animate-tabs p-2">
                    <div class="tabs nav flex-nowrap">
                      <div class="tab d-xs-block d-sm-flex" id="overview-1" data-bs-target="#overview-item-1" data-bs-toggle="tab">
                        <div class="overview-icon d-flex justify-content-center align-items-center bg-light-blue">
                          <svg class="icon icon-shopping-bag-stroke">	
                            <use xlink:href="#icon-shopping-bag-stroke"></use>
                          </svg>
                        </div>
                        <div class="overview-details">
                          <div class="caption d-flex align-items-center mb-1">Customers
                            <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Small description">
                              <svg class="icon icon-info">	
                                <use xlink:href="#icon-info"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="h2 counter mb-auto"><?php echo $total_customers ?></div>
                        </div>
                        <div class="balance d-inline-flex align-items-center px-1 down ms-auto fill" title="Core - Dashboard Builder">
                          <svg class="icon icon-arrow-up me-1 d-block">	
                            <use xlink:href="#icon-arrow-up"></use>
                          </svg>37.8%<span> </span>
                        </div>
                      </div>
                      <div class="tab d-xs-block d-sm-flex" id="overview-2" data-bs-target="#overview-item-2" data-bs-toggle="tab">
                        <div class="overview-icon d-flex justify-content-center align-items-center bg-light-purple">
                          <svg class="icon icon-activity">	
                            <use xlink:href="#icon-activity"></use>
                          </svg>
                        </div>
                        <div class="overview-details">
                          <div class="caption d-flex align-items-center mb-1">Income
                            <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Small description">
                              <svg class="icon icon-info">	
                                <use xlink:href="#icon-info"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="h2 counter mb-auto">256k</div>
                        </div>
                        <div class="balance d-inline-flex align-items-center px-1 up ms-auto fill" title="Core - Dashboard Builder">
                          <svg class="icon icon-arrow-up me-1 d-block">	
                            <use xlink:href="#icon-arrow-up"></use>
                          </svg>38.2%<span> </span>
                        </div>
                      </div>
                      <div class="bg-tab-active"></div>
                    </div>
                  </div>
				  <div class="border-bottom chart chart-overview-income pb-5 mb-6">
                    <div id="overview-income"></div>
                  </div>
                  <!--<div class="overview-container tab-content">
                    <div class="tab-pane overview-item fade active show" id="overview-item-1" role="tabpanel" aria-labelledby="overview-1">
                      <div class="users">
                        <div class="users-head d-flex align-items-center justify-content-between mb-4">
                          <div class="users-info">Welcome <b>857 customers</b> with a personal message 😎</div><a class="btn-stroke" href="message-center.html">Send <span class="ms-1 d-none d-sm-block" >message</span></a>
                        </div>
                        <div class="users-list d-flex justify-content-around"><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-2.jpg'?>"></div>
                            <div class="name">Gladyce</div></a><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-3.jpg'?>"></div>
                            <div class="name">Elbert</div></a><a class="users-item text-center" href="message-center.html">
                            <div class="userpic"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-4.jpg'?>"></div>
                            <div class="name">Joyce</div></a><a class="users-item text-center d-none d-sm-block" href="customer-list.html">
                            <div class="icon-all d-flex align-items-center justify-content-center">
                              <svg class="icon icon-arrow">	
                                <use xlink:href="#icon-arrow"></use>
                              </svg>
                            </div>
                            <div class="name">View all</div></a></div>
                      </div>
                    </div>
                    <div class="tab-pane overview-item fade" id="overview-item-2" role="tabpanel" aria-labelledby="overview-2">
                      <div class="chart chart-overview-income">
                        <div id="overview-income"></div>
                      </div>
                    </div>
                  </div>-->
                </div>
              </div>
			 <?php } ?>
			  
              <!--<div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color purple">Sales</div>
                  <select class="select select-small">
                    <option>Last 7 days</option>
                    <option>All time</option>
                    <option>In a year</option>
                    <option>Per month</option>
                  </select>
                </div>
                <!--<div class="chart chart-product-views">
                  <div id="product-views"></div>
                </div>
				<div class="chart chart-active-customers">
                  <div id="active-customers"></div>
                </div>
              </div>-->
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color green">Sources</div>
                </div>
				<div class="chart chart-active-customers">
                  <div id="active-customers"></div>
                </div>
				<p></p>
				<hr>
				<div class="task-tutorial">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2">
                          <h6>Source</h6>
                         <p><span class="tutorial-wt" style="background-color: #fff;"></span>Subscriptions</p>
                          <p> <span class="tutorial-wt" style="background-color: #fff;"></span>Pay Per View</p>
                          <p> <span class="tutorial-wt" style="background-color: #fff;"></span>Tips</p>                         
                        </div>
                       <div class="col-md-2">
                        <h6>Total</h6>
                          <p>597 490</p>
                          <p>467 896 </p>
                          <p>543 541</p>  
                       </div>
                       <div class="col-md-2">
                        <h6>Today</h6>
                          <p>120 430</p>
                          <p>3210 </p>
                          <p>120</p>  
                      </div>
                       <div class="col-md-2">
                        <h6>Status</h6>
                         <!--<p><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></p>
 <p><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></p>
 <p><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div></p>-->
<div class="dash-bord">
<div class="progress-ts">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
  <div class="progress-stripes"></div>
    <span class="sr-only"><!-- 40% Complete (success) --></span>
  </div>
</div> 
<div class="progress-ts">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
  <div class="progress-stripes"></div>
    <span class="sr-only"><!-- 40% Complete (success) --></span>
  </div>
  
</div> 
<div class="progress-ts">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
  <div class="progress-stripes"></div>
    <span class="sr-only"><!-- 40% Complete (success) --></span>
  </div>
  
</div> 
</div>                    </div>
                       <div class="col-md-2">
                        <h6>Percent</h6>
                        <ul>
                          <li>70%</li>
                           <li>7% </li>
                            <li>23%</li>  
                        </ul>
                      </div>
                       <div class="col-md-2">
                        <h6>Dynamics</h6>
                        <div class="percent-w">
                         <ul> 
                          <li>90%</li>
                           <li>10% </li>
                            <li>13%</li> 
                       </ul> 
                     </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--<div class="tips">
                  <div class="card-info mb-4">Need some ideas for the next product?</div>
                  <div class="tips-list row g-0">
                    <div class="col-12 col-sm-6 pe-lg-2">
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-schedule">	
                            <use xlink:href="#icon-schedule"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Early access</div>
                          <div class="caption-info d-flex">
                            <div class="badge min purple me-1">New</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-1.jpg'?>" alt=""></div>
                              <div class="time pe-2">3 mins read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-design">	
                            <use xlink:href="#icon-design"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Exclusive downloads</div>
                          <div class="caption-info d-flex">
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-2.jpg'?>" alt=""></div>
                              <div class="time pe-2">3 mins</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-phone">	
                            <use xlink:href="#icon-phone"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Asset use guidelines</div>
                          <div class="caption-info d-flex">
                            <div class="badge min green me-1">Popular</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-3.jpg'?>" alt=""></div>
                              <div class="time pe-2">Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-6 pe-lg-2">
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-arrow">	
                            <use xlink:href="#icon-arrow"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Asset use guidelines</div>
                          <div class="caption-info d-flex">
                            <div class="badge min green me-1">Small label</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-4.jpg'?>" alt=""></div>
                              <div class="time pe-2">Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-video-recorder">	
                            <use xlink:href="#icon-video-recorder"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Behind the scenes</div>
                          <div class="caption-info d-flex">
                            <div class="badge min red me-1">Hot</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-5.jpg'?>" alt=""></div>
                              <div class="time pe-2">3 mins read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tips-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-multiselect">	
                            <use xlink:href="#icon-multiselect"></use>
                          </svg>
                        </div>
                        <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Life & work updates</div>
                          <div class="caption-info d-flex">
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/user-6.jpg'?>" alt=""></div>
                              <div class="time pe-2">3 mins read</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>-->
              </div>
              <!--<div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color blue">Get more customers!</div>
                </div>
                <div class="card-info">50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now! 🔥</div>
                <div class="mt-4 d-flex mx-n3"><a class="btn-stroke hover-fill w-100 mx-2" href="https://www.facebook.com/ui8.net/">
                    <svg class="icon icon-facebook me-0 me-sm-2">	
                      <use xlink:href="#icon-facebook"></use>
                    </svg><span class="d-none d-sm-block">Facebook</span></a><a class="btn-stroke hover-fill w-100 mx-2" href="https://twitter.com/ui8">
                    <svg class="icon icon-twitter me-0 me-sm-2">	
                      <use xlink:href="#icon-twitter"></use>
                    </svg><span class="d-none d-sm-block">Twitter</span></a><a class="btn-stroke hover-fill w-100 mx-2" href="https://www.instagram.com/ui8net/">
                    <svg class="icon icon-instagram me-0 me-sm-2">	
                      <use xlink:href="#icon-instagram"></use>
                    </svg><span class="d-none d-sm-block">Instagram</span></a></div>
              </div>-->
            </div>
            <div class="col-lg-4 col-12">
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title">Top</div>
                </div>
                <div class="popular">
                  <!--<div class="border-bottom d-flex justify-content-between pb-4 mb-4">
                    <div class="caption">Products</div>
                    <div class="caption">Earning</div>
                  </div>-->
                  <div class="popular-list"> 
				    <?php 
					foreach($customers as $data){
					?>
                     <div class="popular-item  py-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                      <div class="popular-preview flex-shrink-0 me-3"> 
                        <img src="<?php echo get_stylesheet_directory_uri().'/'.$data->image?>">
                      </div>
                       <progress id="file" value="<?php echo $data->progress?>" max="100"> <?php echo $data->progress?>%</progress>
                      <div class="popular-details flex-shrink-0 ms-auto text-end">
                        <div class="popular-price"><?php echo $data->progress?>%</div>
                      </div>
                    </div>
                    <?php } ?> 					
					</div>
				</div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title">Top Selling Countries</div>
                </div>
                 <div class="mapping-warp">
                    <img src="<?php echo get_stylesheet_directory_uri().'/img/content/earth-img.jpeg'?>">
                </div>
                <div class="review-card">
                  <div class="border-bottom review-item d-flex ">
                    <div class="review-userpic me-3 flex-shrink-0"><h6>2.650</h6>
                       <p>total creators</p>
                    </div>
                    <div class="review-details flex-grow-1">
                      <img src="<?php echo get_stylesheet_directory_uri().'/img/content/friend icon.webp'?>">
                        <div class="review-title d-flex align-items-center"> </div>     
                    </div>
                  </div>
                  <div class="border-bottom review-item d-flex  ">
                  <div class="review-userpic me-3 flex-shrink-0 justify-content-start"><p>USA</p></div>
                  <div class="tips-item d-flex align-items-center justify-content-end" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <!---<div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-arrow"> 
                            <use xlink:href="#icon-arrow"></use>
                          </svg>
                        </div>
                       <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Asset use guidelines</div>
                          <div class="caption-info d-flex">
                            <div class="badge min green me-1">Small label</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="img/content/user-4.jpg" alt=""></div>
                              <div class="time pe-2">Time</div>-->
                    <div class="review-details flex-grow-1 ">
                     <span class="time text-shades-1">1.350</span>
                        <span class="usa-money">$99.5k</span>
                      </div>
                       
                    </div>
                  </div>
                  <div class="border-bottom review-item d-flex ">
                  <div class="review-userpic me-3 flex-shrink-0 justify-content-start"><p>Canada</p></div>
                  <div class="tips-item d-flex align-items-center justify-content-end" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <!---<div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-arrow"> 
                            <use xlink:href="#icon-arrow"></use>
                          </svg>
                        </div>
                       <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Asset use guidelines</div>
                          <div class="caption-info d-flex">
                            <div class="badge min green me-1">Small label</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="img/content/user-4.jpg" alt=""></div>
                              <div class="time pe-2">Time</div>-->
                    <div class="review-details flex-grow-1 ">
                     <span class="time text-shades-1">1.120</span>
                        <span class="usa-money">$84.5k</span>
                      </div>
                       
                    </div>
                  </div>
                  <div class="border-bottom review-item d-flex  ">
                  <div class="review-userpic me-3 flex-shrink-0 justify-content-start"><p>Germany</p></div>
                  <div class="tips-item d-flex align-items-center justify-content-end" data-bs-toggle="modal" data-bs-target="#modal-video">
                        <!---<div class="tips-icon d-flex align-items-center justify-content-center me-3 flex-shrink-0">
                          <svg class="icon icon-arrow"> 
                            <use xlink:href="#icon-arrow"></use>
                          </svg>
                        </div>
                       <div class="tips-details flex-shrink-0">
                          <div class="tips-title mb-2">Asset use guidelines</div>
                          <div class="caption-info d-flex">
                            <div class="badge min green me-1">Small label</div>
                            <div class="user d-flex align-items-center">
                              <div class="userpic me-1"><img src="img/content/user-4.jpg" alt=""></div>
                              <div class="time pe-2">Time</div>-->
                    <div class="review-details flex-grow-1 ">
                     <span class="time text-shades-1">960.0</span>
                        <span class="usa-money">$90.1k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <!-- <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color red">Refund requests</div>
                </div>
                <div class="refound-card">
                  <div class="refound-item d-flex align-items-start mb-5">
                    <div class="refound-icon bg-tint-red flex-shrink-0 rounded-circle">
                      <svg class="icon icon-basket m-3 fill-red">	
                        <use xlink:href="#icon-basket"></use>
                      </svg>
                    </div>
                    <div class="refound-content ms-3 text-shades-1">You have <b>52 open refund requests</b> to action. This includes <b>8 new requests</b>. 👀</div>
                  </div><a class="btn-stroke w-100" href="income-refunds.html">Review refund requests</a>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </main>
<?php
get_footer();