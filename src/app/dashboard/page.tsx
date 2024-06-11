import { redirect } from 'next/navigation'
import prisma from '@/utils/connect';
import NavBar from '../Components/NavBar'
import Dashboard from '../Components/Dashboard';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


type Props = {}

async function page({}: Props) {

    const {getUser} = getKindeServerSession()
    const user = await getUser();

    if(!user?.id || !user.email) {

      redirect('/auth-callback?origin=dashboard')
      
    }

    const dbUser = await prisma.user.findFirst({
      where :{
        id : user.id
      }
    })

    if(!dbUser){
      redirect('/auth-callback?origin=dashboard')
    }



    

  return (
    <>

   

    <Dashboard/>


    </>
  )
}

export default page