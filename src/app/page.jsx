'use client'
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"
export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-3 justify-center items-center'>
      <h1>Auth Template</h1>
        <Link href="/serverpagesample">server page</Link>
        <Link href="/clientpagesample">client page</Link>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>signOut</button>
      </div>
    </main>
  );
}