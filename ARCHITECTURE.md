# Wix Domains & Services Documentation

## Shared APIs

### Premium Domains

- **API:** `https://www.wix.com/_api/tag-manager/api/v1/tags/hosts/PREMIUM_DOMAINS`
- **Method:** `GET`
- **Response:**
  - `Tags`: `id`, `name`, `ads`, `sourceUrl`
  - `Config`: user policy like ads, third party data, analytics
  - `Geo`: users location
  - `Experiments`: WIX own lab like `dynamicConfigs`

### User Details

- **API:** `https://www.wix.com/_api/wix-html-login-webapp/user/getUserDetails`
- **Method:** `GET`
- **Response:**
  - `errorCode`: was there an error
  - `errorDescription`: if there was an error what is the description
  - `Success`: was it successful
  - `Payload`: user data like `userName`, `email`, `guid`, `status`

---

## Pages

### Domains Page

- **Search Bar:** Enter the domain you want.
- **Results Page:** Opens with the search bar, your selection, and a button.
- **Top Widgets:** 2 widgets below the search bar showing the **Best Match** and **Best Alternative**.
- **Results Table:** Located below the top widgets, showing the rest of the suggested results.
- **Domain Features:** Each domain (in widgets and table) displays:
  - Price
  - Discount (if applicable)
  - Special offer with a tooltip
  - "Make it yours" button
- **Rotating Text:** Simple text below the upper widgets that stops rotating on hover.

**APIs Used:**

- **Table API:** `https://www.wix.com/domain-search/v2/suggest-domains?query=daniksm&paging.limit=50`
  - _Response Order:_ First 2 are best and alternative, followed by the rest of the table. Each includes a key if it is premium.
- **Pricing API:** `https://www.wix.com/_serverless/domains-serverless-services/v1/suggested-tld-display-prices`

### WHOIS Lookup Page

- **Search Bar:** Enter the desired domain name (with or without `.com`, etc.). If just the name is entered, `.com` is added automatically.
- **Search Button:** Button to search domains.
- **Redirect Logic:** If the domain does not exist, you get redirected to the domains URL result screen.
- **Exact Match Widget:** When redirected, displays only one widget (**EXACT MATCH**) with the entered domain name or URL (domain name will add `.com` automatically).
- **Rotating Text:** Simple text below the upper widgets that stops rotating on hover.

**APIs Used:**

- **Table API:** `https://www.wix.com/domain-search/v2/suggest-domains?query=daniksm&paging.limit=50`
  - _Response Order:_ First 2 are best and alternative, followed by the rest of the table. Each includes a key if it is premium.
- **Pricing API:** `https://www.wix.com/_serverless/domains-serverless-services/v1/suggested-tld-display-prices`

### Business Name Generator Page

- **AI Search Bar:** Free text entry for whatever text you want.
- **Results View:** Goes to a domain (not domains) URL. Keeps the free text search bar at the top with the entered text and a **Generate** button.
- **Split Screen Layout:** 2 rows — one for the Business Name and one for the Domain.
- **Interaction:** Clicking the business name changes the domain row to show relevant domains with pricing, discounts, tooltips, and a **GET IT** button.

### Public Domain Search API Page

- **Functionality:** Uses the same suggest domain API that is fired across all 4 pages.
- **API Used:** `https://www.wix.com/domain-search/v2/suggest-domains?query=daniksm&paging.limit=50`
- **Documentation Links:**
  - You can check the domain API inside the public domain search pages: [Check Domain Availability](https://dev.wix.com/docs/api-reference/account-level/domains/domain-search/availability-v2/check-domain-availability)
  - Note: Entering the domain must include a `.com` or other ending.

---

## Overall Summary

- **Shared Infrastructure:** All 4 pages are using the same API for search and suggest a domain.
- **User Intent Differences:**
  - The **Search Domain** and **WHOIS** pages are more direct for the customer — the user selects exactly what they want the domain name to be.
  - The **Business Generator** offers suggestions to apply for the user's business context.
  - The **Domain Search** page uses the API directly to check domain names.
