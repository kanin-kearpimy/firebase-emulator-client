import { test, expect } from "@playwright/test";

test("Load data from firebase-emulator", async ({ page }) => {
  await page.goto("http://localhost:4173");

  await page.locator("#load-data").click();
  // Expect a title "to contain" a substring.

  await expect(page.getByText("Test 1")).toBeVisible();
  await expect(page.getByText("Jonathan")).toBeVisible();
  await expect(page.getByText("Howard")).toBeVisible();
});
