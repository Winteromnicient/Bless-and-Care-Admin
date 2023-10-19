import KTApp from '../../public/assets/js/components/app.js';
// Init components
var WebApp = (function () {
  
  return {
    init: function () {
     
      let Choices = require('choices.js');
      window.Choices = Choices;

      import('@lottiefiles/lottie-player');
      
      window.KTApp = KTApp;
      window.KTUtil = require('../../public/assets/js/components/util.js');
      window.KTEventHandler = require('../../public/assets/js/components/event-handler.js');
      window.KTBlockUI = require('../../public/assets/js/components/blockui.js');
      window.KTCookie = require('../../public/assets/js/components/cookie.js');
      window.KTDialer = require('../../public/assets/js/components/dialer.js');
      window.KTDrawer = require('../../public/assets/js/components/drawer.js');
      window.KTFeedback = require('../../public/assets/js/components/feedback.js');
      window.KTImageInput = require('../../public/assets/js/components/image-input.js');
      window.KTMenu = require('../../public/assets/js/components/menu.js');
      window.KTPasswordMeter = require('../../public/assets/js/components/password-meter.js');
      window.KTScroll = require('../../public/assets/js/components/scroll.js');
      window.KTScrolltop = require('../../public/assets/js/components/scrolltop.js');
      window.KTSearch = require('../../public/assets/js/components/search.js');
      window.KTStepper = require('../../public/assets/js/components/stepper.js');
      window.KTSticky = require('../../public/assets/js/components/sticky.js');
      window.KTSwapper = require('../../public/assets/js/components/swapper.js');
      window.KTToggle = require('../../public/assets/js/components/toggle.js');
      window.KTLayoutSearch = require('../../public/assets/js/layout/search.js');
      window.KTThemeMode = require('../../public/assets/js/layout/theme-mode.js');
      window.KTThemeModeUser = require('../../public/assets/js/layout/theme-mode-user.js');
      window.bootstrap = require('bootstrap');
      window.flatpickr = require('flatpickr/dist/flatpickr.js');
      window.select2 = require('select2/dist/js/select2.js');
      window.swal = require('sweetalert2');
      // window.Sortable = require('@shopify/draggable/lib/sortable');
      window.ApexCharts = require('apexcharts');
      window.FileViewer = require('react-file-viewer');
      window.fileviewer = require('file-viewer');
      window.Quill = require('quill')
      window.fslightbox = require('fslightbox')
      window.KTComponents = require('../../public/assets/js/components/_init.js');
      window.daterangepicker = require('daterangepicker');
      window.KTAppLayoutBuilder = require('../../public/assets/js/layout/builder.js');

      KTApp.init();
      setTimeout(() => {
        KTComponents.init();
      }, 1500);
    },
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  WebApp.init();
});

// Declare KTApp for Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  window.WebApp = module.exports = WebApp;
}
