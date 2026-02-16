import { fetchListingData } from '@/lib/client';
import { extractListingIdSlug } from '@/lib/utils';

export default async function SmokeTest() {
    const frontendUrl =
        'https://www.shopgarage.com/listing/2007-Marion-Spartan-Rescue-Pumper-09b41d00-7019-45a2-a678-1f4e6c06b8ba';

    const listingId = extractListingIdSlug(frontendUrl);

    const backendData = await fetchListingData(listingId);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div>
                <p>Frontend URL: {frontendUrl}</p>
                <p>Extracted Listing ID: {listingId}</p>
            </div>

            <pre>{JSON.stringify(backendData, null, 2)}</pre>
        </div>
    );
}
