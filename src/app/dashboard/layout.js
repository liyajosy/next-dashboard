'use client'
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Layout({children}){
    const pathname = usePathname();
    
    return (
        <>
             <main className="flex min-h-screen">     
        
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
     
        <div className="flex flex-col  rounded-lg bg-gray-50  md:px-20">
        <div className='flex'>
         <div >           
          <Image src="/dashboard.png" width={30} height ={30}></Image>
          </div>
          <div>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Next Dashboard</strong>
          </p>
          </div>        
       </div>
          <Link
            href="/dashboard"
            className={clsx("flex items-center hover:bg-blue-400 md:text-base", {'bg-sky-200': pathname === '/dashboard'})}
          >
           Home  
          </Link>
          <Link href ="/dashboard/invoices"  className= {clsx("flex items-center hover:bg-blue-400 md:text-base ", {'bg-sky-200' :pathname ==='/dashboard/invoices'})}>
          Invoices
          </Link>
          <Link href ="/dashboard/customers"  className= {clsx("flex items-center hover:bg-blue-400 md:text-base ", {'bg-sky-200' :pathname ==='/dashboard/customers'})}>
            Customers
          </Link>
        </div>
      
      </div>
      <div>
      {children}
      </div>
    </main>

            
        </>
        
    )
}