import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Contact({
    openDialog,
    setOpenDialog
}: {
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Form</DialogTitle>
                    <DialogDescription>
                        Fill in the details and we will get back to you as soon
                        as possible.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Name of your project"
                            />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
