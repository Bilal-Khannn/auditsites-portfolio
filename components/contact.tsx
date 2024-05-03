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
import { Textarea } from './ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

export function Contact({
    openDialog,
    setOpenDialog
}: {
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [state, handleSubmit] = useForm('YOUR_FORM_ID');

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
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="What are you looking for"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-end mt-6">
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
