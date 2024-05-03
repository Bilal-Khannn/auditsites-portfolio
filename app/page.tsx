import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Portfolio } from '@/components/portfolio';

export default function Home() {
    return (
        <div >
            <Header />
            <Hero />
            <Portfolio />
            <div className='p-2'><Footer /></div>
            
        </div>
    );
}
