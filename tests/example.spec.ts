import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
  
  const todoHeading = page.getByRole('heading', { name: 'Todo List' });
  await expect(todoHeading).toBeVisible();
});