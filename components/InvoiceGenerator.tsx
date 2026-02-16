'use client';

import { useState } from 'react';
import { fetchListingData, type Listing } from '@/lib/client';
import UrlInput from '@/components/UrlInput';
import { Download } from 'lucide-react';

export default function InvoiceGenerator() {
    const [listing, setListing] = useState<Listing | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (id: string) => {
        setIsLoading(true);
        try {
            const data = await fetchListingData(id);
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
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Fire Truck Invoice Generator
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Paste a Garage listing URL to generate a downloadable PDF
                    invoice.
                </p>
            </div>

            <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />

            {listing && (
                <div className="w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                        {listing.listingTitle}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        {listing.category.name} · {listing.address.state}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                        ${listing.sellingPrice.toLocaleString()}
                    </p>

                    <button
                        onClick={handleDownload}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-zinc-100 dark:text-zinc-900"
                    >
                        <Download className="h-4 w-4" />
                        Download PDF Invoice{' '}
                    </button>
                </div>
            )}
        </div>
    );
}
