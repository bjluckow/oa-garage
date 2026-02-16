const API_BASE = 'https://garage-backend.onrender.com';

export type ListingAddress = {
    state: string;
};

export type ListingCategory = {
    id: string;
    name: string;
    slug: string;
};

export type Listing = {
    id: string; // UUID
    listingTitle: string;
    listingDescription: string;
    sellingPrice: number;
    appraisedPrice: number | null;
    imageUrls: string[];
    itemBrand: string;
    itemAge: number;
    itemLength: number | null;
    itemWidth: number | null;
    itemHeight: number | null;
    itemWeight: number | null;
    status: string;
    deliveryMethod: string;
    isPickupAvailable: boolean;
    address: ListingAddress;
    category: ListingCategory;
    createdAt: string;
    updatedAt: string;
};

export async function fetchListing(id: string): Promise<Listing> {
    const res = await fetch(`${API_BASE}/listings/${id}`);
    if (!res.ok) {
        throw new Error(
            `Failed to fetch listing: ${res.status} ${res.statusText}`,
        );
    }
    return res.json();
}
