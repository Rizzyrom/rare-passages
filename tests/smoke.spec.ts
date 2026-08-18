import { test, expect } from '@playwright/test';

const routes = ['/', '/portfolio', '/portfolio/safari-awaits', '/about', '/how-we-work', '/contact', '/brand', '/definitely-not-a-page'];

test('routes render with correct status', async ({ request }) => {
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(route.includes('definitely-not') ? 404 : 200);
  }
});

test('homepage carries the brand lockup and portfolio', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.brand svg').first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Safari Awaits/i }).first()).toBeVisible();
});

test('inquiry API validates and honeypot is silent', async ({ request }) => {
  const invalid = await request.post('/api/inquiries', { data: { email: 'bad' } });
  expect(invalid.status()).toBe(400);
  const spam = await request.post('/api/inquiries', { data: { website: 'https://spam.example', email: 'bot@example.com' } });
  expect(spam.status()).toBe(202);
  const ok = await request.post('/api/inquiries', { data: { fullName: 'QA Reviewer', email: 'qa@example.com', consent: true, vertical: 'matching' } });
  expect(ok.status()).toBe(201); // dev mode: accepted without webhook
});

test('noindex is enforced via header and meta', async ({ page, request }) => {
  const response = await request.get('/');
  expect(response.headers()['x-robots-tag']).toContain('noindex');
  await page.goto('/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});
