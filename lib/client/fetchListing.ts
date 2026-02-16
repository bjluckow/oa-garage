import { z } from 'zod';

const API_BASE = 'https://garage-backend.onrender.com';

const ListingAttributeSchema = z.object({
    id: z.uuid(),
    categoryAttributeId: z.string().uuid(),
    value: z.string(),
});

const ListingAddressSchema = z.object({
    state: z.string(),
});

const ListingCategorySchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    slug: z.string(),
});

const ListingSchema = z.object({
    id: z.uuid(),
    listingTitle: z.string(),
    listingDescription: z.string(),
    sellingPrice: z.number(),
    appraisedPrice: z.number().nullable(),
    imageUrls: z.array(z.url()),
    itemBrand: z.string(),
    itemAge: z.number(),
    itemLength: z.number().nullable(),
    itemWidth: z.number().nullable(),
    itemHeight: z.number().nullable(),
    itemWeight: z.number().nullable(),
    status: z.string(),
    deliveryMethod: z.string(),
    isPickupAvailable: z.boolean(),
    address: ListingAddressSchema,
    category: ListingCategorySchema,
    ListingAttribute: z.array(ListingAttributeSchema),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type Listing = z.infer<typeof ListingSchema>;
export type ListingAttribute = z.infer<typeof ListingAttributeSchema>;

export async function fetchListing(id: string): Promise<Listing> {
    const res = await fetch(`${API_BASE}/listings/${id}`);
    if (!res.ok) {
        throw new Error(
            `Failed to fetch listing: ${res.status} ${res.statusText}`,
        );
    }
    const data = await res.json();
    return ListingSchema.parse(data);
}
