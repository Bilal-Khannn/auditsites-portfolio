import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { LoadingSpinner } from './loading-spinner';

export function VideoDialog({
    openDialog,
    setOpenDialog,
    videoUrl
}: {
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    videoUrl: string;
}) {
    const [loading, setLoading] = useState(true);

    const handleLoadedData = () => {
        setLoading(false);
    };

    const handleLoadStart = () => {
        setLoading(true);
    };

    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="max-w-[425px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1280px]">
                <h1 className="font-bold text-lg">Preview</h1>
                {loading && (
                    <div className="flex justify-center items-center mt-20">
                        <LoadingSpinner className="text-purple-500" />
                    </div>
                )}
                <video
                    loop
                    autoPlay
                    src={videoUrl}
                    onLoadStart={handleLoadStart}
                    onLoadedData={handleLoadedData}
                    style={{ display: loading ? 'none' : 'block' }}
                ></video>
            </DialogContent>
        </Dialog>
    );
}
