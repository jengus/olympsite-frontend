import { Header } from "@components";

export function MainLayout({children}) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
    );
}