import InvoiceGenerator from '@/components/InvoiceGenerator';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
            <main className="w-full max-w-xl p-8">
                <InvoiceGenerator />
            </main>
        </div>
    );
}
