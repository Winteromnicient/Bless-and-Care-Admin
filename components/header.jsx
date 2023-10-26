import React from 'react'
import '../public/assets/js/components/menu'
import Link from 'next/link'
const Header = () => {
  return (

    // <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
				 
	// 			<div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
					
	// 				<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						
	// 					<div className="app-header-logo d-flex align-items-center me-lg-9">
							
	// 						<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle">
	// 							<i className="ki-outline ki-abstract-14 fs-1"></i>
	// 						</div>
							
							
	// 						<a href="/">
	// 							<img alt="Logo" src="assets/media/logos/b&c_logo.png" className="h-25px theme-light-show" />
	// 							<img alt="Logo" src="assets/media/logos/demo44-dark.svg" className="h-25px theme-dark-show" />
	// 						</a>
							
	// 					</div>
						
						
	// 					<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
							
	// 						<div className="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
								
	// 							<div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}">
									
	// 								<div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0" id="#kt_app_header_menu" data-kt-menu="true">
										
	// 									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
											
	// 										<span className="menu-link">
	// 											<span className="menu-title">Dashboard</span>
	// 											<span className="menu-arrow d-lg-none"></span>
	// 										</span>
																						
	// 									</div>
										
										
	// 									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item  menu-lg-down-accordion me-0 me-lg-2">
											
	// 										<span className="menu-link">
	// 											<span className="menu-title">Activities</span>
	// 											<span className="menu-arrow d-lg-none"></span>
	// 										</span>
																						
	// 									</div>
										
										
	// 									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item  show menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
											
	// 										<span className="menu-link">
	// 											<span className="menu-title">Fundraisers</span>
	// 											<span className="menu-arrow d-lg-none"></span>
	// 										</span>
																						
	// 									</div>
										
										
	// 									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
											
	// 										<span className="menu-link">
	// 											<span className="menu-title">Master Data</span>
	// 											<span className="menu-arrow d-lg-none"></span>
	// 										</span>
											
											
	// 										<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
												
	// 											<div className="menu-item">
													
	// 												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
	// 													<span className="menu-icon">
	// 														<i className="ki-outline ki-rocket fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Users</span>
	// 												</a>
													
	// 											</div>
												
												
	// 											<div className="menu-item">
													
	// 												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
	// 													<span className="menu-icon">
	// 														<i className="ki-outline ki-abstract-26 fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Donation Reports</span>
	// 												</a>
													
	// 											</div>
												
												
	// 											<div className="menu-item">
													
	// 												<a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo44/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
	// 													<span className="menu-icon">
	// 														<i className="ki-outline ki-switch fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Admins</span>
	// 												</a>
													
	// 											</div>
												
												
	// 											<div className="menu-item">
													
	// 												<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
	// 													<span className="menu-icon">
	// 														<i className="ki-outline ki-code fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Documentations</span>
	// 												</a>
													
	// 											</div>
												
	// 										</div>
											
	// 									</div>
										
	// 								</div>
									
	// 							</div>
								
	// 						</div>
							
							
	// 						<div className="app-navbar flex-shrink-0">	
								
	// 							<div className="app-navbar-item ms-1 ms-lg-4" id="kt_header_user_menu_toggle">
									
	// 								<div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
	// 									<span className="fw-bold fs-5"> Siddhant Jadhav</span>
	// 									<img className="symbol symbol-35px symbol-md-40px" src="assets/media/avatars/300-5.jpg" alt="user" />
	// 								</div>
									
	// 								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
										
	// 									<div className="menu-item px-3">
	// 										<div className="menu-content d-flex align-items-center px-3">
												
	// 											<div className="symbol symbol-50px me-5">
	// 												<img alt="Logo" src="assets/media/avatars/300-5.jpg" />
	// 											</div>
												
												
	// 											<div className="d-flex flex-column">
	// 												<div className="fw-bold d-flex align-items-center fs-5">Siddhant	
	// 												<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Admin</span></div>
	// 												<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">Siddhant@tebble.in</a>
	// 											</div>
												
	// 										</div>
	// 									</div>
										
										
	// 									<div className="separator my-2"></div>
										
										
	// 									<div className="menu-item px-5">
	// 										<a href="../../demo44/dist/account/overview.html" className="menu-link px-5">My Profile</a>
	// 									</div>
										
										
										
	// 									<div className="separator my-2"></div>
										
										
	// 									<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
	// 										<a href="#" className="menu-link px-5">
	// 											<span className="menu-title position-relative">Mode
	// 											<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
	// 												<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
	// 												<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
	// 											</span></span>
	// 										</a>
											
	// 										<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
												
	// 											<div className="menu-item px-3 my-0">
	// 												<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
	// 													<span className="menu-icon" data-kt-element="icon">
	// 														<i className="ki-outline ki-night-day fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Light</span>
	// 												</a>
	// 											</div>
												
												
	// 											<div className="menu-item px-3 my-0">
	// 												<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
	// 													<span className="menu-icon" data-kt-element="icon">
	// 														<i className="ki-outline ki-moon fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">Dark</span>
	// 												</a>
	// 											</div>
												
												
	// 											<div className="menu-item px-3 my-0">
	// 												<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
	// 													<span className="menu-icon" data-kt-element="icon">
	// 														<i className="ki-outline ki-screen fs-2"></i>
	// 													</span>
	// 													<span className="menu-title">System</span>
	// 												</a>
	// 											</div>
												
	// 										</div>
											
	// 									</div>
																				
										
	// 									<div className="menu-item px-5 my-1">
	// 										<a href="../../demo44/dist/account/settings.html" className="menu-link px-5">User Settings</a>
	// 									</div>
										
										
	// 									<div className="menu-item px-5">
	// 										<a href="../../demo44/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
	// 									</div>
										
	// 								</div>
									
									
	// 							</div>
								
								
	// 							<div className="app-navbar-item d-flex align-items-center d-lg-none ms-1 me-n2">
	// 								<a href="#" className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
	// 									<i className="ki-outline ki-burger-menu-2 fs-1"></i>
	// 								</a>
	// 							</div>
								
	// 						</div>
							
	// 					</div>
						
	// 				</div>
					
	// 			</div>
								
	// 		</div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" href="/dashboard">Dashboard </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/activities">Activities</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/fundraiser">Fundraisers</Link>
      </li>
    </ul>
    <span class="navbar-text justify-content-end">
      Siddhant Jadhav 
    </span>
  </div>
</nav>
  )
}

export default Header