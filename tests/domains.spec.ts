import { test, expect } from "@playwright/test";
import { domainsLocators } from "./domainsPom";

const DOMAIN_TITLE =
  "Domain registration done right. Buy the perfect domain name.";
const SEARCH_BAR_PLACEHOLDER = "Type the domain you want";

test("Page title test", async ({ page }) => {
  await page.goto("https://www.wix.com/domains");

  const pageTitle = page.locator(domainsLocators.title);

  await expect(pageTitle).toHaveText(DOMAIN_TITLE);
});

test("Search Bar placeholder test", async ({ page }) => {
  await page.goto("https://www.wix.com/domains");

  const searchBar = page.locator(domainsLocators.searchBar).nth(1);

  await expect(searchBar).toHaveAttribute(
    "placeholder",
    SEARCH_BAR_PLACEHOLDER,
  );
});

test("Search Bar submit domain test", async ({ page }) => {
  await page.goto("https://www.wix.com/domains");

  const searchBar = page.locator(domainsLocators.searchBar).nth(1);
  const searchButton = page.locator(domainsLocators.searchButton).nth(1);

  await expect(searchBar).toHaveAttribute("type", "search");
  await searchBar.pressSequentially("daniksm");
  await searchButton.click();

  await expect(page).toHaveURL(/daniksm/);
});
