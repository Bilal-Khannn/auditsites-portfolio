'use client';
import { Contact } from './contact';
import { Button } from './ui/button';
import { FaTelegramPlane } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

export function Header() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <div className="flex justify-center sm:justify-between items-center p-6 max-w-7xl mx-auto">
            <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <h1 className="font-bold italic text-2xl  lg:text-3xl">
                Auditsites
            </h1>
            <div className="flex gap-6 items-center">
                <Link
                    className="text-xl z-50 hidden sm:block text-purple-500 hover:text-purple-400 transition delay-75"
                    href="https://t.me/NirlinSecurity"
                    target="__blank"
                    rel="noreferrer noopener"
                >
                    <FaTelegramPlane size={30} />
                </Link>
                <Link
                    href="https://x.com/EgisSec?s=09"
                    target="__blank"
                    rel="noreferrer noopener"
                    className="text-xl z-50 hidden sm:block text-purple-500 hover:text-purple-400 transition delay-75"
                >
                    <FaXTwitter size={30} />
                </Link>
                <Button
                    className="hidden sm:block"
                    onClick={() => setOpenDialog(true)}
                >
                    Contact Us
                </Button>
            </div>
        </div>
    );
}
