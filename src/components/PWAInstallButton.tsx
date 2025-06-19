import React, { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [debug, setDebug] = useState<string>("");

  useEffect(() => {
    // Check if running on localhost or HTTPS
    if (!(window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      setDebug("PWA install is only available on HTTPS or localhost.");
      return;
    }
    // Check for manifest
    const manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) {
      setDebug("Manifest not found. PWA install not available.");
      return;
    }
    // Check for service worker
    if (!('serviceWorker' in navigator)) {
      setDebug("Service worker not supported in this browser.");
      return;
    }
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setDebug("App is already installed (standalone mode). No install button.");
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt event fired');
      setDebug('beforeinstallprompt event fired. Install button should show.');
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setDebug('PWA was installed.');
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Extra debug: check if service worker is controlling the page
    navigator.serviceWorker.getRegistration().then(reg => {
      if (!reg) {
        setDebug(d => d + '\nService worker is not registered.');
      } else if (!navigator.serviceWorker.controller) {
        setDebug(d => d + '\nService worker is registered but not controlling the page. Try reloading.');
      }
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      setDebug("No install prompt available.");
      return;
    }
    await deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setDebug("User accepted the install prompt.");
    } else {
      setDebug("User dismissed the install prompt.");
    }
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  return (
    <>
      {showInstallButton && (
        <button
          id="install-button"
          onClick={handleInstallClick}
          className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 z-50 text-sm sm:text-base"
          aria-label="Install PWA"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Install App
        </button>
      )}
      {/*
      {debug && (
        <div style={{position: 'fixed', bottom: 0, left: 0, background: '#fffbe6', color: '#b45309', padding: 8, zIndex: 10000, fontSize: 12, maxWidth: 400, border: '1px solid #f59e42', borderRadius: 4}}>
          <b>PWA Debug:</b> {debug}
        </div>
      )}
      */}
    </>
  );
};

export default PWAInstallButton;