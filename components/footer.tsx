'use client';
import { FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import { Contact } from './contact';
import { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Footer() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <div className="max-w-6xl mx-auto mt-10 mb-10">
            <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <div className="flex justify-center items-center flex-col gap-6">
                <h1 className="text-4xl font-bold">Auditsites</h1>
                <div className="flex gap-4 items-center">
                    <Link
                        className="text-xl z-50 text-purple-500 hover:text-purple-400 transition delay-75"
                        href="https://t.me/NirlinSecurity"
                        target="__blank"
                        rel="noreferrer noopener"
                    >
                        <FaTelegramPlane size={30} />
                    </Link>
                    <Link
                        href="https://twitter.com/0xnirlin"
                        target="__blank"
                        rel="noreferrer noopener"
                        className="text-xl z-50 text-purple-500 hover:text-purple-400 transition delay-75"
                    >
                        <FaXTwitter size={30} />
                    </Link>
                </div>
                <Button onClick={() => setOpenDialog(true)}>Contact Us</Button>
                <Link
                    href={'#showcase'}
                    className="text-xl text-white hover:text-white/80 transition delay-75 flex items-center gap-2"
                >
                    Showcase <FaArrowUp />
                </Link>
            </div>
            <Separator className="mt-8 bg-purple-500" />
            <div className="mt-6">
                <p className="text-sm text-custom-brown">© 2024</p>
            </div>
        </div>
    );
}
