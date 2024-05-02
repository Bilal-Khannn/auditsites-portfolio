'use client'
import { Contact } from './contact';
import { Button } from './ui/button';
import { FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';

export function Header() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <div className="flex justify-between p-6">
            <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <h1 className="font-bold italic text-3xl">Auditsites</h1>
            <div className="flex gap-6 items-center">
                <div className="text-purple-500 text-4xl">
                    <FaTelegramPlane />
                </div>
                <Button onClick={() => setOpenDialog(true)}>Contact Us</Button>
            </div>
        </div>
    );
}
