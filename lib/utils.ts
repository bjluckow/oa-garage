/**
 * Extract the listing UUID from a Garage listing URL.
 * e.g. "https://www.withgarage.com/listing/09b41d00-7019-45a2-a678-1f4e6c06b8ba"
 */
export function extractListingIdSlug(url: string): string {
    const uuidRegex =
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
    const match = url.match(uuidRegex);
    if (!match) {
        throw new Error(
            'Could not find a valid listing ID in the provided URL.',
        );
    }
    return match[0];
}
