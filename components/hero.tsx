'use client';
import React from 'react';
import { Vortex } from './vortex';
import { Button } from './ui/button';
import { useState } from 'react';
import { Contact } from './contact';

export function Hero() {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden pt-32">
            <Contact openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <Vortex
                backgroundColor="transparent"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Frontier Forge
                </h2>
                <p className="text-white/80 text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Crafting Dynamic Frontends for Decentralized Excellence
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Button onClick={() => setOpenDialog(true)}>
                        Contact Us
                    </Button>
                </div>
            </Vortex>
        </div>
    );
}
