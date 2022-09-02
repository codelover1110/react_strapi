<?php
/**
    * Template Name: Product Comments
*/
?>
<?php
get_header();
?>
<main>
      <div class="page pt-5 px-4 pt-sm-6 px-sm-5 pt-xl-7 px-xl-7">
        <div class="page-head">
          <div class="h3 mb-4 mb-xl-5">Comments</div>
        </div>
        <div class="page-body pb-4 pb-xl-6">
          <div class="card mb-2 p-4 p-sm-5">
            <div class="card-head d-flex flex-wrap align-items-center mb-2 mb-sm-7">
              <div class="title title-color purple me-5 mb-4 mb-sm-0">Products comments</div>
              <div class="search-input input-group me-sm-5 mb-3 mb-sm-0 order-2 order-sm-1">
                <button class="input-group-text transparent">
                  <svg class="icon icon-search">	
                    <use xlink:href="#icon-search"></use>
                  </svg>
                </button>
                <input class="form-control input-small input-action rounded-2" type="text" placeholder="Search comments">
              </div>
            </div>
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="sheet-table d-block d-md-table">
                  <div class="border-bottom border-md-none d-table-row">
                    <div class="checkbox-cell d-none d-md-table-cell py-4 px-3">
                      <input class="form-check-input" data-group-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="d-none d-md-table-cell pb-4 px-3 caption">Comments</div>
                    <div class="d-none d-md-table-cell pb-4 px-3 caption">Product</div>
                  </div>
                  <div class="border-bottom sheet-row comments-block smileys-wrapper position-relative d-block d-md-table-row pb-4 mb-4">
                    <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                      <input class="form-check-input" data-item-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="col col-md-8 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <div class="d-flex">
                        <div class="userpic flex-shrink-0 me-5"><img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/img/content/user-2.jpg'?>" alt=""/></div>
                        <div class="ms-n1 w-100">
                          <div class="d-flex align-items-center mb-1">
                            <div class="me-auto"><b>Samson Heathcote</b></div>
                            <div class="caption ms-2 text-shades-1 w-auto">8h</div>
                          </div>
                          <div class="mb-4">Awesome, keep it up,</div>
                          <div class="comment-collapse collapse show" id="comment-actions-0">
                            <div class="table-comment-actions d-flex">
                              <button class="table-comment-reply me-6" data-bs-toggle="collapse" data-bs-target="#comment-actions-0, #comment-reply-0">
                                <svg class="icon icon-repeat">	
                                  <use xlink:href="#icon-repeat"></use>
                                </svg>
                              </button>
                              <button class="btn-favorite me-6">
                                <svg class="icon icon-double-heart"> 
                                  <use class="fill" href="#icon-heart-fill"></use>
                                  <use class="stroke" href="#icon-heart-stroke"></use>
                                </svg>
                              </button>
                              <button class="me-6">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </button>
                              <div class="smileys-actions">
                                <button class="smileys-head">
                                  <svg class="icon icon-double-smile"> 
                                    <use class="fill" href="#icon-smile-fill"></use>
                                    <use class="stroke" href="#icon-smile-stroke"></use>
                                  </svg>
                                </button>
                                <div class="smileys-body d-flex rounded-1 p-1">
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Blush.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Surprised.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SweatGrinning.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Cool.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Sleepy.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/CryingWithLaughter.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/HeartEyes.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SmileEyes.png'?>"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="collapse" id="comment-reply-0">
                            <div class="pt-4">
                              <div class="comment-reply d-flex">
                                <div class="comment-reply-userpic flex-shrink-0"><img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/img/content/user-1.jpg'?>"/></div>
                                <div class="ms-4">
                                  <textarea class="textarea-transparent mb-4" oninput="this.style.height = &quot;&quot;;this.style.height = this.scrollHeight + &quot;px&quot;" placeholder="Leave something to reply"></textarea>
                                  <button class="btn btn-small me-2">Reply</button>
                                  <button class="btn-tab btn-small" data-bs-toggle="collapse" data-bs-target="#comment-actions-0, #comment-reply-0">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-md-4 d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                        <div class="sheet-table-preview vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-1.jpg'?>" alt="DSM - Geometry pattern"/></div>
                        <div class="sheet-table-details">
                          <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">DSM - Geometry pattern</div>
                          <div class="caption d-none d-md-block">UI design kit</div>
                        </div></a></div>
                  </div>
                  <div class="border-bottom sheet-row comments-block smileys-wrapper position-relative d-block d-md-table-row pb-4 mb-4">
                    <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                      <input class="form-check-input" data-item-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="col col-md-8 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <div class="d-flex">
                        <div class="userpic flex-shrink-0 me-5"><img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/img/content/user-3.jpg'?>" alt=""/></div>
                        <div class="ms-n1 w-100">
                          <div class="d-flex align-items-center mb-1">
                            <div class="me-auto"><b>Maureen Russel</b></div>
                            <div class="caption ms-2 text-shades-1 w-auto">14h</div>
                          </div>
                          <div class="mb-4">Dude, I am unable to download, please check the link. 😢</div>
                          <div class="comment-collapse collapse show" id="comment-actions-1">
                            <div class="table-comment-actions d-flex">
                              <button class="table-comment-reply me-6" data-bs-toggle="collapse" data-bs-target="#comment-actions-1, #comment-reply-1">
                                <svg class="icon icon-repeat">	
                                  <use xlink:href="#icon-repeat"></use>
                                </svg>
                              </button>
                              <button class="btn-favorite me-6">
                                <svg class="icon icon-double-heart"> 
                                  <use class="fill" href="#icon-heart-fill"></use>
                                  <use class="stroke" href="#icon-heart-stroke"></use>
                                </svg>
                              </button>
                              <button class="me-6">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </button>
                              <div class="smileys-actions">
                                <button class="smileys-head">
                                  <svg class="icon icon-double-smile"> 
                                    <use class="fill" href="#icon-smile-fill"></use>
                                    <use class="stroke" href="#icon-smile-stroke"></use>
                                  </svg>
                                </button>
                                <div class="smileys-body d-flex rounded-1 p-1">
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Blush.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Surprised.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SweatGrinning.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Cool.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Sleepy.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/CryingWithLaughter.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/HeartEyes.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SmileEyes.png'?>"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="collapse" id="comment-reply-1">
                            <div class="pt-4">
                              <div class="comment-reply d-flex">
                                <div class="comment-reply-userpic flex-shrink-0"><img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/img/content/user-1.jpg'?>"/></div>
                                <div class="ms-4">
                                  <textarea class="textarea-transparent mb-4" oninput="this.style.height = &quot;&quot;;this.style.height = this.scrollHeight + &quot;px&quot;" placeholder="Leave something to reply"></textarea>
                                  <button class="btn btn-small me-2">Reply</button>
                                  <button class="btn-tab btn-small" data-bs-toggle="collapse" data-bs-target="#comment-actions-1, #comment-reply-1">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-md-4 d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                        <div class="sheet-table-preview vertical-image flex-shrink-0"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/product-2.jpg'?>" alt="Node - Crypto iOS UI design kit"/></div>
                        <div class="sheet-table-details">
                          <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Node - Crypto iOS UI design kit</div>
                          <div class="caption d-none d-md-block">UI design kit</div>
                        </div></a></div>
                  </div>
                  <div class="border-bottom sheet-row comments-block smileys-wrapper position-relative d-block d-md-table-row pb-4 mb-4">
                    <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                      <input class="form-check-input" data-item-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="col col-md-8 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <div class="d-flex">
                        <div class="userpic flex-shrink-0 me-5"><img class="rounded-circle w-100" src="<?php echo get_stylesheet_directory_uri().'/img/content/user-4.jpg'?>" alt=""/></div>
                        <div class="ms-n1 w-100">
                          <div class="d-flex align-items-center mb-1">
                            <div class="me-auto"><b>Whitney Nicolas</b></div>
                            <div class="caption ms-2 text-shades-1 w-auto">16h</div>
                          </div>
                          <div class="mb-4">Awesome, keep it up,</div>
                          <div class="comment-collapse collapse show" id="comment-actions-2">
                            <div class="table-comment-actions d-flex">
                              <button class="table-comment-reply me-6" data-bs-toggle="collapse" data-bs-target="#comment-actions-2, #comment-reply-2">
                                <svg class="icon icon-repeat">	
                                  <use xlink:href="#icon-repeat"></use>
                                </svg>
                              </button>
                              <button class="btn-favorite me-6">
                                <svg class="icon icon-double-heart"> 
                                  <use class="fill" href="#icon-heart-fill"></use>
                                  <use class="stroke" href="#icon-heart-stroke"></use>
                                </svg>
                              </button>
                              <button class="me-6">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </button>
                              <div class="smileys-actions">
                                <button class="smileys-head">
                                  <svg class="icon icon-double-smile"> 
                                    <use class="fill" href="#icon-smile-fill"></use>
                                    <use class="stroke" href="#icon-smile-stroke"></use>
                                  </svg>
                                </button>
                                <div class="smileys-body d-flex rounded-1 p-1">
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Blush.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Surprised.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SweatGrinning.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Cool.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/Sleepy.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/CryingWithLaughter.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/HeartEyes.png'?>"/></button>
                                  <button class="smileys-item rounded-circle"><img src="<?php echo get_stylesheet_directory_uri().'/img/content/reaction/SmileEyes.png'?>"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="collapse" id="comment-reply-2">
                            <div class="pt-4">
                              <div class="comment-reply d-flex">
                                <div class="comment-reply-userpic flex-shrink-0"><img class="rounded-circle w-100" src="img/content/user-1.jpg"/></div>
                                <div class="ms-4">
                                  <textarea class="textarea-transparent mb-4" oninput="this.style.height = &quot;&quot;;this.style.height = this.scrollHeight + &quot;px&quot;" placeholder="Leave something to reply"></textarea>
                                  <button class="btn btn-small me-2">Reply</button>
                                  <button class="btn-tab btn-small" data-bs-toggle="collapse" data-bs-target="#comment-actions-2, #comment-reply-2">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-md-4 d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                        <div class="sheet-table-preview vertical-image flex-shrink-0"><img src="img/content/product-3.jpg" alt="TaskEz: Productivity App iOS UI Kit"/></div>
                        <div class="sheet-table-details">
                          <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">TaskEz: Productivity App iOS UI Kit</div>
                          <div class="caption d-none d-md-block">UI design kit</div>
                        </div></a></div>
                  </div>
                  <div class="border-bottom sheet-row comments-block smileys-wrapper position-relative d-block d-md-table-row pb-4 mb-4">
                    <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                      <input class="form-check-input" data-item-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="col col-md-8 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <div class="d-flex">
                        <div class="userpic flex-shrink-0 me-5"><img class="rounded-circle w-100" src="img/content/user-5.jpg" alt=""/></div>
                        <div class="ms-n1 w-100">
                          <div class="d-flex align-items-center mb-1">
                            <div class="me-auto"><b>Amani Rempel</b></div>
                            <div class="caption ms-2 text-shades-1 w-auto">19h</div>
                          </div>
                          <div class="mb-4">Awesome, keep it up,</div>
                          <div class="comment-collapse collapse show" id="comment-actions-3">
                            <div class="table-comment-actions d-flex">
                              <button class="table-comment-reply me-6" data-bs-toggle="collapse" data-bs-target="#comment-actions-3, #comment-reply-3">
                                <svg class="icon icon-repeat">	
                                  <use xlink:href="#icon-repeat"></use>
                                </svg>
                              </button>
                              <button class="btn-favorite me-6">
                                <svg class="icon icon-double-heart"> 
                                  <use class="fill" href="#icon-heart-fill"></use>
                                  <use class="stroke" href="#icon-heart-stroke"></use>
                                </svg>
                              </button>
                              <button class="me-6">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </button>
                              <div class="smileys-actions">
                                <button class="smileys-head">
                                  <svg class="icon icon-double-smile"> 
                                    <use class="fill" href="#icon-smile-fill"></use>
                                    <use class="stroke" href="#icon-smile-stroke"></use>
                                  </svg>
                                </button>
                                <div class="smileys-body d-flex rounded-1 p-1">
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Blush.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Surprised.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/SweatGrinning.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Cool.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Sleepy.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/CryingWithLaughter.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/HeartEyes.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/SmileEyes.png"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="collapse" id="comment-reply-3">
                            <div class="pt-4">
                              <div class="comment-reply d-flex">
                                <div class="comment-reply-userpic flex-shrink-0"><img class="rounded-circle w-100" src="img/content/user-1.jpg"/></div>
                                <div class="ms-4">
                                  <textarea class="textarea-transparent mb-4" oninput="this.style.height = &quot;&quot;;this.style.height = this.scrollHeight + &quot;px&quot;" placeholder="Leave something to reply"></textarea>
                                  <button class="btn btn-small me-2">Reply</button>
                                  <button class="btn-tab btn-small" data-bs-toggle="collapse" data-bs-target="#comment-actions-3, #comment-reply-3">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-md-4 d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                        <div class="sheet-table-preview vertical-image flex-shrink-0"><img src="img/content/product-4.jpg" alt="Bitcloud - Crypto exchange UI kit"/></div>
                        <div class="sheet-table-details">
                          <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Bitcloud - Crypto exchange UI kit</div>
                          <div class="caption d-none d-md-block">UI design kit</div>
                        </div></a></div>
                  </div>
                  <div class="border-bottom sheet-row comments-block smileys-wrapper position-relative d-block d-md-table-row pb-4 mb-4">
                    <div class="col checkbox-cell sheet-cell d-none d-md-table-cell py-2 py-md-4 px-3">
                      <input class="form-check-input" data-item-checkbox="comment" type="checkbox"/>
                    </div>
                    <div class="col col-md-8 sheet-cell d-block d-md-table-cell py-2 py-md-4 px-0 px-md-3">
                      <div class="d-flex">
                        <div class="userpic flex-shrink-0 me-5"><img class="rounded-circle w-100" src="img/content/user-6.jpg" alt=""/></div>
                        <div class="ms-n1 w-100">
                          <div class="d-flex align-items-center mb-1">
                            <div class="me-auto"><b>Corene Toy</b></div>
                            <div class="caption ms-2 text-shades-1 w-auto">1 day</div>
                          </div>
                          <div class="mb-4">Awesome, keep it up,</div>
                          <div class="comment-collapse collapse show" id="comment-actions-4">
                            <div class="table-comment-actions d-flex">
                              <button class="table-comment-reply me-6" data-bs-toggle="collapse" data-bs-target="#comment-actions-4, #comment-reply-4">
                                <svg class="icon icon-repeat">	
                                  <use xlink:href="#icon-repeat"></use>
                                </svg>
                              </button>
                              <button class="btn-favorite me-6">
                                <svg class="icon icon-double-heart"> 
                                  <use class="fill" href="#icon-heart-fill"></use>
                                  <use class="stroke" href="#icon-heart-stroke"></use>
                                </svg>
                              </button>
                              <button class="me-6">
                                <svg class="icon icon-trash">	
                                  <use xlink:href="#icon-trash"></use>
                                </svg>
                              </button>
                              <div class="smileys-actions">
                                <button class="smileys-head">
                                  <svg class="icon icon-double-smile"> 
                                    <use class="fill" href="#icon-smile-fill"></use>
                                    <use class="stroke" href="#icon-smile-stroke"></use>
                                  </svg>
                                </button>
                                <div class="smileys-body d-flex rounded-1 p-1">
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Blush.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Surprised.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/SweatGrinning.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Cool.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/Sleepy.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/CryingWithLaughter.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/HeartEyes.png"/></button>
                                  <button class="smileys-item rounded-circle"><img src="img/content/reaction/SmileEyes.png"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="collapse" id="comment-reply-4">
                            <div class="pt-4">
                              <div class="comment-reply d-flex">
                                <div class="comment-reply-userpic flex-shrink-0"><img class="rounded-circle w-100" src="img/content/user-1.jpg"/></div>
                                <div class="ms-4">
                                  <textarea class="textarea-transparent mb-4" oninput="this.style.height = &quot;&quot;;this.style.height = this.scrollHeight + &quot;px&quot;" placeholder="Leave something to reply"></textarea>
                                  <button class="btn btn-small me-2">Reply</button>
                                  <button class="btn-tab btn-small" data-bs-toggle="collapse" data-bs-target="#comment-actions-4, #comment-reply-4">Cancel</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-md-4 d-none d-md-table-cell py-2 py-md-4 px-0 px-md-3"><a class="sheet-table-item d-flex align-items-sm-center" data-bs-toggle="modal" data-bs-target="#modal-product">
                        <div class="sheet-table-preview vertical-image flex-shrink-0"><img src="img/content/product-4.jpg" alt="Academe 3D Education Icons"/></div>
                        <div class="sheet-table-details">
                          <div class="sheet-table-title mb-2 mb-md-1 me-8 me-md-0">Academe 3D Education Icons</div>
                          <div class="caption d-none d-md-block">UI design kit</div>
                        </div></a></div>
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
        <div class="page-footer d-none d-md-block p-4 p-sm-5 px-xl-7 mx-n4 mx-sm-n5 mx-xl-n7 mt-auto">
          <div class="container p-0 d-block d-sm-flex">
            <div class="d-flex align-items-center mb-4 mb-sm-0">
              <svg class="icon icon-check-all fill-shades-2 me-3">	
                <use xlink:href="#icon-check-all"></use>
              </svg><span class="caption">No comment selected</span>
            </div>
            <div class="d-flex ms-auto">
              <button class="btn-delete flex-grow-1">Delete
                <svg class="icon icon-trash ms-1">	
                  <use xlink:href="#icon-trash"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
<?php
get_footer();