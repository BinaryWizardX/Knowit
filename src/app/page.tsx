import Link from "next/link";
import Image from 'next/image'
import { MoveRight } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button";
import MaxwidthWrapper from "./Components/MaxwidthWrapper";
import BackgroundGradient from "./Components/BackgroundGradient";



export default function Home() {

 

  



  return (
  <>

  
 
    <MaxwidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">

      <BackgroundGradient/>

      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">

        <p>

          Knowit is public now

        </p>

        



      </div>
      <h1 className="prose max-w-4xl text-5xl font-bold font md:text-6xl lg:text-7xl">Chat with your <span className="text-blue-500">documents</span> in seconds</h1>
      <p className="prose mt-5 px-3 text-zinc-700 sm:textlg">Knowit allows you to have conversations with any PDF document. 
        Simply upload your file and start asking questions right away</p>

      <Link className={`mt-5 ${buttonVariants({
        size: 'lg',
        className: '!bg-blue-500 text-white hover:!bg-blue-600 md:mt-8  ',

      })}`} href='/'>Get Started <MoveRight className="ml-3 mt-0.5" />   </Link>
      
      
      
      
    </MaxwidthWrapper>

    <div className="mt-[117px]">
      <div className="relative isolate">

        
        <div className="max-w-6xl px-6 lg:px-8 mx-auto">
          <div>
            <div className="bg-gray-600/25 p-2 sm:p-3 md:p-4
             lg:p-5 rounded-xl  ring-1 ring-insets ring-gray-700/20">

              <Image
              src='/dashboard-preview.jpg'
              width={1364}
              height={866}
              alt="Dashboard Preview"
              />

            </div>
          </div>

        </div>
        <div aria-hidden='true' className="absolute blur-3xl transform-gpu overflow-hidden -z-10 -top-[10rem]  md:-top-[20rem] pointer-events-none -left-[14rem] md:-left-[40rem] lg:-left-[20rem]">







</div>


      </div>
    </div>

    {/** Features section */}

    <div className="prose mt-40 max-w-5xl mx-auto mb-40">
      <div className="text-center">

        <h1 className="font-bold text-4xl">Start Chatting in minutes</h1>
        <p className="text-zinc-700/80 text-base -mt-5">Chatting to your PDF files has nerver been easier than with knowit</p>

      </div>

      <div className="mx-auto">
        <ol className="features-section grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <li className="features-section-li w-3/4 md:w-full   flex flex-col gap-2 border-t-2 border-zinc-500/30 pt-3 pl-0">
            <span className="text-sm text-blue-500/90">Step 1</span>
            <span className="text-xl font-bold">Sign up for an account</span>
            <span className="text-base">Either starting out with a free plan or choose our{" "}  
              <Link

              className="text-blue-500/75 hover:text-blue-500 "

              href='/pricing'
              
              >pro plan</Link>
            </span>
          </li>
          <li className="features-section-li w-3/4 md:w-full  flex flex-col gap-2 border-t-2 border-zinc-500/30 pt-3 pl-0">
            <span className="text-sm text-blue-500/90">Step 2</span>
            <span className="text-xl font-bold">Upload your PDF file</span>
            <span className="text-base">We'll process your file and make it ready for you to chat with</span>
            
          </li>
          <li className="features-section-li w-3/4 md:w-full flex flex-col gap-2 border-t-2 border-zinc-500/30 pt-3 pl-0">
            <span className="text-sm text-blue-500/90">Step 3</span>
            <span className="text-xl font-bold">Start asking Questions</span>
            <span className="text-base">It's that simple. Try out Knowit today. It really takes less than a minute</span>

          </li>
        </ol>
      </div>

      
      <div className=" mt-36 rounded-xl border-[20px] border-zinc-600/25 ">

              <Image
              src='/file-upload-preview.jpg'
              width={1419}
              height={732}
              alt="Dashboard Preview"
              />

            </div>

        
    </div>



  </>
    
  );
}
