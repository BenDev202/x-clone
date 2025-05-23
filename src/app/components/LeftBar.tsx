import Link from "next/link";
import Image from "next/image";

export default function LeftBar() {
  return (
    <div>
      {/* LOGO MENU BUTTON */}
      <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
        <Link href='/'>
          <Image src='/logo' alt="logo" width={24} height={24} />
        </Link>
      </div>
      {/* USER */}
      <div className=''>user</div>
    </div>
  )
}
