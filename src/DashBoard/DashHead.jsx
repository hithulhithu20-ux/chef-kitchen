import React, { use, useContext } from 'react'
import { Bell, Menu, Settings, UserRound } from 'lucide-react'
import { DashBoardContext } from '../context/DashBoardContext';

export default function DashHead() {

    const { setOpen } = useContext(DashBoardContext);


    const onShow = () => {
        setOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-between w-full h-20  px-2 ">
                <div className=" h-14 flex items-center gap-3 ">
                    <button className=' md:hidden' onClick={onShow}>
                        <Menu />
                    </button>
                    <h1 className="head text-3xl lobster-two-bold">Dashboard</h1>
                </div>


                <div className="flex h-full items-center  gap-6">
                    <Bell className="cursor-pointer" />
                    <UserRound className="cursor-pointer" />
                    <div className="h-6 w-px bg-gray-500" />
                    <Settings className="cursor-pointer" />
                </div>

            </div>
            <div className=" border-b border-[#E5E5E5] pt-4  space-y-2"></div>
        </>
    )
}
