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
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Frontier Forge
                </h2>
                <p className="text-white/80 text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Crafting{' '}
                    <span className="text-purple-500 font-bold">
                        Dynamic Frontends
                    </span>{' '}
                    for Decentralized Excellence
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Button onClick={() => setOpenDialog(true)}>
                        Contact Us
                    </Button>
                    <div className="flex gap-4 items-center">
                        <Link
                            className="text-xl z-50 sm:hidden text-white-500 hover:text-purple-400 transition delay-75"
                            href="https://t.me/dethSCA"
                            target="__blank"
                            rel="noreferrer noopener"
                        >
                            <FaTelegramPlane size={30} />
                        </Link>
                        <Link
                            href="https://x.com/EgisSec?s=09"
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
