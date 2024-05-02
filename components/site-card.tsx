'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { VideoDialog } from './video-dialog';
import { useState } from 'react';

export function SiteCard({
    imgUrl,
    videoUrl
}: {
    imgUrl: string;
    videoUrl: string;
}) {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    return (
        <Card className="w-[350px] rounded-lg shadow-lg shadow-purple-500">
            <CardContent className="p-0">
                <div>
                    <Image
                        src={imgUrl}
                        alt="Starkbull logo"
                        height={200}
                        width={200}
                        className="cursor-pointer w-full rounded-tl-lg rounded-tr-lg hover:opacity-70 transition delay-75"
                        onClick={() => {
                            setOpenDialog(true);
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2 p-5">
                    <Button className="gap-2">
                        Visit the site <FaExternalLinkAlt />
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
