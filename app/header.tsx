export default function Header() {
    return (
        <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <span className="text-xl font-extrabold tracking-tight text-orange-500 italic">
                    GARAGE
                </span>
                <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex">
                    <a
                        href="https://www.withgarage.com/browse"
                        className="hover:text-zinc-900"
                    >
                        Browse
                    </a>
                    <a
                        href="https://www.withgarage.com/sell"
                        className="hover:text-zinc-900"
                    >
                        Sell
                    </a>
                    <a
                        href="https://www.withgarage.com/appraisals"
                        className="hover:text-zinc-900"
                    >
                        Appraisals
                    </a>
                </nav>
            </div>
        </header>
    );
}
