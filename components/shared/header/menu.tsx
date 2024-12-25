import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toglle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


const Menu = () => {
    return (
        <>
            <div className="flex justify-end gap-3">
                <nav className="hidden md:flex w-ful max-w-xs gap-1">
                    <ModeToggle />
                    <Button asChild variant='outline' >
                        <Link href='/cart'>
                            <ShoppingCart size={24} /> Cart
                        </Link>
                    </Button>
                    <Button asChild variant='default' >
                        <Link href='/sign-in'>
                            <UserIcon size={24} /> Sign-in
                        </Link>
                    </Button>
                </nav>
                <nav className="md:hidden ">
                    <Button asChild variant='outline' >
                        <Sheet>
                            Open
                            <span className="sr-only">Open Menu</span>
                            <SheetTrigger className="align-middle">

                                <EllipsisVertical size={24} />

                            </SheetTrigger>
                            <SheetContent className=" flex flex-col items-start">
                                <SheetTitle className="text-center">Menu</SheetTitle>
                                <ModeToggle />
                                <Button asChild variant='outline' >
                                    <Link href='/cart'>
                                        <ShoppingCart size={24} /> Cart
                                    </Link>
                                </Button>
                                <Button asChild variant='default' >
                                    <Link href='/sign-in'>
                                        <UserIcon size={24} /> Sign-in
                                    </Link>
                                </Button>
                                <SheetDescription></SheetDescription>
                            </SheetContent>

                        </Sheet>
                    </Button>
                </nav>
            </div>
        </>
    );
}

export default Menu;