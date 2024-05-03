import { SiteCard } from './site-card';

export function Portfolio() {
    return (
        <div className="py-40">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="font-bold text-4xl lg:text-5xl text-center">Our Showcase</h1>
                <p className="text-base lg:text-xl text-white/70 text-center">
                    Unveiling the Latest Frontend Marvels
                </p>

                <div className="mt-24 flex gap-12 justify-center items-center flex-wrap">
                    <SiteCard
                        imgUrl="/images/bull-logo.jpeg"
                        videoUrl="/videos/Helium-video.mp4"
                        siteUrl="https://www.starkbull.xyz/"
                    />
                    <SiteCard
                        imgUrl="/images/egis-logo.jpeg"
                        videoUrl="/videos/egis.mp4"
                        siteUrl="https://www.egissec.com/"
                    />
                    <SiteCard
                        imgUrl="/images/9lives-logo.jpg"
                        videoUrl="/videos/9lives.mp4"
                        siteUrl="https://www.9liveslabs.com/"
                    />
                </div>
            </div>
        </div>
    );
}
