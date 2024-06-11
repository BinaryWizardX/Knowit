"use client"
import React,{useEffect,} from 'react'
import { trpc } from '../_trpc/trpc'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { isElement } from 'react-dom/test-utils'


export const AuthCallbackStyles = styled.main`


    
    width: 100%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
    text-align : center;
    



.pyramid-loader {
  position: relative;
  width: 300px;
  height: 300px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
  
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width: 120px;
  height: 120px;
/* you can choose any gradient or color you want */
  /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .side2 {
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side3 {
  transform: rotateX(30deg);
  background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side4 {
  transform: rotateX(-30deg);
  background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .shadow {
  width: 100px;
  height: 100px;
  background: #8B5AD5;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
}


`





async function page() {

      const router = useRouter()


      const {data, isLoading, isSuccess, isError} = trpc.authCallback.useQuery(undefined)

      const searchparams = useSearchParams();

      const origin = searchparams.get('origin')

      


      if(isSuccess){
        router.push(origin ? `/${origin}` : "/dashboard");
      }

      if(isError){
        router.push('/')
      }
    

    


    

  return (

    <AuthCallbackStyles>



            <div className="pyramid-loader">
                <div className="wrapper">
                    <span className="side side1"></span>
                    <span className="side side2"></span>
                    <span className="side side3"></span>
                    <span className="side side4"></span>
                    <span className="shadow"></span>
                </div>  
            </div>

            <div>

            <h1 className='font-semibold text-3xl'>
                 Setting up your account...
            </h1>
            <p className='mt-5'>You will be redirected automatically.</p>

            </div>

            


    </AuthCallbackStyles>

    

    
    
       
    
  )
}






export default page