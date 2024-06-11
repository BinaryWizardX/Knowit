import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from './trpc';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from '@/utils/connect';


 
export const appRouter = router({


  hello : publicProcedure.query(()=>{
    return {message:"Hello World"}
  })
  ,
  authCallback : publicProcedure.query(async()=>{

    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user?.id || !user.email){
      return new TRPCError({code:"NOT_FOUND"})
    }

    const dbUser = await prisma.user.findUnique({
      where:{

        id : user.id,

      }
    })

    if(!dbUser){

      const newUser = await prisma.user.create({
        data:{
          id : user.id,
          email : user.email,
        }
      })

    }

    return {success: true}
  }),

  getData : publicProcedure.query(async()=>{

    try{

      const response = await prisma.user.findMany()

      return {data : response}

      

      

    }catch(e){
      console.log(e)
    }
  })


  // ...
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;