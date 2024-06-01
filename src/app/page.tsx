import Link from "next/link";
import { MoveRight } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button";
import MaxwidthWrapper from "./Components/MaxwidthWrapper";
export default function Home() {
  return (

    <MaxwidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">

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
        className: 'bg-blue-500 text-white hover:bg-blue-600 md:mt-8  ',

      })}`} href='/'>Get Started <MoveRight className="ml-3 mt-0.5" />   </Link>
      
      
      
      
    </MaxwidthWrapper>
    
  );
}
