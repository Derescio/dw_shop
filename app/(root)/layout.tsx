import type { Metadata } from "next";
import '@/assets/styles/globals.css';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constatnts";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
    title: {
        template: `%s |ShopDW`,
        default: APP_NAME,
    },
    description: `${APP_DESCRIPTION}`,
    metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex h-screen flex-col">
                <Header />
                <main className="flex-1 wrapper">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
