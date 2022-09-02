<?php
/**
    * Template Name: Product Dashboard
*/
?>
<?php
get_header();
?>
<main>
      <div class="page pt-5 px-4 pt-sm-6 px-sm-5 pt-xl-7 px-xl-7">
        <div class="page-head">
          <div class="h3 mb-4 mb-xl-5">Products dashboard</div>
        </div>
        <div class="page-body">
          <div class="row g-0">
            <div class="col-12">
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
                  <div class="stock-list row gx-4 flex-nowrap">
                    <div class="stock-item stock-green col p-6 mx-2 flex-shrink-0 flex-grow-1">
                      <div class="stock-icon p-3 rounded-circle d-inline-block mb-4">
                        <svg class="icon icon-activity">	
                          <use xlink:href="#icon-activity"></use>
                        </svg>
                      </div>
                      <div class="d-flex">
                        <div class="stock-details">
                          <div class="stock-caption caption d-flex align-items-center mb-1">Earning
                            <div class="info-tooltip ps-1" data-bs-toggle="tooltip" title="Small description">
                              <svg class="icon icon-info">	
                                <use xlink:href="#icon-info"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="counter h2">128k</div>
                          <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                            <svg class="icon icon-arrow-up me-1 d-block">	
                              <use xlink:href="#icon-arrow-up"></use>
                            </svg>37.8%<span> 
                              <div class="caption ps-1 text-nowrap">this week</div></span>
                          </div>
                        </div>
                        <div class="stock-chart ms-auto">
                          <div id="stock-customer"></div>
                        </div>
                      </div>
                    </div>
                    <div class="stock-item stock-blue col p-6 mx-2 flex-shrink-0 flex-grow-1">
                      <div class="stock-icon p-3 rounded-circle d-inline-block mb-4">
                        <svg class="icon icon-shopping-bag-stroke">	
                          <use xlink:href="#icon-shopping-bag-stroke"></use>
                        </svg>
                      </div>
                      <div class="d-flex">
                        <div class="stock-details">
                          <div class="stock-caption caption d-flex align-items-center mb-1">Customer
                            <div class="info-tooltip ps-1" data-bs-toggle="tooltip" title="Small description">
                              <svg class="icon icon-info">	
                                <use xlink:href="#icon-info"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="counter h2">512</div>
                          <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                            <svg class="icon icon-arrow-up me-1 d-block">	
                              <use xlink:href="#icon-arrow-up"></use>
                            </svg>37.8%<span> 
                              <div class="caption ps-1 text-nowrap">this week</div></span>
                          </div>
                        </div>
                        <div class="stock-chart ms-auto">
                          <div id="stock-earning"></div>
                        </div>
                      </div>
                    </div>
                    <div class="stock-item stock-purple col p-6 mx-2 flex-shrink-0 flex-grow-1">
                      <div class="stock-icon p-3 rounded-circle d-inline-block mb-4">
                        <svg class="icon icon-payment">	
                          <use xlink:href="#icon-payment"></use>
                        </svg>
                      </div>
                      <div class="d-flex">
                        <div class="stock-details">
                          <div class="stock-caption caption d-flex align-items-center mb-1">Payouts
                            <div class="info-tooltip ps-1" data-bs-toggle="tooltip" title="Small description">
                              <svg class="icon icon-info">	
                                <use xlink:href="#icon-info"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="counter h2">64k</div>
                          <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                            <svg class="icon icon-arrow-up me-1 d-block">	
                              <use xlink:href="#icon-arrow-up"></use>
                            </svg>37.8%<span> 
                              <div class="caption ps-1 text-nowrap">this week</div></span>
                          </div>
                        </div>
                        <div class="stock-chart ms-auto">
                          <div id="stock-payouts"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-8 col-12 pe-lg-2">
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color green">Product activity</div>
                  <select class="select select-small d-none d-sm-inline-flex">
                    <option>Last 7 days</option>
                    <option>All time</option>
                    <option>In a year</option>
                    <option>Per month</option>
                  </select>
                </div>
                <div class="activity">
                  <div class="border-bottom row pb-5 g-0 d-none d-sm-flex">
                    <div class="col caption">Week</div>
                    <div class="col caption">
					</div>
                    <div class="col caption">Views</div>
                    <div class="col caption">Likes</div>
                    <div class="col caption">Comments</div>
                  </div>
                  <div class="border-bottom row pb-5 pt-0 pt-sm-6 g-0 d-block d-sm-flex">
                    <div class="col py-2 p-sm-0 fs-8 text-shades-1"> 
                      <div class="d-inline-block d-sm-none caption w-25">Week</div>25 Sep - 1 Oct
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Products</div>
                      <div class="badge green me-1">8 </div>
                      <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Views</div>
                      <div class="badge purple me-1">24k</div>
                      <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Likes</div>
                      <div class="badge blue me-1">48</div>
                      <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Comments</div>
                      <div class="badge yellow me-1">16</div>
                      <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>36%<span> </span>
                      </div>
                    </div>
                  </div>
                  <div class="row pt-5 g-0 d-block d-sm-flex">
                    <div class="col py-2 p-sm-0 fs-8 text-shades-1"> 
                      <div class="d-inline-block d-sm-none caption w-25">Week</div>25 Sep - 1 Oct
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Products</div>
                      <div class="badge green me-1">8 </div>
                      <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Views</div>
                      <div class="badge purple me-1">24k</div>
                      <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Likes</div>
                      <div class="badge blue me-1">48</div>
                      <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>37.8%<span> </span>
                      </div>
                    </div>
                    <div class="col py-2 p-sm-0 d-flex align-items-center">
                      <div class="d-inline-block d-sm-none caption w-25">Comments</div>
                      <div class="badge yellow me-1">16</div>
                      <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                        <svg class="icon icon-arrow-up me-1 d-block">	
                          <use xlink:href="#icon-arrow-up"></use>
                        </svg>36%<span> </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav row gx-4 mt-5 d-flex d-sm-none">
                  <div class="btn-tab btn-small active col mx-2" data-bs-toggle="tab">Last 2 weeks</div>
                  <div class="btn-tab btn-small col mx-2" data-bs-toggle="tab">Last 7 days</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color blue">Product views</div>
                </div>
                <div class="chart product-views-small">
                  <div id="product-views-small"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col">
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5">
                  <div class="title title-color purple me-5 mb-4 mb-sm-0">Products</div>
                  <div class="search-input input-group me-sm-5 mb-3 mb-sm-0">
                    <button class="input-group-text transparent">
                      <svg class="icon icon-search">	
                        <use xlink:href="#icon-search"></use>
                      </svg>
                    </button>
                    <input class="form-control input-small input-action rounded-2" type="text" placeholder="Search product">
                  </div>
                  <div class="nav row gx-4 ms-auto flex-nowrap d-none d-md-flex">
                    <div class="btn-tab btn-small active col mx-2" data-bs-target="#tab-products" data-bs-toggle="tab">Market</div>
                    <div class="btn-tab btn-small col mx-2" data-bs-target="#tab-traffic" data-bs-toggle="tab">Traffic sources</div>
                    <div class="btn-tab btn-small col mx-2" data-bs-target="#tab-viewers" data-bs-toggle="tab">Viewers</div>
                  </div>
                  <select class="select select-small tabs select-wide select-fill ms-auto d-md-none">
                    <option value="#tab-products">Market</option>
                    <option value="#tab-traffic">Traffic sources</option>
                    <option value="#tab-viewers">Viewers</option>
                  </select>
                </div>
                <div class="products tab-content">
                  <div class="tab-pane fade active show" id="tab-products" role="tabpanel">
                    <div class="row g-0">
                      <div class="sheet-table d-block d-md-table">
                        <div class="border-bottom d-none d-md-table-row">
                          <div class="checkbox-cell d-table-cell py-4 px-3">
                            <input class="form-check-input" data-group-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="d-table-cell pb-4 px-3 caption">Product</div>
                          <div class="d-table-cell pb-4 px-3 caption">Status</div>
                          <div class="d-table-cell pb-4 px-3 caption">Price</div>
                          <div class="d-table-cell pb-4 px-3 caption">Sales</div>
                          <div class="d-table-cell pb-4 px-3 caption">Views</div>
                          <div class="d-none d-lg-table-cell pb-4 px-3 caption">Likes</div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg" alt="Bento Matte 3D Illustration'?>"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$98</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$98</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$3,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>55.8%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">8</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$64</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$64</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$2,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>5%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">23</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 46%;" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$56</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min red-light">Deactive</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$56</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$1,650</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>22.3%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">16k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 32%;" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">12</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$98</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$98</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$3,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>55.8%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">8</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$64</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$64</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$2,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>5%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">23</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 46%;" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$56</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min red-light">Deactive</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$56</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$1,650</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>22.3%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">16k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 32%;" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">12</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$98</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$98</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$3,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>55.8%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">8</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$64</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$64</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$2,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>5%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">23</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 46%;" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$56</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min red-light">Deactive</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$56</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$1,650</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>22.3%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">16k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 32%;" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">12</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$98</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$98</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$3,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>55.8%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">8</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$64</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min green-light">Active</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$64</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$2,200</div>
                              <div class="balance d-inline-flex align-items-center px-1 down" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>5%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">48k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">23</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 46%;" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="product" type="checkbox"/>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="d-flex align-items-center">
                                  <div class="badge common me-3 d-block d-md-none">$56</div>
                                  <div class="caption">UI design kit</div>
                                </div>
                              </div></a></div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Status</div>
                            <div class="badge min red-light">Deactive</div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3">$56</div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Sales</div>
                            <div class="d-inline-flex">
                              <div class="badge common me-1">$1,650</div>
                              <div class="balance d-inline-flex align-items-center px-1 up" title="Core - Products dashboard">
                                <svg class="icon icon-arrow-up me-1 d-block">	
                                  <use xlink:href="#icon-arrow-up"></use>
                                </svg>22.3%<span> </span>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Views</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">16k</div>
                              <div class="progress">
                                <div class="progress-bar blue" role="progressbar" style="width: 32%;" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                          <div class="sheet-cell d-block d-md-none d-lg-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="d-inline-block d-md-none caption">Likes</div>
                            <div class="d-inline-flex align-items-center">
                              <div class="badge common me-2">12</div>
                              <div class="progress">
                                <div class="progress-bar red" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                      <div class="btn-rounded-stroke hover-border btn-small me-4">
                        <svg class="icon icon-arrow-left">	
                          <use xlink:href="#icon-arrow-left"></use>
                        </svg>
                      </div>
                      <div class="btn-rounded-stroke hover-border btn-small me-4">
                        <svg class="icon icon-arrow">	
                          <use xlink:href="#icon-arrow"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab-traffic" role="tabpanel">
                    <div class="row g-0">
                      <div class="sheet-table d-block d-md-table">
                        <div class="border-bottom border-md-none d-table-row">
                          <div class="checkbox-cell d-none d-md-table-cell py-4 px-3">
                            <input class="form-check-input" data-group-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="d-none d-md-table-cell pb-4 px-3 caption">Product</div>
                          <div class="d-table-cell pb-2 pb-md-4 px-0 px-md-3 caption">
                            <div class="d-flex">
                              <div class="me-auto d-none d-lg-block">Traffic source</div>
                              <div class="d-flex flex-shrink-1 flex-md-shrink-0 flex-wrap">
                                <div class="d-flex align-items-center pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-red me-3"></div>Market
                                </div>
                                <div class="d-flex align-items-center ps-0 ps-md-4 pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-purple me-3"></div>Social media
                                </div>
                                <div class="d-flex align-items-center ps-0 ps-md-4 pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-green me-3"></div>Direct
                                </div>
                                <div class="d-flex align-items-center ps-0 ps-md-4 pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-blue me-3"></div>UI8
                                </div>
                                <div class="d-flex align-items-center ps-0 ps-md-4 pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-yellow me-3"></div>Others
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-red" role="progressbar" style="width: 34%;" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-red&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-purple" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Social media</div><span class=&apos;light-purple&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 64%;" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-blue" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 23%;" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-red" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-red&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Direct</div><span class=&apos;light-green&apos;></span>550k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-red" role="progressbar" style="width: 34%;" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-red&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-purple" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Social media</div><span class=&apos;light-purple&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 64%;" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-blue" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 23%;" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-red" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-red&apos;></span>550k"></div>
                              <div class="progress-bar light-blue" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-blue&apos;></span>720k"></div>
                              <div class="progress-bar light-yellow" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-yellow&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="checkbox-cell col sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="traffic" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Direct</div><span class=&apos;light-green&apos;></span>550k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 text-center">
                      <div class="btn-stroke">
                        <div class="spinner-border me-2" role="status"></div>Loading
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab-viewers" role="tabpanel">
                    <div class="row g-0">
                      <div class="sheet-table d-block d-md-table">
                        <div class="border-bottom border-md-none d-table-row">
                          <div class="checkbox-cell d-none d-md-table-cell py-4 px-3">
                            <input class="form-check-input" data-group-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="d-none d-md-table-cell pb-4 px-3 caption">Product</div>
                          <div class="d-table-cell pb-2 pb-md-4 px-0 px-md-3 caption">
                            <div class="d-flex">
                              <div class="me-auto d-none d-lg-block">Viewer</div>
                              <div class="d-flex flex-shrink-1 flex-md-shrink-0 flex-wrap">
                                <div class="d-flex align-items-center pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-green me-3"></div>Followers
                                </div>
                                <div class="d-flex align-items-center ps-0 ps-md-4 pe-4 pe-md-0 py-2 py-md-0">
                                  <div class="indicator bg-light-purple me-3"></div>Others
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 44%;" aria-valuenow="44" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-green&apos;></span>550k"></div>
                              <div class="progress-bar light-purple" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-purple&apos;></span>720k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 12%;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Social media</div><span class=&apos;light-green&apos;></span>550k"></div>
                              <div class="progress-bar light-purple" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-purple&apos;></span>720k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-green&apos;></span>720k"></div>
                              <div class="progress-bar light-purple" role="progressbar" style="width: 23%;" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Others</div><span class=&apos;light-purple&apos;></span>960k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 52%;" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Market</div><span class=&apos;light-green&apos;></span>550k"></div>
                              <div class="progress-bar light-purple" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>UI8</div><span class=&apos;light-purple&apos;></span>720k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                          <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                            <input class="form-check-input" data-item-checkbox="viewers" type="checkbox"/>
                          </div>
                          <div class="col col-md-4 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                              <div class="sheet-table-preview md-horizontal-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                              <div class="sheet-table-details">
                                <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                                <div class="caption">UI design kit</div>
                              </div></a></div>
                          <div class="col col-md-8 sheet-statistic-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                            <div class="progress">
                              <div class="progress-bar light-green" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Direct</div><span class=&apos;light-green&apos;></span>550k"></div>
                              <div class="progress-bar light-purple" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-bs-custom-class="tooltip-progress" data-bs-toggle="tooltip" data-bs-html="true" title="<div>Direct</div><span class=&apos;light-purple&apos;></span>550k"></div>
                            </div>
                            <div class="table-btn-actions position-absolute d-flex mt-4 mt-md-5 opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-messages-stroke">	
                                  <use xlink:href="#icon-messages-stroke"></use>
                                </svg>
                              </div>
                              <div class="action-item">
                                <button class="action-head btn-action-small">
                                  <svg class="icon icon-more-horizontal">	
                                    <use xlink:href="#icon-more-horizontal"></use>
                                  </svg>
                                </button>
                                <div class="action-body p-3">
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit product
                                  </button>
                                  <button class="action-item d-block d-md-none">
                                    <svg class="icon icon-messages-stroke">	
                                      <use xlink:href="#icon-messages-stroke"></use>
                                    </svg>View comment
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-edit">	
                                      <use xlink:href="#icon-edit"></use>
                                    </svg>Edit title & description
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-link">	
                                      <use xlink:href="#icon-link"></use>
                                    </svg>Get shareable link
                                  </button>
                                  <button class="action-item">
                                    <svg class="icon icon-trash">	
                                      <use xlink:href="#icon-trash"></use>
                                    </svg>Delete forever
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 text-center">
                      <div class="btn-stroke">
                        <div class="spinner-border me-2" role="status"></div>Loading
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
<?php
get_footer();