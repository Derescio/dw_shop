import { ShoppingCart, UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constatnts';




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
            <div className="space-x-2">
                <Button asChild variant='outline' >
                    <Link href='/cart'>
                        <ShoppingCart size={24} /> Cart
                    </Link>
                </Button>
                <Button asChild variant='outline' >
                    <Link href='/sign-in'>
                        <UserIcon size={24} /> Sign-in
                    </Link>
                </Button>
            </div>
        </div>
    </header>;
}

export default Header;