'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  autoCloseDelay?: number; // in milliseconds, default 4000
}

/**
 * Success celebration dialog component for newsletter subscriptions
 * Features:
 * - Animated mango mascot celebrating
 * - Mango orange-to-green gradient design
 * - Auto-dismisses after specified delay
 * - Fully accessible with keyboard navigation
 * - Mobile responsive
 */
export default function SuccessDialog({
  isOpen,
  onClose,
  message = '¡Listo! Te mantendremos actualizado',
  autoCloseDelay = 8000,
}: SuccessDialogProps) {
  const [countdown, setCountdown] = useState(autoCloseDelay / 1000);

  useEffect(() => {
    if (!isOpen) return;

    // Reset countdown when dialog opens
    setCountdown(autoCloseDelay / 1000);

    // Auto-close timer
    const closeTimer = setTimeout(() => {
      onClose();
    }, autoCloseDelay);

    // Countdown timer (updates every second)
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    // Cleanup timers on unmount or close
    return () => {
      clearTimeout(closeTimer);
      clearInterval(countdownInterval);
    };
  }, [isOpen, autoCloseDelay, onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Dialog container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-dialog-title"
              aria-describedby="success-dialog-description"
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden"
            >
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFA94D] via-[#FFD43B] to-[#6ABF4B] opacity-20 blur-xl"></div>

              {/* Content wrapper */}
              <div className="relative bg-white rounded-3xl border-4 border-transparent">
                {/* Gradient border using background-clip */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFA94D] via-[#FFD43B] to-[#6ABF4B] -z-10"></div>
                <div className="absolute inset-[4px] rounded-3xl bg-white -z-10"></div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFA94D] focus:ring-offset-2 z-10"
                  aria-label="Cerrar diálogo"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Main content */}
                <div className="p-8 pt-12 text-center space-y-6">
                  {/* Animated Mango Mascot */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: 'spring',
                      damping: 10,
                      stiffness: 100,
                      delay: 0.2,
                    }}
                    className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40"
                  >
                    {/* Celebratory bounce animation */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0, -10, 0],
                        rotate: [0, -5, 5, -3, 0],
                        scale: [1, 1.1, 1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                      }}
                    >
                      <Image
                        src="/newsletter character.png"
                        alt="CheMango mascot celebrating"
                        width={256}
                        height={256}
                        className="object-contain drop-shadow-2xl"
                        priority
                        quality={100}
                      />
                    </motion.div>

                    {/* Success check icon with pop animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: 'spring',
                        damping: 15,
                        stiffness: 200,
                        delay: 0.4,
                      }}
                      className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#6ABF4B] to-[#4D9F3A] rounded-full p-2 shadow-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Success message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="space-y-3"
                  >
                    <h2
                      id="success-dialog-title"
                      className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] bg-clip-text text-transparent"
                    >
                      ¡Bienvenido!
                    </h2>
                    <p
                      id="success-dialog-description"
                      className="text-lg text-[#333333] font-medium"
                    >
                      {message}
                    </p>
                  </motion.div>

                  {/* Additional info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="pt-4 space-y-2"
                  >
                    <p className="text-sm text-gray-500">
                      Pronto recibirás noticias sobre CheMango
                    </p>

                    {/* Auto-close countdown */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '100%' }}
                          animate={{ width: '0%' }}
                          transition={{
                            duration: autoCloseDelay / 1000,
                            ease: 'linear',
                          }}
                          className="h-full bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B]"
                        />
                      </div>
                      <span>
                        {countdown}s
                      </span>
                    </div>
                  </motion.div>

                  {/* Optional close button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFA94D] focus:ring-offset-2"
                  >
                    Continuar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
