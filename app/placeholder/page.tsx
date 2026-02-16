import Link from 'next/link';

export default function PlaceholderPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-black">
            <p>This is a placeholder page. Thanks for clicking around!</p>{' '}
            <br />
            <Link href="/" className="text-blue-500 underline">
                Return Home
            </Link>
        </div>
    );
}
