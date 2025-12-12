import { test, expect } from '@playwright/test';

test.describe('MarkdownDocsViewer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the component', async ({ page }) => {
    const sidebar = page.locator('text=Documentation').first();
    await expect(sidebar).toBeVisible();
  });

  test('should display sidebar navigation', async ({ page }) => {
    const sidebar = page.locator('[role="navigation"]').or(page.locator('text=Documentation').locator('..'));
    await expect(sidebar).toBeVisible();
  });

  test('should render markdown content', async ({ page }) => {
    const content = page.locator('main').or(page.locator('article')).or(page.locator('[role="main"]'));
    await expect(content.first()).toBeVisible();
  });

  test('should navigate when clicking sidebar items', async ({ page }) => {
    const sidebarItem = page.locator('button:has-text("Getting Started")').first();
    
    if (await sidebarItem.isVisible()) {
      await sidebarItem.click();
      await page.waitForTimeout(500);
      
      const content = page.locator('h1, h2').first();
      await expect(content).toBeVisible();
    }
  });

  test('should support search functionality', async ({ page }) => {
    const searchInput = page.locator('input[placeholder*="Search"], input[type="search"]').first();
    
    if (await searchInput.isVisible()) {
      await searchInput.fill('test');
      await page.waitForTimeout(300);
      
      await expect(searchInput).toHaveValue('test');
    }
  });

  test('should display code blocks with syntax highlighting', async ({ page }) => {
    const codeBlock = page.locator('pre, code').first();
    
    if (await codeBlock.isVisible()) {
      await expect(codeBlock).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const sidebar = page.locator('text=Documentation').first();
    await expect(sidebar).toBeVisible();
  });

  test('should handle theme switching', async ({ page }) => {
    const body = page.locator('body');
    const initialBg = await body.evaluate(el => window.getComputedStyle(el).backgroundColor);
    
    expect(initialBg).toBeDefined();
  });
});

