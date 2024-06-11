import React from 'react'
import NavBar from '../Components/NavBar'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


type Props = {}

function page({}: Props) {

    const {getUser} = getKindeServerSession()

    const User = getUser()

    

  return (
    <>

    <NavBar/>

    <div>
        
    </div>


    </>
  )
}

export default page