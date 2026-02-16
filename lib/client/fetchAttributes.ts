import { z } from 'zod';

const API_BASE = 'https://garage-backend.onrender.com';

const CategoryAttributeSchema = z.object({
    id: z.string().uuid(),
    label: z.string(),
    inputType: z.string(),
    order: z.number(),
    isRequired: z.boolean(),
});

const CategoryAttributesResponseSchema = z.record(
    z.uuid(),
    z.array(CategoryAttributeSchema),
);

export type CategoryAttribute = z.infer<typeof CategoryAttributeSchema>;

export async function fetchCategoryAttributes(
    categoryId: string,
): Promise<CategoryAttribute[]> {
    const res = await fetch(`${API_BASE}/categories/attributes`);
    if (!res.ok) {
        throw new Error(
            `Failed to fetch category attributes: ${res.status} ${res.statusText}`,
        );
    }
    const data = await res.json();
    const parsed = CategoryAttributesResponseSchema.parse(data);
    // Return only relevant attributes for the given category
    return parsed[categoryId] ?? [];
}
