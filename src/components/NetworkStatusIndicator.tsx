import React, { useState, useEffect } from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export const NetworkStatusIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnected) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] sm:w-auto animate-fadeIn">
      {!isOnline ? (
        <div className="bg-[#1F2937]/95 backdrop-blur-md text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-gray-700/80 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <WifiOff className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-white">No Internet Connection</div>
            <div className="text-[11px] text-gray-300 font-light mt-0.5">
              Cached content remains active. You can still explore all Zanzibar tours, suites &amp; prices.
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-emerald-900/95 backdrop-blur-md text-white text-xs px-4 py-2.5 rounded-2xl shadow-2xl border border-emerald-700/80 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium text-white">Connection restored. Live rates and concierge are ready.</span>
        </div>
      )}
    </div>
  );
};