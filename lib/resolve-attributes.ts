import { CategoryAttribute } from './client/fetchAttributes';
import { Listing } from './client/fetchListing';

export type ResolvedAttribute = {
    label: string;
    value: string;
    order: number;
    inputType: string;
};

export function resolveAttributes(
    listing: Listing,
    categoryAttributes: CategoryAttribute[],
): ResolvedAttribute[] {
    const attrMap = new Map(categoryAttributes.map((a) => [a.id, a]));

    return listing.ListingAttribute.map((la) => {
        const def = attrMap.get(la.categoryAttributeId);
        if (!def) return null;
        return {
            label: def.label,
            value: la.value,
            order: def.order,
            inputType: def.inputType,
        };
    })
        .filter((a): a is ResolvedAttribute => a !== null)
        .sort((a, b) => a.order - b.order);
}
