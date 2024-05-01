import { Button } from './ui/button';
import { FaTelegramPlane } from 'react-icons/fa';

export function Header() {
    return (
        <div className="flex justify-between p-10">
            <h1 className="font-bold italic text-3xl">Auditsites</h1>
            <div className="flex gap-6 items-center">
                <div className='text-purple-500 text-4xl'>
                    <FaTelegramPlane />
                </div>
                <Button>Contact Us</Button>
            </div>
        </div>
    );
}
