/**
 * Domain mappings for property sites
 * Maps path segments to their custom domains
 */

export const domainMappings = {
  nikoo: {
    domain: "www.nikoogardenestates.co.in",
    url: "https://www.nikoogardenestates.co.in",
  },
  // Add more properties here as needed
  // example: {
  //   domain: "example.com",
  //   url: "https://example.com",
  // },
} as const;

export type PropertyKey = keyof typeof domainMappings;

/**
 * Get domain info by property key
 */
export function getDomainInfo(key: PropertyKey) {
  return domainMappings[key];
}

