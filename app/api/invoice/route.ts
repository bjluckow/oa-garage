import { NextRequest, NextResponse } from 'next/server';
import { fetchListing } from '@/lib/client/fetchListing';
import { generateInvoicePdf } from '@/lib/generate-pdf';
import { ZodError } from 'zod';

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json(
            { error: 'Missing listing id' },
            { status: 400 },
        );
    }

    try {
        const listing = await fetchListing(id);
        const buffer = await generateInvoicePdf(listing);

        return new NextResponse(new Uint8Array(buffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="invoice-${id.slice(0, 8)}.pdf"`,
            },
        });
    } catch (err) {
        if (err instanceof ZodError) {
            console.error('Validation error:', err.issues);
            return NextResponse.json(
                {
                    error: 'Unexpected data format from Garage API',
                    details: err.issues,
                },
                { status: 502 },
            );
        }

        console.error(err);
        return NextResponse.json(
            { error: 'Failed to generate invoice' },
            { status: 500 },
        );
    }
}
