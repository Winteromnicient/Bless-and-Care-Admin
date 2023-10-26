"use client"
import React from 'react'
import { useState } from 'react';
import { firebaseApp } from '../firebase/firebaseConfig'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'
import Swal from 'sweetalert2'



const signin = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	
	const demoAdmin = (e) => {
		setEmail('vjsiddhant14@gmail.com');
		setPassword('Jsiddhant14');
	
		};
	const handleLogin = async (e) => {
	  e.preventDefault(); // Prevent the default form submission behavior
	  const auth = getAuth();
	  try {
		await signInWithEmailAndPassword(auth, email, password);
		// Successful login, redirect to /dashboard
		router.push('/dashboard');
	  } catch (error) {
		console.error('Login failed:', error);
		Swal.fire({
			icon: 'error',
			title: 'Login Failed',
			text: (error),
		  });
	  }
	};

  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				
				<div className="d-flex flex-lg-row-fluid">
					
                <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
						
						<img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="assets/media/auth/login-animation.gif" alt="" />								
						
						<h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Bless & Care Admin</h1>
						<div className="text-gray-600 fs-base text-center fw-semibold">This portal is only for the admin and management team of  
						<a href="#" className="opacity-75-hover text-primary me-1"> Bless & Care Foundation</a>
						</div>
						
					</div>
					
				</div>
				
				
				<div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
					
					<div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
						
						<div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
							
							<div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
								
								<form className="form w-100" noValidate="noValidate" id="kt_sign_in_form" onSubmit={handleLogin} data-kt-redirect-url="/" action="#">
									
									<div className="text-center mb-11">										
										<h1 className="text-dark fw-bolder mb-3">Sign In</h1>
									</div>									
									
									<div className="row g-3 mb-9">										
										<div className="col-md-6">											
											<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
											<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
											
										</div>
										
										
										<div className="col-md-6">
											
											<a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
											<img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
											<img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
											
										</div>
										
									</div>
									
									
									<div className="separator separator-content my-14">
										<span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
									</div>
									
									
									<div className="fv-row mb-8">
										
										<input type="text" 	placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="off" className="form-control bg-transparent" />
										
									</div>
									
									<div className="fv-row mb-3">
										
										<input type="password" placeholder="Password"   value={password}  onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="off" className="form-control bg-transparent" />
										
									</div>
									
									
									<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8 ">
										<div>
										
										<a className="link-primary " onClick={demoAdmin}>Demo Admin Login</a>
										</div>
										<a href="../../demo44/dist/authentication/layouts/overlay/reset-password.html" className="link-primary">Forgot Password ?</a>
										
									</div>
									
									
									<div className="d-grid mb-10">
										<button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
											
											<span className="indicator-label">Sign In</span>
											
											
											<span className="indicator-progress">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											
										</button>
									</div>
									
									
									<div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
									<a href="../../demo44/dist/authentication/layouts/overlay/sign-up.html" className="link-primary">Sign up</a></div>
									
								</form>
								
							</div>
							
							
							<div className="d-flex flex-stack justify-content-end">

								<div className="d-flex fw-semibold text-primary fs-base gap-5">
									<Link href="/dashboard" >Back to Website</Link> 									
									<a href="../../demo44/dist/pages/contact.html" target="_blank">Contact Us</a>
								</div>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>  
  )
}

export default signin