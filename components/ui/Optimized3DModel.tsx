// components/OptimizedSplineModel.tsx

import { Suspense, useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Loading fallback component
const SplineLoadingFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={"/images/hero_image.png"}
        alt="hero loading preloader"
        width={100}
        height={100}
      />
    </div>
  );
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <SplineLoadingFallback />
});

interface SplineApplication {
  setQuality: (quality: 'low' | 'medium' | 'high') => void;
  enableAutoRender: (enable: boolean) => void;
  setFrameRate: (fps: number) => void;
}

interface SplineModelProps {
  scene: string;
  fallbackComponent?: React.ReactNode;
  onLoadSuccess?: () => void;
  onLoadError?: (error: Error) => void;
}

const OptimizedSplineModel: React.FC<SplineModelProps> = ({
  scene,
  fallbackComponent,
  onLoadSuccess,
  onLoadError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [deviceCapability, setDeviceCapability] = useState({
    isLowPowerDevice: false,
    performanceScore: 0,
    supportsWebGL: false,
  });

  // Device capability check function
  useEffect(() => {
    const checkDeviceCapability = () => {
      if (typeof window === 'undefined') return;

      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const gl2 = canvas.getContext('webgl2');

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      const performanceScore = calculatePerformanceScore();

      setDeviceCapability({
        isLowPowerDevice: isMobile || navigator.hardwareConcurrency <= 4,
        performanceScore,
        supportsWebGL: !!gl,
      });
    };

    checkDeviceCapability();
  }, []);

  // Device-specific optimizations on Spline load
  const handleSplineLoad = useCallback(
    (spline: any) => {
      try {
        if (deviceCapability.isLowPowerDevice || deviceCapability.performanceScore < 50) {
          spline.setQuality('low');
          spline.enableAutoRender(false);
          spline.setFrameRate(30);
        } else if (deviceCapability.performanceScore < 80) {
          spline.setQuality('medium');
          spline.setFrameRate(45);
        }

        setIsLoaded(true);
        onLoadSuccess?.();
      } catch (error) {
        console.warn('Failed to apply Spline optimizations:', error);
        setIsLoaded(true);
      }
    },
    [deviceCapability, onLoadSuccess]
  );

  const handleError = useCallback(
    (error: any) => {
      setSplineError(true);
      onLoadError?.(error);
      console.error('Spline loading error:', error);
    },
    [onLoadError]
  );

  if (!deviceCapability.supportsWebGL) {
    return (
      <div className="flex items-center justify-center w-full h-full text-red-500">
        <p>Your browser doesn&apos;t support WebGL, which is required for 3D graphics.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative transform-gpu w-full h-full"
    >
      <div className="relative w-full h-full">
        <Suspense fallback={fallbackComponent || <SplineLoadingFallback />}>
          {!splineError ? (
            <Spline
              scene={scene}
              onLoad={handleSplineLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                visibility: isLoaded ? 'visible' : 'hidden',
              }}
              className={`transform-gpu ${isLoaded ? 'animate-webgl-scale-in-fade' : ''}`}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-red-500">
              <p>Failed to load 3D model. Please refresh the page.</p>
            </div>
          )}
        </Suspense>
      </div>
    </motion.div>
  );
};

export default OptimizedSplineModel;

// Helper to calculate performance score
const calculatePerformanceScore = (): number => {
    let score = 0;
  
    if (navigator.hardwareConcurrency) {
      score += Math.min(navigator.hardwareConcurrency * 10, 40);
    }
  
    if ('deviceMemory' in navigator) {
      score += Math.min((navigator as any).deviceMemory * 5, 30);
    }
  
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (!isMobile) score += 30;
  
    return Math.min(score, 100);
  };
  