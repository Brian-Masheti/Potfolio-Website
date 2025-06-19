// PWA Debug Script - Add this to your page to debug PWA installation issues
(function() {
  console.log('=== PWA Debug Information ===');
  
  // Check if service worker is supported
  if ('serviceWorker' in navigator) {
    console.log('✅ Service Worker is supported');
    
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if (registrations.length > 0) {
        console.log('✅ Service Worker is registered:', registrations);
      } else {
        console.log('❌ No Service Worker registrations found');
      }
    });
  } else {
    console.log('❌ Service Worker is not supported');
  }
  
  // Check manifest
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    console.log('✅ Manifest link found:', manifestLink.href);
    
    fetch(manifestLink.href)
      .then(response => response.json())
      .then(manifest => {
        console.log('✅ Manifest loaded:', manifest);
        
        // Check required fields
        const requiredFields = ['name', 'short_name', 'start_url', 'display', 'icons'];
        requiredFields.forEach(field => {
          if (manifest[field]) {
            console.log(`✅ ${field}:`, manifest[field]);
          } else {
            console.log(`❌ Missing required field: ${field}`);
          }
        });
        
        // Check icons
        if (manifest.icons && manifest.icons.length > 0) {
          const has192 = manifest.icons.some(icon => icon.sizes.includes('192x192'));
          const has512 = manifest.icons.some(icon => icon.sizes.includes('512x512'));
          
          if (has192 && has512) {
            console.log('✅ Required icon sizes (192x192 and 512x512) are present');
          } else {
            console.log('❌ Missing required icon sizes (need 192x192 and 512x512)');
          }
        }
      })
      .catch(error => {
        console.log('❌ Failed to load manifest:', error);
      });
  } else {
    console.log('❌ No manifest link found');
  }
  
  // Check HTTPS
  if (location.protocol === 'https:' || location.hostname === 'localhost') {
    console.log('✅ Running on HTTPS or localhost');
  } else {
    console.log('❌ PWA requires HTTPS (except on localhost)');
  }
  
  // Check beforeinstallprompt event
  let beforeInstallPromptFired = false;
  window.addEventListener('beforeinstallprompt', (e) => {
    beforeInstallPromptFired = true;
    console.log('✅ beforeinstallprompt event fired - PWA is installable!');
  });
  
  // Check after a delay
  setTimeout(() => {
    if (!beforeInstallPromptFired) {
      console.log('❌ beforeinstallprompt event has not fired yet');
      console.log('This could mean:');
      console.log('- PWA criteria are not met');
      console.log('- App is already installed');
      console.log('- Browser doesn\'t support PWA installation');
      console.log('- Need to wait longer or interact with the page');
    }
  }, 3000);
  
  // Check if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('✅ App is running in standalone mode (likely installed)');
  } else {
    console.log('ℹ️ App is running in browser mode');
  }
  
  console.log('=== End PWA Debug Information ===');
})();