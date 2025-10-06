'use server';

import { google } from 'googleapis';

export type NewsletterSource = 'CheMango Website Hero' | 'CheMango Website CTA';

export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Initialize Google Sheets authentication with service account credentials
 * Uses environment variables for secure credential management
 */
async function getGoogleSheetsAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Google Sheets credentials not configured');
  }

  // Replace literal \n in the private key with actual newlines
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: formattedPrivateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return auth;
}

/**
 * Server action to save email subscription to Google Sheets
 * @param email - User's email address
 * @param source - Where the subscription originated from (Hero or CTA section)
 * @returns Promise with success status and optional message/error
 */
export async function subscribeViaGoogleSheets(
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

    // Check if Google Sheets credentials are configured
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Subscribers';

    if (!spreadsheetId) {
      console.error('GOOGLE_SPREADSHEET_ID is not configured');
      return {
        success: false,
        error: 'El servicio de suscripción no está configurado correctamente',
      };
    }

    // Initialize Google Sheets API
    const auth = await getGoogleSheetsAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data to append
    const timestamp = new Date().toISOString();
    const status = 'subscribed';
    const values = [[timestamp, email, source, status]];

    // Append data to the specified sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:D`, // Append to columns A-D (Timestamp, Email, Source, Status)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    // Check if the operation was successful
    if (response.status === 200 && response.data.updates?.updatedRows) {
      return {
        success: true,
        message: '¡Listo! Te mantendremos actualizado',
      };
    } else {
      console.error('Google Sheets API unexpected response:', response);
      return {
        success: false,
        error: 'Hubo un problema al procesar tu suscripción. Por favor intenta nuevamente.',
      };
    }
  } catch (error) {
    // Handle authentication and API errors
    console.error('Google Sheets subscription error:', error);

    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes('credentials not configured')) {
        return {
          success: false,
          error: 'El servicio de suscripción no está configurado correctamente',
        };
      }

      if (error.message.includes('PERMISSION_DENIED')) {
        console.error('Google Sheets permission denied - check if sheet is shared with service account');
        return {
          success: false,
          error: 'Error de permisos en el servicio. Por favor contacta al administrador.',
        };
      }

      if (error.message.includes('NOT_FOUND')) {
        console.error('Spreadsheet or sheet name not found');
        return {
          success: false,
          error: 'El servicio de suscripción no está configurado correctamente',
        };
      }

      if (error.message.includes('RATE_LIMIT_EXCEEDED') || error.message.includes('quota')) {
        return {
          success: false,
          error: 'Demasiados intentos. Por favor espera un momento e intenta nuevamente.',
        };
      }

      if (error.message.includes('network') || error.message.includes('ENOTFOUND')) {
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
