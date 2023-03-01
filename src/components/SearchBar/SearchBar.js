import React from 'react'

function SearchBar() {
    return (
        <form className='w-[772px] h-[25px] max-h-[25px]'>
            <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#475569" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="w-full p-2 pl-10 text-sm text-gray-900 border border-searchBar rounded-[28px]" placeholder="Search" required />
            </div>
        </form>
    )
}

export default SearchBar