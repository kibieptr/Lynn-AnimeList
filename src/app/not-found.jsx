"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-color-accent" />
                <h1 className="text-4xl text-color-accent mb-3">404 - Page Not Found</h1>
                <Link className="text-sm text-color-primary bg-color-oceandark py-1 px-1 rounded" href="/">Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;
