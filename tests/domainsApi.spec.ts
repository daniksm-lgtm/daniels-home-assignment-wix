import { test, expect } from "@playwright/test";

const SUGGEST_DOMAINS_URL =
  "https://www.wix.com/domain-search/v2/suggest-domains?query=daniksm&paging.limit=50";

test("Suggest domains API returns valid domain suggestions for daniksm", async ({
  request,
}) => {
  const response = await request.get(SUGGEST_DOMAINS_URL);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(Array.isArray(body.suggestions)).toBe(true);
  expect(body.suggestions.length).toBeGreaterThan(0);
  expect(body.suggestions[0]).toEqual({
    domain: "daniksm.com",
    premium: false,
  });

  for (const suggestion of body.suggestions) {
    expect(suggestion.domain).toContain("daniksm.");
    expect(typeof suggestion.premium).toBe("boolean");
  }

  expect(body.pagingMetadata.count).toBe(body.suggestions.length);
  expect(typeof body.pagingMetadata.hasNext).toBe("boolean");
});

