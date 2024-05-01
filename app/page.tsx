import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Portfolio } from '@/components/portfolio';

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <Hero />
            <Portfolio />
        </div>
    );
}
