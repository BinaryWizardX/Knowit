"use client";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import React,{ useState ,PropsWithChildren, ReactNode } from "react";
import { trpc } from "../_trpc/trpc";
import { httpBatchLink } from "@trpc/client";

export default function Providers({children}: PropsWithChildren) {

    const [queryClient] = useState(()=> new QueryClient())
    const [trpcClient] = useState(()=> trpc.createClient({
        links:[
            httpBatchLink({
                url:"http://localhost:3000/api/trpc"
            })
        ]
    }))

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient} >
                {children}
            </QueryClientProvider>
           
        </trpc.Provider>
    )

}