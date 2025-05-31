import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-4 bg-gradient-to-b from-black-300 to-blue-600">
      <div className="w-64 h-64 relative">
        <Image src="/images/404errors.png" alt="Lost in jungle" fill style={{ objectFit: 'cover' }} />
      </div>

      <h1 className="text-6xl font-bold text-green-800">404</h1>
      <p className="text-xl text-green-700 font-medium">You look lost :P, let&apos;s get you back home</p>
      
      <div className="flex space-x-4">
        <Button 
          asChild
          className="bg-green-700 hover:bg-green-800"
        >
          <Link href="/">
            Take Me Home
          </Link>
        </Button>
      </div>
    </div>
  );
}