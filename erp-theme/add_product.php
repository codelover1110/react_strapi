<?php
/**
    * Template Name: Add Product
*/
?>
<?php
get_header();
?>
<main>
      <div class="page pt-5 px-4 pt-sm-6 px-sm-5 pt-xl-7 px-xl-7">
        <div class="page-head">
          <div class="h3 mb-4 mb-xl-5">New product</div>
        </div>
        <div class="page-body pb-4 pb-xl-6">
          <div class="row g-0">
            <div class="col-lg-8 col-12 pe-lg-2">
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color green">Name & description</div><a class="btn-stroke btn-small" href="products-dashboard.html">
                    <svg class="icon icon-arrow-left me-1">	
                      <use xlink:href="#icon-arrow-left"></use>
                    </svg><span>Back</span></a>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Product title 
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <input class="form-control mb-5 mb-sm-6" type="text">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Description
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="editor mb-5 mb-sm-6 position-relative">
                    <div class="editor-toolbar d-flex p-3">
                      <button class="ql-bold">
                        <svg class="icon icon-bold">	
                          <use xlink:href="#icon-bold"></use>
                        </svg>
                      </button>
                      <button class="ql-italic ms-5">
                        <svg class="icon icon-italic">	
                          <use xlink:href="#icon-italic"></use>
                        </svg>
                      </button>
                      <button class="ql-underline ms-5">
                        <svg class="icon icon-underline">	
                          <use xlink:href="#icon-underline"></use>
                        </svg>
                      </button>
                      <div class="smileys-actions">
                        <button class="smileys-head ms-5">
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
                      <button class="ms-5">
                        <svg class="icon icon-link">	
                          <use xlink:href="#icon-link"></use>
                        </svg>
                      </button>
                      <button class="ql-list ms-5">
                        <svg class="icon icon-list">	
                          <use xlink:href="#icon-list"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ql-align ms-5">
                        <svg class="icon icon-align">	
                          <use xlink:href="#icon-align"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ms-auto">
                        <svg class="icon icon-arrow-left">	
                          <use xlink:href="#icon-arrow-left"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ms-2">
                        <svg class="icon icon-arrow">	
                          <use xlink:href="#icon-arrow"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="editor-container" type="text"></div>
                  </div>
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Key features
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input class="form-control" type="text" placeholder="Value">
                    </div>
                    <div class="col-12 col-sm-6">
                      <input class="form-control" type="text" placeholder="Value">
                    </div>
                    <div class="col-12 col-sm-6">
                      <input class="form-control" type="text" placeholder="Value">
                    </div>
                    <div class="col-12 col-sm-6">
                      <input class="form-control" type="text" placeholder="Value">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color green">Images & CTA</div>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Cover images
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="input-file mb-5 mb-sm-6">
                    <button class="btn-stroke">
                      <svg class="icon icon-upload me-2">	
                        <use xlink:href="#icon-upload"></use>
                      </svg>Click or drop image
                    </button>
                    <input type="file">
                  </div>
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Category
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <select class="select select-wide">
                    <option>Select category</option>
                    <option>Сategory 1</option>
                    <option>Сategory 2</option>
                  </select>
                </div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color blue">Price</div>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Amount
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="input-group mb-5 mb-sm-6">
                    <button class="input-group-text">$</button>
                    <input class="form-control rounded-2" type="text">
                  </div>
                  <div class="border-bottom caption d-flex align-items-center mb-4 pb-4 text-reset fs-8">Allow customers to pay they want
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                    <div class="form-check form-switch ms-auto">
                      <input class="form-check-input" type="checkbox">
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <div class="caption mb-3">Minimum amount</div>
                      <div class="input-group">
                        <button class="input-group-text">$</button>
                        <input class="form-control rounded-2" type="text">
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="caption mb-3">Suggested amount</div>
                      <div class="input-group">
                        <button class="input-group-text">$</button>
                        <input class="form-control rounded-2" type="text">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color purple">Category & attibutes</div>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Category
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <select class="select select-wide mb-5 mb-sm-6">
                    <option>Select category</option>
                    <option>Сategory 1</option>
                    <option>Сategory 2</option>
                  </select>
                  <div class="caption d-inline-flex align-items-center mb-3 text-reset fs-8">Compatibility
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="row gx-3 mb-5">
                    <div class="col-6 col-md-4">
                      <div class="form-check mb-4">
                        <label class="form-check-label">Sketch
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Figma
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Adobe XD
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Photoshop
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Cinema 4D
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                    </div>
                    <div class="col-6 col-md-4">
                      <div class="form-check mb-4">
                        <label class="form-check-label">WordPress
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">HTML
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Keynote
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Maya
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Blender
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                    </div>
                    <div class="col-6 col-md-4">
                      <div class="form-check mb-4">
                        <label class="form-check-label">Procreate
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Illustrator
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">Framer
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">In Design
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                      <div class="form-check mb-4">
                        <label class="form-check-label">After Effect
                          <input class="form-check-input me-3" type="checkbox">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Tags
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                    <div class="caption ms-auto"><span class="text-reset">1</span>/12 tags</div>
                  </div>
                  <div class="tags" name="tags" placeholder="Enter tags to describe your item" value="tag1, tag2 autofocus"></div>
                </div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color blue">Product files</div>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Content
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="input-file mb-5 mb-sm-6">
                    <button class="btn-stroke">
                      <svg class="icon icon-upload me-2">	
                        <use xlink:href="#icon-upload"></use>
                      </svg>Click or drop image
                    </button>
                    <input type="file">
                  </div>
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Fonts
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="input-file mb-5 mb-sm-6">
                    <button class="btn-stroke">
                      <svg class="icon icon-upload me-2">	
                        <use xlink:href="#icon-upload"></use>
                      </svg>Click or drop image
                    </button>
                    <input type="file">
                  </div>
                </div>
              </div>
              <div class="card mb-2 p-4 p-sm-5">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color red">Discussion</div>
                </div>
                <div class="card-body p-0">
                  <div class="caption d-flex align-items-center mb-3 text-reset fs-8">Message to reviewer
                    <div class="info-tooltip ms-1" data-bs-toggle="tooltip" title="Maximum 100 characters. No HTML or emoji allowed">
                      <svg class="icon icon-info">	
                        <use xlink:href="#icon-info"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="editor mb-5 mb-sm-6 position-relative">
                    <div class="editor-toolbar d-flex p-3">
                      <button class="ql-bold">
                        <svg class="icon icon-bold">	
                          <use xlink:href="#icon-bold"></use>
                        </svg>
                      </button>
                      <button class="ql-italic ms-5">
                        <svg class="icon icon-italic">	
                          <use xlink:href="#icon-italic"></use>
                        </svg>
                      </button>
                      <button class="ql-underline ms-5">
                        <svg class="icon icon-underline">	
                          <use xlink:href="#icon-underline"></use>
                        </svg>
                      </button>
                      <div class="smileys-actions">
                        <button class="smileys-head ms-5">
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
                      <button class="ms-5">
                        <svg class="icon icon-link">	
                          <use xlink:href="#icon-link"></use>
                        </svg>
                      </button>
                      <button class="ql-list ms-5">
                        <svg class="icon icon-list">	
                          <use xlink:href="#icon-list"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ql-align ms-5">
                        <svg class="icon icon-align">	
                          <use xlink:href="#icon-align"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ms-auto">
                        <svg class="icon icon-arrow-left">	
                          <use xlink:href="#icon-arrow-left"></use>
                        </svg>
                      </button>
                      <button class="d-none d-sm-block ms-2">
                        <svg class="icon icon-arrow">	
                          <use xlink:href="#icon-arrow"></use>
                        </svg>
                      </button>
                    </div>
                    <div class="editor-container" type="text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card preview d-none d-lg-block mb-2 p-4 p-sm-5 sticky">
                <div class="card-head d-flex align-items-center justify-content-between mb-5 mb-sm-6">
                  <div class="title title-color blue">Preview</div>
                  <svg class="icon icon-expand">	
                    <use xlink:href="#icon-expand"></use>
                  </svg>
                </div>
                <div class="card-body p-0">
                  <div class="preview-photo mb-4"><img src="/img/content/photo-1.jpg" alt=""></div>
                  <div class="preview-title d-flex align-items-start mb-2">Fleet - Travel shopping UI design kit
                    <div class="badge large green ms-3">$98</div>
                  </div>
                  <div class="preview-user d-flex align-items-center">
                    <div class="preview-userpic me-2"><img src="/img/content/user-1.jpg" alt="Hortense"></div><span class="me-1 text-shades-1">by </span><b>Hortense</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-footer p-4 p-sm-5 px-xl-7 mx-n4 mx-sm-n5 mx-xl-n7 mt-auto">
          <div class="container p-0 d-block d-sm-flex">
            <div class="d-flex align-items-center mb-4 mb-sm-0">
              <svg class="icon icon-check-all fill-shades-2 me-3">	
                <use xlink:href="#icon-check-all"></use>
              </svg><span class="caption pe-1">Last saved</span><span class="caption text-reset">Oct 4, 2021 - 23:32</span>
            </div>
            <div class="d-flex ms-auto">
              <button class="btn-stroke flex-grow-1">Save Draft</button>
              <button class="btn ms-2 flex-grow-1">Publish now</button>
              <div class="action-item ms-2">
                <button class="action-head btn-stroke p-3">
                  <svg class="icon icon-more-vertical">	
                    <use xlink:href="#icon-more-vertical"></use>
                  </svg>
                </button>
                <div class="action-body top p-3">
                  <button class="action-item d-block d-lg-none" data-bs-toggle="modal" data-bs-target="#modal-preview">
                    <svg class="icon icon-expand">	
                      <use xlink:href="#icon-expand"></use>
                    </svg>Preview
                  </button>
                  <button class="action-item" data-bs-toggle="modal" data-bs-target="#modal-datepicker">
                    <svg class="icon icon-calendar">	
                      <use xlink:href="#icon-calendar"></use>
                    </svg>Schedule product
                  </button>
                  <button class="action-item">
                    <svg class="icon icon-link">	
                      <use xlink:href="#icon-link"></use>
                    </svg>Get shareable link
                  </button>
                  <button class="action-item">
                    <svg class="icon icon-close">	
                      <use xlink:href="#icon-close"></use>
                    </svg>Clear data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
<?php
get_footer();