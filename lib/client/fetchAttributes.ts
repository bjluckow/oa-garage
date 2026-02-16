import { z } from 'zod';

const API_BASE = 'https://garage-backend.onrender.com';

const CategoryAttributeSchema = z.object({
    id: z.uuid(),
    label: z.string(),
    inputType: z.string(),
    order: z.number(),
    isRequired: z.boolean().optional(),
});

const CategoryAttributesResponseSchema = z.object({
    attributes: z.array(CategoryAttributeSchema),
});

export type CategoryAttribute = z.infer<typeof CategoryAttributeSchema>;

export async function fetchCategoryAttributes(
    categoryId: string,
): Promise<CategoryAttribute[]> {
    const res = await fetch(`${API_BASE}/categories/${categoryId}/attributes`);
    if (!res.ok) {
        throw new Error(
            `Failed to fetch category attributes: ${res.status} ${res.statusText}`,
        );
    }
    const data = await res.json();
    return CategoryAttributesResponseSchema.parse(data).attributes;
}
