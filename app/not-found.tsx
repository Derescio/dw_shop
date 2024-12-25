'use client';
import { APP_NAME } from "@/lib/constatnts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const NotFound = () => {
    return (<>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="/images/SHOPDDWLogo.png" alt={`${APP_NAME} Logo`} width={150} height={150} className="rounded-md" />

            <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">  Not Found</h1>
                <p className="text-gray-600 mb-4 text-destructive">The page you are looking for does not exist.</p>
                <Button variant="outline" className="mt-4 ml-2">
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>

    </>);
}

export default NotFound;