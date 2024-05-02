import { Dialog, DialogContent } from '@/components/ui/dialog';

export function VideoDialog({
    openDialog,
    setOpenDialog,
    videoUrl
}: {
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    videoUrl: string;
}) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="max-w-[425px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1280px]">
                <h1 className="font-bold text-lg">Preview</h1>
                <video loop autoPlay src={videoUrl}></video>
            </DialogContent>
        </Dialog>
    );
}
