'use client';

import { useState } from 'react';
import { fetchListing, type Listing } from '@/lib/client/fetchListing';
import UrlInput from '@/components/UrlInput';
import { Download } from 'lucide-react';
import { PDFViewer } from '@react-pdf/renderer';
import { InvoiceDocument } from './templates/InvoiceDocument';

export default function InvoiceGenerator() {
    const [listing, setListing] = useState<Listing | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (id: string) => {
        setIsLoading(true);
        try {
            const data = await fetchListing(id);
            setListing(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (!listing) return;
        window.open(`/api/invoice?id=${listing.id}`, '_blank');
    };

    return (
        <div className="flex w-full flex-col items-center gap-8">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    Fire Truck Invoice Generator
                </h1>
                <p className="text-sm text-zinc-500">
                    Paste a Garage listing URL to generate a downloadable PDF
                    invoice.
                </p>
            </div>

            <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />

            {listing && (
                <div className="w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-medium text-zinc-900">
                        {listing.listingTitle}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        {listing.category.name} · {listing.address.state}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-zinc-900">
                        ${listing.sellingPrice.toLocaleString()}
                    </p>

                    <button
                        onClick={handleDownload}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                        <Download className="h-4 w-4" />
                        Download PDF Invoice
                    </button>

                    <div className="my-6 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
                        <PDFViewer
                            style={{
                                width: '100%',
                                height: '600px',
                                border: 'none',
                            }}
                            showToolbar={false}
                        >
                            <InvoiceDocument listing={listing} />
                        </PDFViewer>
                    </div>
                </div>
            )}
        </div>
    );
}
