'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { VideoDialog } from './video-dialog';
import { useState } from 'react';
import Link from 'next/link';
import { HoverBorderGradientButton } from './hover-border-gradient';

export function SiteCard({
    imgUrl,
    videoUrl,
    siteUrl
}: {
    imgUrl: string;
    videoUrl: string;
    siteUrl: string;
}) {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <Card className="w-[350px] rounded-lg shadow-lg shadow-purple-500">
            <CardContent className="p-0">
                <div className="relative">
                    <Image
                        src={imgUrl}
                        alt="Starkbull logo"
                        height={200}
                        width={200}
                        className=" w-full rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="absolute inset-0 flex justify-center -top-36">
                        <HoverBorderGradientButton
                            setOpenDialog={setOpenDialog}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 p-5">
                    <Button asChild>
                        <Link
                            className="gap-2"
                            href={siteUrl}
                            target="__blank"
                            rel="noreferrer noopener"
                        >
                            Visit the site <FaExternalLinkAlt />
                        </Link>
                    </Button>
                </div>
                <VideoDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    videoUrl={videoUrl}
                />
            </CardContent>
        </Card>
    );
}
