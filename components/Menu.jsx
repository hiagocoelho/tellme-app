import Link from 'next/link'

export default function Menu () {
    return (
        <div className='flex justify-between py-1.5 px-3.5 bg-gray-900'>
            <Link href='/'>
                <a className='text-white'>text.me</a>
            </Link>
            <Link href='/about'>
                <a className='text-white'>about</a>
            </Link>
        </div>
    )
}