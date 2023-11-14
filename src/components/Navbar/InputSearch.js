"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"

const InputSearch = () => {
    return (
        <div className="relative">
            <input 
            placeholder="Search Anime"
            className="w-full p-1 rounded" />
            <button className="absolute top-1 end-2">
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch