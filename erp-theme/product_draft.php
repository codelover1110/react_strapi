<?php
/**
    * Template Name: Product Draft
*/
?>
<?php
get_header();
?>
<main>
      <div class="page pt-5 px-4 pt-sm-6 px-sm-5 pt-xl-7 px-xl-7">
        <div class="page-head">
          <div class="h3 mb-4 mb-xl-5">Drafts</div>
        </div>
        <div class="page-body pb-4 pb-xl-6">
          <div class="card mb-2 p-4 p-sm-5">
            <div class="card-head d-flex flex-wrap align-items-center justify-content-between mb-2 mb-sm-7">
              <div class="title title-color purple me-5 mb-4 mb-sm-0">Products</div>
              <div class="search-input input-group me-sm-5 mb-3 mb-sm-0 order-2 order-sm-1">
                <button class="input-group-text transparent">
                  <svg class="icon icon-search">	
                    <use xlink:href="#icon-search"></use>
                  </svg>
                </button>
                <input class="form-control input-small input-action rounded-2" type="text" placeholder="Search product">
              </div>
              <div class="nav row gx-4 ms-auto flex-nowrap d-flex mb-4 mb-sm-0 order-1 order-sm-2">
                <div class="btn-sort active col mx-2" data-bs-target="#tab-list" data-bs-toggle="tab"> 
                  <svg class="icon icon-list">	
                    <use xlink:href="#icon-list"></use>
                  </svg>
                </div>
                <div class="btn-sort col mx-2" data-bs-target="#tab-grid" data-bs-toggle="tab">
                  <svg class="icon icon-grid">	
                    <use xlink:href="#icon-grid"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="drafts tab-content">
                <div class="tab-pane fade active show" id="tab-list" role="tabpanel">
                  <div class="row g-0">
                    <div class="sheet-table d-block d-md-table">
                      <div class="border-bottom border-md-none d-table-row">
                        <div class="checkbox-cell d-none d-md-table-cell py-4 px-3">
                          <input class="form-check-input" data-group-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="d-none d-md-table-cell pb-4 px-3 caption">Product</div>
                        <div class="d-none d-md-table-cell pb-4 px-3 caption">Price</div>
                        <div class="d-none d-md-table-cell pb-4 px-3 caption">Last edited</div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Fleet - Travel shopping UI design"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Fleet - Travel shopping UI design</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Feb 2, 2020 at 10:55 PM
                              </div>
                              <div class="badge large d-inline-block d-md-none green">$65</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large green">$65</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Feb 2, 2020 at 10:55 PM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Feb 9, 2020 at 3:00 AM
                              </div>
                              <div class="badge large d-inline-block d-md-none green">$130</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large green">$130</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Feb 9, 2020 at 3:00 AM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Fleet - Travel shopping UI design"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Fleet - Travel shopping UI design</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Apr 2, 2021 at 12:36 AM
                              </div>
                              <div class="badge large d-inline-block d-md-none common">$0</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large common">$0</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Apr 2, 2021 at 12:36 AM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Apr 9, 2021 at 2:03 PM
                              </div>
                              <div class="badge large d-inline-block d-md-none green">$32</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large green">$32</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Apr 9, 2021 at 2:03 PM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Fleet - Travel shopping UI design"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Fleet - Travel shopping UI design</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Apr 23, 2021 at 10:00 PM
                              </div>
                              <div class="badge large d-inline-block d-md-none green">$106</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large green">$106</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Apr 23, 2021 at 10:00 PM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom sheet-row position-relative d-block d-md-table-row pb-4 mb-4">
                        <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                          <input class="form-check-input" data-item-checkbox="draft" type="checkbox"/>
                        </div>
                        <div class="col col-md-5 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <div class="sheet-table-preview md-horizontal-image vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/></div>
                            <div class="sheet-table-details">
                              <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bento Matte 3D Illustration</div>
                              <div class="caption d-none d-md-block">ui8.net/product/product-link</div>
                              <div class="caption d-flex align-items-center d-md-none w-100 mb-3">
                                <svg class="icon icon-clock me-1 fill-shades-2">	
                                  <use xlink:href="#icon-clock"></use>
                                </svg>Feb 9, 2020 at 3:00 AM
                              </div>
                              <div class="badge large d-inline-block d-md-none green">$130</div>
                            </div></a>
                          <div class="table-btn-actions position-absolute d-block d-md-none mt-2 mt-md-3">
                            <div class="action-item">
                              <button class="action-head btn-action-small">
                                <svg class="icon icon-more-horizontal">	
                                  <use xlink:href="#icon-more-horizontal"></use>
                                </svg>
                              </button>
                              <div class="action-body p-3">
                                <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                  <svg class="icon icon-calendar">	
                                    <use xlink:href="#icon-calendar"></use>
                                  </svg>Schedule product
                                </button>
                                <button class="action-item">
                                  <svg class="icon icon-edit">	
                                    <use xlink:href="#icon-edit"></use>
                                  </svg>Edit title & description
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
                        <div class="col col-md-1 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="badge large green">$130</div>
                        </div>
                        <div class="col col-md-6 d-none d-md-table-cell align-middle py-2 py-md-4 px-0 px-md-3">
                          <div class="d-flex align-items-center justify-content-between">
                            <div class="text-neutral-4">Feb 9, 2020 at 3:00 AM</div>
                            <div class="table-btn-actions d-flex opacity-0">
                              <div class="btn-action-small d-none d-md-block me-5" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                                <svg class="icon icon-calendar">	
                                  <use xlink:href="#icon-calendar"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-edit">	
                                  <use xlink:href="#icon-edit"></use>
                                </svg>
                              </div>
                              <div class="btn-action-small d-none d-md-block me-5">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
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
                <div class="tab-pane fade" id="tab-grid" role="tabpanel">
                  <div class="row gy-6 gx-5">
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-5.jpg'?>" alt="Fleet - Travel shopping UI design"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Fleet - Travel shopping UI design
                          <div class="badge large ms-5 green">$65</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Feb 2, 2020 at 10:55 PM
                      </div>
                    </div>
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Bento Matte 3D Illustration
                          <div class="badge large ms-5 green">$130</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Feb 9, 2020 at 3:00 AM
                      </div>
                    </div>
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Fleet - Travel shopping UI design"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Fleet - Travel shopping UI design
                          <div class="badge large ms-5 common">$0</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Apr 2, 2021 at 12:36 AM
                      </div>
                    </div>
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-3.jpg'?>" alt="Bento Matte 3D Illustration"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Bento Matte 3D Illustration
                          <div class="badge large ms-5 green">$32</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Apr 9, 2021 at 2:03 PM
                      </div>
                    </div>
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="Fleet - Travel shopping UI design"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Fleet - Travel shopping UI design
                          <div class="badge large ms-5 green">$106</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Apr 23, 2021 at 10:00 PM
                      </div>
                    </div>
                    <div class="grid-preview col-12 col-sm-6 col-md-4">
                      <div class="grid-preview-thumbnail mb-4">
                        <input class="checkbox form-check-input" type="checkbox"/><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-4.jpg'?>" alt="Bento Matte 3D Illustration"/>
                        <div class="grid-preview-control d-flex align-items-center justify-content-center">
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-edit">	
                              <use xlink:href="#icon-edit"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2">
                            <svg class="icon icon-trash">	
                              <use xlink:href="#icon-trash"></use>
                            </svg>
                          </button>
                          <button class="btn-rounded mx-2" data-bs-toggle="modal" data-bs-target="#modal-product">
                            <svg class="icon icon-arrow">	
                              <use xlink:href="#icon-arrow"></use>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid-preview-details mb-2">
                        <div class="d-flex align-items-start justify-content-between"> Bento Matte 3D Illustration
                          <div class="badge large ms-5 green">$130</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center text-shades-2 fs-8">
                        <svg class="icon icon-clock me-2 fill-shades-2">	
                          <use xlink:href="#icon-clock"></use>
                        </svg>Feb 9, 2020 at 3:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-footer d-none d-md-block p-4 p-sm-5 px-xl-7 mx-n4 mx-sm-n5 mx-xl-n7 mt-auto">
          <div class="container p-0 d-block d-sm-flex">
            <div class="d-flex align-items-center mb-4 mb-sm-0">
              <svg class="icon icon-check-all fill-shades-2 me-3">	
                <use xlink:href="#icon-check-all"></use>
              </svg><span class="caption">2 products selected</span>
            </div>
            <div class="d-flex ms-auto">
              <button class="btn-delete flex-grow-1">Delete
                <svg class="icon icon-trash ms-1">	
                  <use xlink:href="#icon-trash"></use>
                </svg>
              </button>
              <button class="btn ms-2 flex-grow-1">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </main>
<?php
get_footer();