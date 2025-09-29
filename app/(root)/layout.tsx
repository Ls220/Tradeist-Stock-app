import React from 'react'
import Header from "@/components/Header";

const Layout = ( {children }: {children : React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <header className="sticky top-0 header">
                <div className="container header-wrapper">
                </div>
            </header>
            <div className ="container py-10">
                {children}
            </div>

        </main>
    )
}
export default Layout
