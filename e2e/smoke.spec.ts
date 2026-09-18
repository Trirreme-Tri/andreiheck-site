import { test, expect } from '@playwright/test';

test('navigates from home to a blog post', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', {
      name: 'Fotografia de casamento com luz, silêncio e verdade.',
    }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();

  await page.goto('/blog/exemplo');
  await expect(
    page.getByRole('heading', { name: 'Um dia de casamento no campo' }),
  ).toBeVisible();
});
