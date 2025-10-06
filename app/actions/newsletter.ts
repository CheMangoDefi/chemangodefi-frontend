'use server';

import { subscribeViaLoops } from './loops';
import { subscribeViaGoogleSheets } from './google-sheets';

// Re-export types for backwards compatibility
export type NewsletterSource = 'CheMango Website Hero' | 'CheMango Website CTA';

export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Main newsletter subscription handler with provider switching
 *
 * Provider Selection (in order of precedence):
 * 1. If USE_LOOPS=true → Use Loops.so
 * 2. Otherwise → Use Google Sheets (default)
 *
 * Optional: Set NEWSLETTER_DUAL_SAVE=true to save to BOTH providers (Google Sheets + Loops)
 *
 * To switch providers, simply change the USE_LOOPS environment variable:
 * - USE_LOOPS=false (or not set) → Google Sheets
 * - USE_LOOPS=true → Loops.so
 *
 * @param email - User's email address
 * @param source - Where the subscription originated from (Hero or CTA section)
 * @returns Promise with success status and optional message/error
 */
export async function subscribeToNewsletter(
  email: string,
  source: NewsletterSource
): Promise<NewsletterResponse> {
  // Determine which provider to use based on environment variables
  const useLoops = process.env.USE_LOOPS === 'true';
  const dualSave = process.env.NEWSLETTER_DUAL_SAVE === 'true';

  try {
    // DUAL SAVE MODE: Save to both Google Sheets and Loops
    if (dualSave) {
      console.log('[Newsletter] Dual save mode enabled - saving to both providers');

      // Primary: Always save to Google Sheets first (as backup)
      const sheetsResult = await subscribeViaGoogleSheets(email, source);

      // Secondary: Try to save to Loops (don't fail if Loops is down)
      if (process.env.LOOPS_API_KEY) {
        try {
          await subscribeViaLoops(email, source);
          console.log('[Newsletter] Successfully saved to both Google Sheets and Loops');
        } catch (loopsError) {
          console.warn('[Newsletter] Google Sheets succeeded but Loops failed:', loopsError);
          // Don't fail the request - we have the data in Sheets
        }
      }

      return sheetsResult;
    }

    // SINGLE PROVIDER MODE: Use either Loops or Google Sheets
    if (useLoops) {
      console.log('[Newsletter] Using Loops.so provider');
      return await subscribeViaLoops(email, source);
    } else {
      console.log('[Newsletter] Using Google Sheets provider');
      return await subscribeViaGoogleSheets(email, source);
    }
  } catch (error) {
    console.error('[Newsletter] Subscription error:', error);
    return {
      success: false,
      error: 'Hubo un error inesperado. Por favor intenta nuevamente más tarde.',
    };
  }
}
