import { SiteCard } from './site-card';

export function Portfolio() {
    return (
        <div className="py-40">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="font-bold text-5xl">Our Showcase</h1>
                <p className="text-xl text-white/70">
                    Unveiling the Latest Frontend Marvels
                </p>

                <div className="mt-24 flex gap-8 justify-center items-center flex-wrap">
                    <SiteCard imgUrl="/images/bull-logo.jpeg" />
                    <SiteCard imgUrl="/images/egis-logo.jpeg" />
                    <SiteCard imgUrl="/images/bull-logo.jpeg" />
                    <SiteCard imgUrl="/images/egis-logo.jpeg" />
                </div>
            </div>
        </div>
    );
}
