# Google Sheets Setup Guide

This guide will walk you through setting up Google Sheets as your newsletter email collection backend for CheMango DeFi.

## Why Google Sheets?

- **Free**: No cost for storing subscriber emails
- **Simple**: Easy to view, export, and manage your subscriber list
- **Reliable**: Google's infrastructure ensures your data is safe
- **Temporary**: Easy to migrate to Loops.so later when ready

---

## Prerequisites

- A Google account
- Access to Google Cloud Console
- ~15 minutes for setup

---

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Click **+ Blank** to create a new spreadsheet
3. Name it something like `CheMango Subscribers` or `CheMango Newsletter`
4. Set up your column headers in Row 1:
   ```
   A1: Timestamp
   B1: Email
   C1: Source
   D1: Status
   ```
5. **Save the Spreadsheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
   - Copy the `SPREADSHEET_ID_HERE` part
   - You'll need this for your `.env.local` file

6. Note the **Sheet Tab Name** (default is "Sheet1", you can rename it to "Subscribers")

---

## Step 2: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Select a Project** → **New Project**
3. Name your project (e.g., `CheMango Newsletter`)
4. Click **Create**
5. Wait for the project to be created, then select it

---

## Step 3: Enable Google Sheets API

1. In your Google Cloud project, go to **APIs & Services** → **Library**
2. Search for `Google Sheets API`
3. Click on **Google Sheets API**
4. Click **Enable**
5. Wait for the API to be enabled

---

## Step 4: Create a Service Account

A service account is like a "robot user" that your Next.js app will use to access Google Sheets.

1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **Service Account**
3. Fill in the service account details:
   - **Service account name**: `chemango-newsletter-bot` (or any name you prefer)
   - **Service account ID**: Will auto-generate (e.g., `chemango-newsletter-bot`)
   - **Description**: `Service account for CheMango newsletter email collection`
4. Click **Create and Continue**
5. Skip the optional steps (Grant access & Grant users access)
6. Click **Done**

---

## Step 5: Create Service Account Keys (Credentials)

1. In **APIs & Services** → **Credentials**, find your newly created service account
2. Click on the service account email (e.g., `chemango-newsletter-bot@project-name.iam.gserviceaccount.com`)
3. Go to the **Keys** tab
4. Click **Add Key** → **Create new key**
5. Select **JSON** format
6. Click **Create**
7. A JSON file will be downloaded to your computer
8. **IMPORTANT**: Keep this file secure! It contains sensitive credentials

---

## Step 6: Share Your Spreadsheet with the Service Account

Your service account needs permission to write to your spreadsheet.

1. Open your Google Spreadsheet (from Step 1)
2. Click the **Share** button (top right)
3. In the "Add people and groups" field, paste the **service account email**
   - Find this in the JSON file you downloaded: look for `"client_email"`
   - It looks like: `chemango-newsletter-bot@project-name.iam.gserviceaccount.com`
