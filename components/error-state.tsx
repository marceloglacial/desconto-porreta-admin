import { FC } from 'react'

interface ErrorStateProps {
    title: string
    message: string
}

const ErrorState: FC<ErrorStateProps> = ({ title, message }): JSX.Element => {
    return (
        <div className=' w-screen h-screen max-h-96 flex flex-col gap-4 items-center justify-center text-red-600'>
            <h1 className=' text-2xl'>{title}</h1>
            <p>{message}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        </div>
    )
}

export default ErrorState
