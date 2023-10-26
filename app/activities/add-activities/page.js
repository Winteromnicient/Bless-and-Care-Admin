"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import Link from 'next/link'

import React from 'react'

const addActivities = () => {
    const quillRef = useRef(null);

    useEffect(() => {
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        placeholder: "Write something here...",
        modules: {
          toolbar: [
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      });
  
      // Add any event handlers or customization as needed
  
      // Optional: To access the content in Quill, you can use quill.getContents()
      // const content = quill.getContents();
    }, []);
  
    return (
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <div className="app-wrapper d-flex" id="kt_app_wrapper">
            <div className="app-container container-fluid d-flex">
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                <div className="d-flex flex-column flex-column-fluid">
                  <div id="kt_app_toolbar" className="app-toolbar pt-7 pt-lg-10">
                    <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                      <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold mb-10 fs-7">
                          <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                            <a
                              href="../../demo44/dist/index.html"
                              className="text-hover-primary"
                            >
                              <i className="ki-outline ki-home text-gray-700 fs-6"></i>
                            </a>
                          </li>
  
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700"></i>
                          </li>
  
                          <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                            Home
                          </li>
  
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700"></i>
                          </li>
  
                          <li className="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                            Activities
                          </li>
  
                          <li className="breadcrumb-item">
                            <i className="ki-outline ki-right fs-7 text-gray-700"></i>
                          </li>
  
                          <li className="breadcrumb-item text-gray-500 mx-n1">
                            Add Activity
                          </li>
                        </ul>
  
                        <h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-3 m-0 mb-10">
                         Add Activity
                        </h1>
                      </div>
  
                   
                    </div>
                  </div>
  
                  <div
                    id="kt_app_content"
                    className="app-content flex-column-fluid"
                  >
                    <form
                      id="kt_ecommerce_add_product_form"
                      className="form d-flex flex-column flex-lg-row"
                      data-kt-redirect="../../demo44/dist/apps/ecommerce/catalog/products.html"
                    >
                      <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Thumbnail</h2>
                            </div>
                          </div>
  
                          <div className="card-body text-center pt-0">
                            <div
                              className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                              data-kt-image-input="true"
                              style={{
                                backgroundImage:
                                  "url('assets/media/svg/files/blank-image.svg')",
                              }}
                            >
                              <div className="image-input-wrapper w-150px h-150px"></div>
  
                              <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change"
                                data-bs-toggle="tooltip"
                                title="Change avatar"
                              >
                                <i className="ki-outline ki-pencil fs-7"></i>
  
                                <input
                                  type="file"
                                  name="avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <input type="hidden" name="avatar_remove" />
                              </label>
  
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel"
                                data-bs-toggle="tooltip"
                                title="Cancel avatar"
                              >
                                <i className="ki-outline ki-cross fs-2"></i>
                              </span>
  
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove"
                                data-bs-toggle="tooltip"
                                title="Remove avatar"
                              >
                                <i className="ki-outline ki-cross fs-2"></i>
                              </span>
                            </div>
  
                            <div className="text-muted fs-7">
                              Set the activity thumbnail image. Only *.png, *.jpg
                              and *.jpeg image files are accepted
                            </div>
                          </div>
                        </div>
  
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Banner</h2>
                            </div>
                          </div>
  
                          <div className="card-body text-center pt-0">
                            <div
                              className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                              data-kt-image-input="true"
                              style={{
                                backgroundImage:
                                  "url('assets/media/svg/files/blank-image.svg')",
                              }}
                            >
                              <div className="image-input-wrapper w-200px h-120px"></div>
  
                              <label
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change"
                                data-bs-toggle="tooltip"
                                title="Change avatar"
                              >
                                <i className="ki-outline ki-pencil fs-7"></i>
  
                                <input
                                  type="file"
                                  name="avatar"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <input type="hidden" name="avatar_remove" />
                              </label>
  
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel"
                                data-bs-toggle="tooltip"
                                title="Cancel avatar"
                              >
                                <i className="ki-outline ki-cross fs-2"></i>
                              </span>
  
                              <span
                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove"
                                data-bs-toggle="tooltip"
                                title="Remove avatar"
                              >
                                <i className="ki-outline ki-cross fs-2"></i>
                              </span>
                            </div>
  
                            <div className="text-muted fs-7">
                              Set the activity banner image. Only *.png, *.jpg
                              and *.jpeg image files are accepted
                            </div>
                          </div>
                        </div>
  
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Status</h2>
                            </div>
  
                            <div className="card-toolbar">
                              <div
                                className="rounded-circle bg-success w-15px h-15px"
                                id="kt_ecommerce_add_product_status"
                              ></div>
                            </div>
                          </div>
  
                          <div className="card-body pt-0">
                            <select
                              className="form-select mb-2"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Select an option"
                              id="kt_ecommerce_add_product_status_select"
                            >
                              <option></option>
                              <option value="true">Active</option>
                              <option value="false">In Active</option>
                            </select>
  
                            <div className="text-muted fs-7 mt-2">
                              Set the product status.
                            </div>
  
                            <div className="d-none mt-10">
                              <label
                                htmlFor="kt_ecommerce_add_product_status_datepicker"
                                className="form-label"
                              >
                                Select publishing date and time
                              </label>
                              <input
                                className="form-control"
                                id="kt_ecommerce_add_product_status_datepicker"
                                placeholder="Pick date & time"
                              />
                            </div>
                          </div>
                        </div>
  
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Activity Details</h2>
                            </div>
                          </div>
  
                          <div className="card-body pt-0">
                            <label className="form-label">Categories</label>
  
                            <select
                              className="form-select mb-2"
                              data-control="select2"
                              data-placeholder="Select an option"
                              data-allow-clear="true"
                              multiple="multiple"
                            >
                              <option></option>
                              <option value="Education">Education</option>
                              <option value="Watches">Medical</option>
                              <option value="Women_Girls">Women & Girls</option>
                              <option value="Animals">Animals</option>
                              <option value="Creative">Creative</option>
                              <option value="Food_Hunger">Food & Hunger</option>
                              <option value="Environment">Environment</option>
                              <option value="Children">Children</option>
                              <option value="Memorial">Memorial</option>
                              <option value="Community_Development">
                                Community Development
                              </option>
                            </select>
  
                            <div className="text-muted fs-7 mt-2 mb-7">
                              Add activity to a category.
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
                          <li className="nav-item">
                            <a
                              className="nav-link text-active-primary pb-4 active"
                              data-bs-toggle="tab"
                              href="#kt_ecommerce_add_product_general"
                            >
                              Activity
                            </a>
                          </li>
  
                          <li className="nav-item">
                            <a
                              className="nav-link text-active-primary pb-4"
                              data-bs-toggle="tab"
                              href="#kt_ecommerce_add_product_advanced"
                            >
                              Additional Info
                            </a>
                          </li>
                        </ul>
  
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="kt_ecommerce_add_product_general"
                            role="tab-panel"
                          >
                            <div className="d-flex flex-column gap-7 gap-lg-10">
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>General Details</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <div className="mb-10 fv-row">
                                    <label className="required form-label">
                                      Activity Title
                                    </label>
  
                                    <input
                                      type="text"
                                      name="product_name"
                                      className="form-control mb-2"
                                      placeholder="Activity name"
                                      value=""
                                    />
  
                                    <div className="text-muted fs-7">
                                      A Activity title is required and recommended
                                      to be unique.
                                    </div>
                                  </div>
                                  <div className="mb-10 fv-row">
                                    <label className="required form-label">
                                      Activity SubTitle
                                    </label>
  
                                    <input
                                      type="text"
                                      name="product_name"
                                      className="form-control mb-2"
                                      placeholder="Activity Sub Title"
                                      value=""
                                    />
                                  </div>
  
                                  <div>
                                    <label
                                      className="form-label"
                                      id="description"
                                    >
                                      Description
                                    </label>
                                    <div ref={quillRef}></div>
                                    <div className="text-muted fs-7">
                                      Set a description to the product htmlFor
                                      better visibility.
                                    </div>
                                  </div>
                                </div>
                              </div>
  
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>Media Uploads</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <label className="required form-label">
                                    Image Gallery Activity
                                  </label>
                                  <div className="fv-row mb-2">
                                    <div
                                      className="dropzone"
                                      id="kt_ecommerce_add_product_media"
                                    >
                                      <div className="dz-message needsclick">
                                        <i className="ki-outline ki-file-up text-primary fs-3x"></i>
  
                                        <div className="ms-4">
                                          <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                            Drop files here or click to upload.
                                          </h3>
                                          <span className="fs-7 fw-semibold text-gray-400">
                                            Upload up to 10 files
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
  
                                  <div className="text-muted fs-7">
                                    Set the product media gallery.
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <label class="col-lg-2 col-form-label text-lg-right">
                                    Banner Image
                                  </label>
                                  <div class="col-lg-10">
                                    <div
                                      class="dropzone dropzone-queue mb-2"
                                      id="kt_dropzonejs_example_3"
                                    >
                                      <div class="dropzone-panel mb-lg-0 mb-2">
                                        <a class="dropzone-select btn btn-sm btn-primary me-2">
                                          Attach files
                                        </a>
                                        <a class="dropzone-remove-all btn btn-sm btn-light-primary">
                                          Remove All
                                        </a>
                                      </div>
                                      <div class="dropzone-items wm-200px">
                                        <div
                                          class="dropzone-item"
                                          style={{ display: "none" }}
                                        >
                                          <div class="dropzone-file">
                                            <div
                                              class="dropzone-filename"
                                              title="some_image_file_name.jpg"
                                            >
                                              <span data-dz-name>
                                                some_image_file_name.jpg
                                              </span>
                                              <strong>
                                                (<span data-dz-size>340kb</span>)
                                              </strong>
                                            </div>
  
                                            <div
                                              class="dropzone-error"
                                              data-dz-errormessage
                                            ></div>
                                          </div>
  
                                          <div class="dropzone-progress">
                                            <div class="progress">
                                              <div
                                                class="progress-bar bg-primary"
                                                role="progressbar"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                aria-valuenow="0"
                                                data-dz-uploadprogress
                                              ></div>
                                            </div>
                                          </div>
  
                                          <div class="dropzone-toolbar">
                                            <span
                                              class="dropzone-delete"
                                              data-dz-remove
                                            >
                                              <i class="bi bi-x fs-1"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
  
                                    <span class="form-text text-muted">
                                      Max file size is 1MB and max number of files
                                      is 5.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div
                            className="tab-pane fade"
                            id="kt_ecommerce_add_product_advanced"
                            role="tab-panel"
                          >
                            <div className="d-flex flex-column gap-7 gap-lg-10">
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>Inventory</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <div className="mb-10 fv-row">
                                    <label className="required form-label">
                                      SKU
                                    </label>
  
                                    <input
                                      type="text"
                                      name="sku"
                                      className="form-control mb-2"
                                      placeholder="SKU Number"
                                      value=""
                                    />
  
                                    <div className="text-muted fs-7">
                                      Enter the product SKU.
                                    </div>
                                  </div>
  
                                  <div className="mb-10 fv-row">
                                    <label className="required form-label">
                                      Barcode
                                    </label>
  
                                    <input
                                      type="text"
                                      name="sku"
                                      className="form-control mb-2"
                                      placeholder="Barcode Number"
                                      value=""
                                    />
  
                                    <div className="text-muted fs-7">
                                      Enter the product barcode number.
                                    </div>
                                  </div>
  
                                  <div className="mb-10 fv-row">
                                    <label className="required form-label">
                                      Quantity
                                    </label>
  
                                    <div className="d-flex gap-3">
                                      <input
                                        type="number"
                                        name="shelf"
                                        className="form-control mb-2"
                                        placeholder="On shelf"
                                        value=""
                                      />
                                      <input
                                        type="number"
                                        name="warehouse"
                                        className="form-control mb-2"
                                        placeholder="In warehouse"
                                      />
                                    </div>
  
                                    <div className="text-muted fs-7">
                                      Enter the product quantity.
                                    </div>
                                  </div>
  
                                  <div className="fv-row">
                                    <label className="form-label">
                                      Allow Backorders
                                    </label>
  
                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <label className="form-check-label">
                                        Yes
                                      </label>
                                    </div>
  
                                    <div className="text-muted fs-7">
                                      Allow customers to purchase products that
                                      are out of stock.
                                    </div>
                                  </div>
                                </div>
                              </div>
  
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>Variations</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <div
                                    className=""
                                    data-kt-ecommerce-catalog-add-product="auto-options"
                                  >
                                    <label className="form-label">
                                      Add Product Variations
                                    </label>
  
                                    <div id="kt_ecommerce_add_product_options">
                                      <div className="form-group">
                                        <div
                                          data-repeater-list="kt_ecommerce_add_product_options"
                                          className="d-flex flex-column gap-3"
                                        >
                                          <div
                                            data-repeater-item=""
                                            className="form-group d-flex flex-wrap align-items-center gap-5"
                                          >
                                            <div className="w-100 w-md-200px">
                                              <select
                                                className="form-select"
                                                name="product_option"
                                                data-placeholder="Select a variation"
                                                data-kt-ecommerce-catalog-add-product="product_option"
                                              >
                                                <option></option>
                                                <option value="color">
                                                  Color
                                                </option>
                                                <option value="size">Size</option>
                                                <option value="material">
                                                  Material
                                                </option>
                                                <option value="style">
                                                  Style
                                                </option>
                                              </select>
                                            </div>
  
                                            <input
                                              type="text"
                                              className="form-control mw-100 w-200px"
                                              name="product_option_value"
                                              placeholder="Variation"
                                            />
  
                                            <button
                                              type="button"
                                              data-repeater-delete=""
                                              className="btn btn-sm btn-icon btn-light-danger"
                                            >
                                              <i className="ki-outline ki-cross fs-1"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
  
                                      <div className="form-group mt-5">
                                        <button
                                          type="button"
                                          data-repeater-create=""
                                          className="btn btn-sm btn-light-primary"
                                        >
                                          <i className="ki-outline ki-plus fs-2"></i>
                                          Add another variation
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
  
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>Shipping</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <div className="fv-row">
                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="kt_ecommerce_add_product_shipping_checkbox"
                                        value="1"
                                      />
                                      <label className="form-check-label">
                                        This is a physical product
                                      </label>
                                    </div>
  
                                    <div className="text-muted fs-7">
                                      Set if the product is a physical or digital
                                      item. Physical products may require
                                      shipping.
                                    </div>
                                  </div>
  
                                  <div
                                    id="kt_ecommerce_add_product_shipping"
                                    className="d-none mt-10"
                                  >
                                    <div className="mb-10 fv-row">
                                      <label className="form-label">Weight</label>
  
                                      <input
                                        type="text"
                                        name="weight"
                                        className="form-control mb-2"
                                        placeholder="Product weight"
                                        value=""
                                      />
  
                                      <div className="text-muted fs-7">
                                        Set a product weight in kilograms (kg).
                                      </div>
                                    </div>
  
                                    <div className="fv-row">
                                      <label className="form-label">
                                        Dimension
                                      </label>
  
                                      <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                                        <input
                                          type="number"
                                          name="width"
                                          className="form-control mb-2"
                                          placeholder="Width (w)"
                                          value=""
                                        />
                                        <input
                                          type="number"
                                          name="height"
                                          className="form-control mb-2"
                                          placeholder="Height (h)"
                                          value=""
                                        />
                                        <input
                                          type="number"
                                          name="length"
                                          className="form-control mb-2"
                                          placeholder="Lengtn (l)"
                                          value=""
                                        />
                                      </div>
  
                                      <div className="text-muted fs-7">
                                        Enter the product dimensions in
                                        centimeters (cm).
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
  
                              <div className="card card-flush py-4">
                                <div className="card-header">
                                  <div className="card-title">
                                    <h2>Meta Options</h2>
                                  </div>
                                </div>
  
                                <div className="card-body pt-0">
                                  <div className="mb-10">
                                    <label className="form-label">
                                      Meta Tag Title
                                    </label>
  
                                    <input
                                      type="text"
                                      className="form-control mb-2"
                                      name="meta_title"
                                      placeholder="Meta tag name"
                                    />
  
                                    <div className="text-muted fs-7">
                                      Set a meta tag title. Recommended to be
                                      simple and precise keywords.
                                    </div>
                                  </div>
  
                                  <div className="mb-10">
                                    <label className="form-label">
                                      Meta Tag Description
                                    </label>
  
                                    <div
                                      id="kt_ecommerce_add_product_meta_description"
                                      name="kt_ecommerce_add_product_meta_description"
                                      className="min-h-100px mb-2"
                                    ></div>
  
                                    <div className="text-muted fs-7">
                                      Set a meta tag description to the product
                                      htmlFor increased SEO ranking.
                                    </div>
                                  </div>
  
                                  <div>
                                    <label className="form-label">
                                      Meta Tag Keywords
                                    </label>
  
                                    <input
                                      id="kt_ecommerce_add_product_meta_keywords"
                                      name="kt_ecommerce_add_product_meta_keywords"
                                      className="form-control mb-2"
                                    />
  
                                    <div className="text-muted fs-7">
                                      Set a list of keywords that the product is
                                      related to. Separate the keywords by adding
                                      a comma
                                      <code>,</code>between each keyword.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="d-flex justify-content-end">
                          <a
                            href="../../demo44/dist/apps/ecommerce/catalog/products.html"
                            id="kt_ecommerce_add_product_cancel"
                            className="btn btn-light me-5"
                          >
                            Cancel
                          </a>
  
                          <button
                            type="submit"
                            id="kt_ecommerce_add_product_submit"
                            className="btn btn-primary"
                          >
                            <span className="indicator-label">Save Changes</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
  
                <div
                  id="kt_app_footer"
                  className="app-footer d-flex flex-column flex-md-row flex-center flex-md-stack py-3"
                >
                  <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">
                      2023&copy;
                    </span>
                    <Link
                      href="/dashboard"
                      
                      className="text-gray-800 text-hover-primary"
                    >
                      Bless & Care
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default addActivities