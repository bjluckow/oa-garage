import { renderToBuffer } from '@react-pdf/renderer';
import { InvoiceDocument } from '@/components/templates/InvoiceDocument';
import type { Listing } from '@/lib/client';

export async function generateInvoicePdf(listing: Listing): Promise<Buffer> {
    return renderToBuffer(InvoiceDocument({ listing }));
}
