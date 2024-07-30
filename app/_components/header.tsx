// import { auth, signOut } from '@/auth';
import Link from 'next/link';

const Header = async () => {
  // const session = await auth();
  // const user = session?.user;
  // const logoutAction = async () => {
  //   'use server';
  //   await signOut();
  // };

  return (
    <header className='text-slate-700  z-10 w-full bg-transparent h-20'>
      <nav className='h-full flex justify-between  items-center w-full px-5'>
        <div>
          <Link href='/' className=' text-2xl font-semibold'>
            ProfolioForge
          </Link>
        </div>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/' className=' hover:bg-slate-600 hover:text-slate-100 p-1 rounded'>
              Home
            </Link>
          </li>
          {true && (
            <>
              <li>
                <Link href='/register' className=' hover:bg-slate-600 hover:text-slate-100 p-1 rounded'>
                  Register
                </Link>
              </li>
              <li>
                <Link href='/login' className=' hover:bg-slate-600 hover:text-slate-100 p-1 rounded'>
                  Login
                </Link>
              </li>
            </>
          )}
          {false && (
            <form action="/" className='flex items-center'>
              <li className='ml-4'>
                <Link href='/dashboard' className=' hover:bg-slate-600 hover:text-slate-100 p-1  rounded'>
                  Dashboard
                </Link>
              </li>
              <li className='ml-4 '>
                <Link href='/profile' className=' hover:bg-slate-600 hover:text-slate-100 p-1 rounded'>
                  Profile
                </Link>
              </li>
              <li className='ml-4'>
                <input 
                className=' hover:bg-slate-600 hover:text-slate-100 p-1 rounded'
                type="submit" value="logout" />
              </li>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
