export default function Footer() {
    return (
        <footer className="py-8 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <p>© {new Date().getFullYear()} <a href="https://github.com/deeban-yathiraja" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">Deeban Yathiraja</a>. All rights reserved.</p>
                <p className="text-sm mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </div>
        </footer>
    );
}
