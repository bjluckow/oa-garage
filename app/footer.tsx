export default function Footer() {
    return (
        <footer className="bg-[#3b2218] text-zinc-300">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-white">
                            Buy
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    Browse listings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    View categories
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-white">
                            Sell
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    How to sell
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    How to list
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-white">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    Help center
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-white">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/placeholder"
                                    className="hover:text-white"
                                >
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-400">
                    Created by Benjamin Luckow for shopgarage.com. Not for
                    production use.
                </div>
            </div>
        </footer>
    );
}
