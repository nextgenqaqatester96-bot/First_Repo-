import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // टेस्ट फाईल्सचा फोल्डर पाथ
  testDir: './tests',

  // प्रत्येक टेस्टसाठी कमाल वेळ (30 सेकंद)
  timeout: 30 * 1000,

  // रिपोर्टर सेटिंग (Execution evidence आणि रिपोर्टसाठी)
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    // ब्राउझर बॅकग्राउंडमध्ये (Headless) चालवण्यासाठी
    headless: true,

    // स्क्रीन साईज
    viewport: { width: 1280, height: 720 },

    // प्रत्येक एक्शन आणि नेव्हिगेशनसाठी वेळ मर्यादा
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,

    // फेल झालेल्या टेस्टचा स्क्रीनशॉट आणि ट्रेस सेव्ह करण्यासाठी (Execution Evidence)
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  // क्रोम ब्राउझरवर टेस्ट चालवण्यासाठी
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
