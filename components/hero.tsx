'use client';
import React from 'react';
import { Vortex } from './vortex';
import { Button } from './ui/button';
import { useState } from 'react';
import { Contact } from './contact';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';

export function Hero() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    return (
        <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden pt-5  sm:pt-32">
            <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <Vortex
                backgroundColor="transparent"
                className="flex items-center flex-col justify-center py-4 w-screen h-full"
            >
                <h2 className="text-white text-2xl md:text-5xl font-bold text-center max-w-3xl">
                    Branding for Security Auditors, by Crypto Natives
                </h2>
                <p className="text-white/80 text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Make Strong First Impression. Trust Our Expertise to Elevate
                    Your Web3 Presence
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Button onClick={() => setOpenDialog(true)}>
                        Contact Us
                    </Button>
                    <div className="flex gap-4 items-center">
                        <Link
                            className="text-xl z-50 sm:hidden text-white-500 hover:text-purple-400 transition delay-75"
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
                            className="text-xl z-50 sm:hidden text-white hover:text-purple-400 transition delay-75"
                        >
                            <FaXTwitter size={30} />
                        </Link>
                    </div>
                </div>
            </Vortex>
        </div>
    );
}
