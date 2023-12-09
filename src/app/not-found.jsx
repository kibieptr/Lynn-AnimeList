"use client"

import { House } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <h1 className="text-4xl text-color-accentdark">404 | Page Not Found</h1>
                <Link href="/" className="text-sm text-color-primary bg-color-oceandark py-1 px-1 rounded flex items-center">
                    <House size={32} /> <h4 className="ml-1 mt-1">Homepage</h4>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
