import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <>


    {/* navbar start */}


    <nav className='flex justify-center'>

      {/* nav for dekstop */}


        <div className='list-none flex bg-[#0065C0] text-white items-center justify-between px-8 p-2 w-[90%] mt-6 rounded-2xl outfit max-[950px]:hidden'>
          <div className='flex gap-10 max-[1100px]:gap-5 transition-all'>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Company</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Software</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'><Link to={'marketing'}>Marketing</Link></li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Blogs</li>
          </div>

            <img className='h-[10vh] transition-all' src={logo} alt="" />

            <div className='flex gap-10 max-[1100px]:gap-5 transition-all'>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'><Link to={"interoperability"}>Interoperability</Link></li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Awards</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>ABDM</li>
            <li className='cursor-pointer hover:text-[#A3DC2F] transition-all'>Career</li>
            </div>
        </div>

        {/* nav for mobile */}

      <div className='hidden max-[950px]:block w-[90%] '>
        <div className='flex bg-[#0065C0] text-white items-center justify-between px-8 p-2 mt-6 rounded-2xl outfit'>
          <img className='h-[10vh]' src={logo} alt="" />
         

          <div>
          <Sheet>
             <SheetTrigger ><i class="fa-solid fa-bars text-xl"></i></SheetTrigger>
             <SheetContent className="bg-white">
               <SheetHeader className="list-none text-xl outfit gap-2 mt-8">
                 {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                 {/* <SheetDescription>
                   This action cannot be undone. This will permanently delete your account
                   and remove your data from our servers.
                 </SheetDescription> */}
                 <li className='hover:text-[#A3DC2F] transition-all'>Company</li>
                 <li className='hover:text-[#A3DC2F] transition-all'>Software</li>
                 <li className='hover:text-[#A3DC2F] transition-all'><Link to={'marketing'}>Marketing</Link></li>
                 <li className='hover:text-[#A3DC2F] transition-all'>Blogs</li>
                 <li className='hover:text-[#A3DC2F] transition-all'><Link to={"interoperability"}>Interoperability</Link></li>
                 <li className='hover:text-[#A3DC2F] transition-all'>Awards</li>
                 <li className='hover:text-[#A3DC2F] transition-all'>ABDM</li>
                 <li className='hover:text-[#A3DC2F] transition-all'>Career</li>
               </SheetHeader>
             </SheetContent>
          </Sheet>

          </div>
        </div>
      </div>
    </nav>


{/* navbar end */}



    </>
  )
}

export default Navbar