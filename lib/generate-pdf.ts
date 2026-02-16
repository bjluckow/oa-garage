import { renderToBuffer } from '@react-pdf/renderer';
import { InvoiceDocument } from '@/components/templates/InvoiceDocument';
import type { Listing } from '@/lib/client/fetchListing';
import { resolveAttributes } from './resolve-attributes';
import { CategoryAttribute } from './client/fetchAttributes';

export async function generateInvoicePdf(
    listing: Listing,
    categoryAttributes: CategoryAttribute[] = [],
): Promise<Buffer> {
    console.log(JSON.stringify(categoryAttributes, null, 2));
    const attributes = resolveAttributes(listing, categoryAttributes);
    console.warn('Resolved: ' + JSON.stringify(attributes, null, 2));
    return renderToBuffer(InvoiceDocument({ listing, attributes }));
}
