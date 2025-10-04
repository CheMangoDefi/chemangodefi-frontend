'use server';

import { LoopsClient } from 'loops';

// Initialize Loops client with API key from environment variables
const loops = new LoopsClient(process.env.LOOPS_API_KEY!);

export type NewsletterSource = 'CheMango Website Hero' | 'CheMango Website CTA';

export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Server action to subscribe a user to the CheMango newsletter via Loops.so
 * @param email - User's email address
 * @param source - Where the subscription originated from (Hero or CTA section)
 * @returns Promise with success status and optional message/error
 */
export async function subscribeToNewsletter(
  email: string,
  source: NewsletterSource
): Promise<NewsletterResponse> {
  try {
    // Basic email validation on server side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Por favor ingresa un email válido',
      };
    }

    // Check if API key is configured
    if (!process.env.LOOPS_API_KEY) {
      console.error('LOOPS_API_KEY is not configured');
      return {
        success: false,
        error: 'El servicio de suscripción no está configurado correctamente',
      };
    }

    // Subscribe user to Loops
    const response = await loops.updateContact(email, {
      subscribed: true,
      source: source,
    });

    // Check if the API call was successful
    if (response.success) {
      return {
        success: true,
        message: '¡Listo! Te mantendremos actualizado',
      };
    } else {
      // Handle API error
      console.error('Loops API error:', response);
      return {
        success: false,
        error: 'Hubo un problema al procesar tu suscripción. Por favor intenta nuevamente.',
      };
    }
  } catch (error) {
    // Handle network or unexpected errors
    console.error('Newsletter subscription error:', error);

    // Check for specific error types
    if (error instanceof Error) {
      // Rate limiting or network errors
      if (error.message.includes('rate limit')) {
        return {
          success: false,
          error: 'Demasiados intentos. Por favor espera un momento e intenta nuevamente.',
        };
      }

      if (error.message.includes('network') || error.message.includes('fetch')) {
        return {
          success: false,
          error: 'Error de conexión. Por favor verifica tu internet e intenta nuevamente.',
        };
      }
    }

    return {
      success: false,
      error: 'Hubo un error inesperado. Por favor intenta nuevamente más tarde.',
    };
  }
}
