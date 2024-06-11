import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function NavBar() {
  return (
    <nav className='w-full h-16 z-30 sticky  top-0 flex  bg-white shadow-md'>

        <MaxwidthWrapper className='flex items-center justify-between '>

            <div>

                <Link href='/' className='text-xl font-bold lg:text-2xl' >Knowit</Link>

            </div>

            <div className='flex gap-5 md:gap-8 lg:gap-10 xl:gap-12 items-center'>
                <Link href='/pricing' className='hover:text-blue-500 lg:text-lg'>Pricing</Link>
                <LoginLink className='hover:text-blue-500 lg:text-lg'>
                    Sign in
                </LoginLink >
                <RegisterLink  className={buttonVariants({
                    className:'!bg-blue-500 text-white hover:!bg-blue-600 '
                
                })}>
                Get Started <MoveRight className='ml-3 mt-0.5'/> 
                </RegisterLink>

            </div>

        </MaxwidthWrapper>

    </nav>
  )
}

export default NavBar