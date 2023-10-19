'use client'


import { default as $, default as jQuery } from 'jquery';
import { useRouter } from 'next/router';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import '../app/styles/sass/plugins.scss';
import '../app/styles/sass/style.scss';


export default function RootLayout({ children }) {

  useEffect(() => {
    window.$ = $;
    window.jQuery = jQuery;
    window.moment = moment;
    if (typeof window !== 'undefined') {
      let WebApp = require('../app/plugins/initWebApp.js');
      window.WebApp = WebApp;
      WebApp.init();
    }
  }, []);




  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