4. Set permission to **Editor**
5. **Uncheck** "Notify people" (the service account won't read emails)
6. Click **Share**

**Why?** This allows your Next.js app (using the service account) to append rows to your spreadsheet.

---

## Step 7: Extract Credentials for .env.local

Now you'll extract the necessary values from the JSON credentials file.

1. Open the downloaded JSON file in a text editor
2. Find these values and copy them to your `.env.local` file:

### A. Spreadsheet ID
```env
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_from_step_1
```

### B. Client Email
```env
GOOGLE_SHEETS_CLIENT_EMAIL=chemango-newsletter-bot@project-name.iam.gserviceaccount.com
```
Copy the value from `"client_email"` in the JSON file.

### C. Private Key
```env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

**IMPORTANT**: Copy the **entire** `"private_key"` value from the JSON file, **including the quotes**.
The key will have `\n` characters in it - **keep them as-is**, don't replace them with actual newlines.

Example of what it should look like:
```env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

### D. Sheet Name (Optional)
```env
GOOGLE_SHEET_NAME=Subscribers
```
Use the name of the tab in your spreadsheet (default is "Sheet1", or whatever you renamed it to).

---

## Step 8: Update Your .env.local File

1. Copy `.env.local.example` to `.env.local` if you haven't already:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update the Google Sheets section with your values:
   ```env
   # ============================================
   # Newsletter Provider Configuration
   # ============================================
   USE_LOOPS=false

   # ============================================
   # Google Sheets Integration
   # ============================================
   GOOGLE_SPREADSHEET_ID=1a2b3c4d5e6f7g8h9i0j_example_id
   GOOGLE_SHEETS_CLIENT_EMAIL=chemango-newsletter-bot@chemango-newsletter.iam.gserviceaccount.com
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_NAME=Subscribers
   ```

3. Save the file

---

## Step 9: Test Your Integration

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

2. Go to your website's hero section or CTA section

3. Enter a test email address and subscribe

4. Check your Google Spreadsheet - you should see a new row with:
   - Timestamp (e.g., `2025-01-04T10:30:15.123Z`)
   - Email (e.g., `test@example.com`)
   - Source (e.g., `CheMango Website Hero`)
   - Status (e.g., `subscribed`)

5. If it works, congratulations! If not, check the troubleshooting section below.

---

## Step 10: Format Your Spreadsheet (Optional)

Make your data easier to read:

1. **Freeze the header row**: Select row 1 → View → Freeze → 1 row
2. **Add filters**: Select row 1 → Data → Create a filter
3. **Format columns**:
   - Column A (Timestamp): Format → Number → Date time
   - Column B (Email): Leave as text
   - Column C (Source): Leave as text
   - Column D (Status): Leave as text
4. **Add data validation** (optional): Restrict Column D to only allow "subscribed" values
5. **Add conditional formatting** (optional): Highlight duplicate emails in red

---

## Troubleshooting

### Error: "El servicio de suscripción no está configurado correctamente"

**Cause**: Missing or incorrect environment variables.

**Solution**:
1. Check that your `.env.local` file exists
2. Verify all required variables are set (GOOGLE_SPREADSHEET_ID, GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY)
3. Restart your dev server after changing .env.local

### Error: "Error de permisos en el servicio"

**Cause**: Service account doesn't have access to the spreadsheet.

**Solution**:
1. Open your Google Spreadsheet
2. Click Share
3. Verify the service account email is listed as an Editor
4. If not, add it again with Editor permissions

### Error: "NOT_FOUND"

**Cause**: Spreadsheet ID is incorrect or sheet tab name doesn't exist.

**Solution**:
1. Verify GOOGLE_SPREADSHEET_ID matches your spreadsheet URL
2. Check that GOOGLE_SHEET_NAME matches the tab name exactly (case-sensitive)
3. Default sheet name is usually "Sheet1" if you haven't renamed it

### Error: "Invalid private key"

**Cause**: Private key is malformed or missing characters.

**Solution**:
1. Make sure you copied the **entire** `private_key` value from the JSON file
2. Keep the quotes around the key: `"-----BEGIN PRIVATE KEY-----\n..."`
3. Don't replace `\n` with actual newlines
4. Don't add or remove any characters

### Emails aren't appearing in the spreadsheet

**Solution**:
1. Check your browser's console for errors
2. Check your Next.js server logs for error messages
3. Verify the service account email has Editor access
4. Make sure the sheet tab name matches exactly
5. Try manually adding a row to ensure the service account has write access

---

## Switching Back to Loops.so

When you're ready to use Loops.so instead of Google Sheets:

1. Update your `.env.local` file:
   ```env
   USE_LOOPS=true
   LOOPS_API_KEY=your_actual_loops_api_key
   ```

2. Restart your development server:
   ```bash
   npm run dev
   ```

3. That's it! New subscriptions will go to Loops.so

---

## Using Both Providers (Dual Save)

If you want to save emails to BOTH Google Sheets and Loops.so simultaneously (recommended during migration):

1. Update your `.env.local` file:
   ```env
   NEWSLETTER_DUAL_SAVE=true
   LOOPS_API_KEY=your_actual_loops_api_key

   # Keep your Google Sheets credentials configured
   ```

2. Restart your development server

3. Now every subscription will be saved to Google Sheets (primary) AND Loops.so (secondary)

4. If Loops.so fails, the subscription will still succeed via Google Sheets (fail-safe)

---

## Security Best Practices

1. **Never commit .env.local** to Git
   - Already in .gitignore, but double-check

2. **Keep your JSON credentials file secure**
   - Don't share it publicly
   - Don't commit it to Git
   - Store it in a password manager or secure location

3. **Rotate credentials periodically**
   - Create a new service account key every 6-12 months
   - Delete old keys in Google Cloud Console

4. **Use minimal permissions**
   - Service account only needs access to the specific spreadsheet
   - Don't give it broader Google Workspace access

5. **Monitor access logs**
   - Check Google Cloud Console → IAM → Service Accounts → View Logs
   - Look for unexpected access patterns

---

## Data Management

### Exporting Your Subscriber List

1. Open your Google Spreadsheet
2. File → Download → CSV or Excel

### Importing to Loops.so

1. Export your Google Sheets data as CSV
2. Go to Loops.so dashboard
3. Import contacts from CSV
4. Map columns: Email → Email, Source → Source

### Backing Up Your Data

Your data is already backed up by Google, but for extra safety:

1. Set up automatic exports via Google Apps Script (advanced)
2. Or manually download CSV weekly/monthly
3. Store backups in a secure location

---

## FAQ

**Q: Is my data secure in Google Sheets?**
A: Yes, as secure as any other Google Drive file. Only you and the service account have access.

**Q: What happens if I exceed Google Sheets API limits?**
A: Very unlikely for a newsletter (100 requests/100 seconds/user limit). If you do, you'll get a rate limit error and users can retry.

**Q: Can I customize the columns?**
A: Yes, but you'll need to modify `app/actions/google-sheets.ts` to match your custom columns.

**Q: Can I use the same service account for multiple spreadsheets?**
A: Yes, just share each spreadsheet with the same service account email and use different GOOGLE_SPREADSHEET_ID values.

**Q: Will this work in production (Vercel/Netlify)?**
A: Yes! Just add the same environment variables to your production deployment settings.

---

## Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [googleapis npm package](https://www.npmjs.com/package/googleapis)

---

## Need Help?

If you encounter issues not covered in this guide:

1. Check the Next.js server logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure the service account has Editor access to the spreadsheet
4. Try the troubleshooting steps above

---

**You're all set! Your CheMango DeFi newsletter is now collecting emails via Google Sheets.**
