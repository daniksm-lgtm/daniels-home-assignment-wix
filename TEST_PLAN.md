wix_domains_test_plan.md
100%

# Wix Domains & Services Test Plan

## My Scope

### Exclusions (What was left out)

- **Logins:** Testing user authentication.
- **Goto page:** Testing direct URL navigation paths outside the search flow.
- **Stress testing:** Testing how many users can enter each page or press the button before the page is slow, or entering multiple requests to ensure the API can handle a high load.
- **Homepage:** Testing the entire search bar UI including buttons, images, and texts. My scope is restricted to the search bar functionality and the redirect to the results page.

## Testing Overview

### All Pages

- **Loading Behavior:** Verify how the pages load, including loader visibility and behavior.
- **Responsive Design (Resolution):** Verify how the pages look on different screens and resolutions.

---

## Per Page Tests

### Shared Pages Tests: Domain Storefront & WHOIS Lookup

#### Search Bar Functionality

- **Search Icon:**
  - Verify the search icon is on the left.
  - Click the icon without text; make sure it does nothing.
  - Enter text and click the icon again.
  - Enter a full domain with a TLD and click the icon again.
- **Button:**
  - Click the button when no text is entered.
  - Enter a 1-letter text and click the button.
  - Enter characters and numbers (like `1` or `%`) and click the button.
- **Entering Text:**
  - **Placeholder:**
    - Verify CSS to ensure the placeholder is in the right location.
    - Verify the placeholder text is correct.
  - Verify the maximum number of letters allowed in the search bar.
  - Enter text in capital letters and small letters.
  - Enter special characters and numbers alone, and mixed with text.
  - Enter a domain name with spaces at the start, end, and middle.
  - Click on the button and make sure the results page is opened with the domain you entered.
  - Enter text in different languages and verify the results.

---

### Domain Storefront

#### Homepage

- **Structure:**
  - Title
  - Search bar
  - The TLD buttons
  - 3 widgets carousel that moves automatically
  - Scrolling down the page

#### Search Bar (Unique to Domains Page)

- **Interaction:** Enter a domain name and click on the TLD buttons below. Make sure the selected TLDs are added to the domain.

#### Results Page

- Verify the search bar is opened containing the text you originally entered.
- Verify the **Best Match** and **Great Alternative** widgets appear.
- Verify the **Best Match** button is black and the **Great Alternative** button is white.
- Verify the results match the API response.
- Verify the table below shows the remaining suggested results.
- Verify each row has: domain, pricing, a discount with a tooltip, and a white button.
- Verify that hovering on each row changes the button to black.

---

### WHOIS Lookup

#### Homepage

- **Structure:**
  - Title
  - Search bar
  - Scrolling down the page

#### Search Bar (Unique to WHOIS Page)

- **Interaction:** Enter a domain without a TLD, click on the button, and make sure the default TLD has been added automatically.

#### Results Page

- Verify the top widget displays the selected domain.
- Verify the widget has **Exact match** and **Available now** boxes, and verify they are not buttons.
- Verify the widget displaying text below the domain name includes stars icons.
- Verify the widget has pricing, a discount with a tooltip, and a black button.
- Verify the results match the API response.
- Verify the table below shows the remaining suggested results.
- Verify each row has: domain, pricing, a discount with a tooltip, and a white button.
- Verify that hovering on each row changes the button to black.

---

### Business Name Generator

#### Homepage

- **Breadcrumbs:** Check the breadcrumb trail nav at the top of the page, making sure the links work [cite: 4].
- **Structure:** Title and subtitle text — verify CSS styling.
- **AI Search Bar:**
  - AI icon is on the left.
  - Placeholder displays title and subtitle.
  - When clicking inside the search bar, the cursor is at the start of the subtitle; the title does not change.
  - Clicking inside the search bar highlights the box in blue.
  - Click the button without entering any text.
  - Enter one letter and click the button.
  - Enter a valid business name and verify the results.
  - Enter gibberish and verify the results.
  - Enter special characters and verify the results.
  - Enter text in different languages and verify the results.
- **Results page:**
  - Verify choose business name and claim domain columns
  - Verify when clicking a business name the relevant results appears in the claim domain column
  - Verify the claim domain rows has the domain name, pricing, discount with tooltip and white button
  - Verify hovering on the row emphasize the button with black
