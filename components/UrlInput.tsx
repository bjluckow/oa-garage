'use client';

import { useState } from 'react';
import { Link, Loader2, ArrowRight } from 'lucide-react';

interface UrlInputProps {
    onSubmit: (listingId: string) => void;
    isLoading?: boolean;
}

export default function UrlInput({
    onSubmit,
    isLoading = false,
}: UrlInputProps) {
    const [url, setUrl] = useState('');
    const [error, setError] = useState<string | null>(null);

    const extractId = (input: string): string | null => {
        const uuidRegex =
            /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
        const match = input.match(uuidRegex);
        return match ? match[0] : null;
    };

    const handleSubmit = () => {
        setError(null);
        const id = extractId(url);
        if (!id) {
            setError(
                "Couldn't find a valid listing ID. Paste a Garage listing URL.",
            );
            return;
        }
        onSubmit(id);
    };

    return (
        <div className="w-full max-w-xl space-y-2">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-colors focus-within:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-zinc-500">
                <Link className="h-4 w-4 shrink-0 text-zinc-400" />
                <input
                    type="text"
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                        if (error) setError(null);
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="Paste a Garage listing URL…"
                    className="flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSubmit}
                    disabled={isLoading || !url.trim()}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white transition-opacity hover:opacity-80 disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900"
                >
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <ArrowRight className="h-4 w-4" />
                    )}
                </button>
            </div>
            {error && <p className="px-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
