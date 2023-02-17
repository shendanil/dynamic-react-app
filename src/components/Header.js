import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className='flex justify-between items-center bg-gradient-to-r from-indigo-600 to-pink-400 text-white px-8 py-6'>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faClosedCaptioning} className='mr-2 text-xl' />
                <h1 className='text-xl font-bold'>Photo editor</h1>
            </div>
            <p className='text-sm'>React Course – Project 3</p>
        </div>
    )
}