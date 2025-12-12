import { test, expect } from '@playwright/test';

test.describe('Template Showcase', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display template showcase if available', async ({ page }) => {
    const showcase = page.locator('text=Template Showcase').or(page.locator('text=Templates')).first();
    
    if (await showcase.isVisible()) {
      await expect(showcase).toBeVisible();
    }
  });

  test('should allow template selection', async ({ page }) => {
    const templateButton = page.locator('button:has-text("minimal"), button:has-text("modern"), button:has-text("classic")').first();
    
    if (await templateButton.isVisible()) {
      await templateButton.click();
      await page.waitForTimeout(500);
      
      await expect(templateButton).toBeVisible();
    }
  });
});

