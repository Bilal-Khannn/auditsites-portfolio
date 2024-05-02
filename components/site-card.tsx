import * as React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function SiteCard({ imgUrl }: { imgUrl: string }) {
    return (
        <Card className="w-[350px] rounded-lg border border-purple-500">
            <CardContent className="p-0">
                <div>
                    <Image
                        src={imgUrl}
                        alt="Starkbull logo"
                        height={200}
                        width={200}
                        className="cursor-pointer w-full rounded-tl-lg rounded-tr-lg hover:opacity-70 transition delay-75"
                    />
                </div>

                <div className="flex flex-col gap-2 p-5">
                    <Button className="gap-2">
                        Visit the site <FaExternalLinkAlt />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
