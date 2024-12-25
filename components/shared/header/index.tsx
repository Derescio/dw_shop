import { ShoppingCart, UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toglle';

import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constatnts';
import Menu from './menu';



const Header = () => {
    return <header className='w-full border-b'>
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href='/' className='flex-start'>

                    <Image src='/images/SHOPDDWLogo.png' alt={`${APP_NAME}`} className='rounded-full'
                        width={100} height={100}
                        priority={true} />
                    <span className='hidden lg:block font-bold text-2xl ml-3'>{APP_NAME}</span>
                </Link>
            </div>
            <Menu />
        </div>
    </header>;
}

export default Header;