import React from 'react'

const Credentials = () => {
    return (
        <>
            <div className='mt-12 w-4/5 flex justify-evenly items-center '>
                <div className='w-2/5 h-[1px]  border-t-[1px] '></div>
                <span className='text-sm text-gray-400'>or</span>
                <div className='w-2/5 h-[1px] border-t-[1px] '></div>
            </div>

            <div className="relative w-4/5 border rounded-full py-3 mt-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                </span>
                <button className='w-full   text-secondry-3 flex justify-center'>
                    <span className='w-4/5 text-sm font-bold justify-start'>Login with Google</span>
                </button>
            </div>
            <div className="relative w-4/5 border rounded-full py-3 mt-2">
                <i className="ri-apple-fill text-xl absolute inset-y-0 left-0 flex items-center pl-2"></i>
                <button className='w-full   text-secondry-3 flex justify-center'>
                    <span className='w-4/5 text-sm font-bold justify-start'>Login with Apple</span>
                </button>
            </div>
            <div className="relative w-4/5 border rounded-full py-3 mt-2">
                <i class="ri-facebook-fill text-xl text-blue-500 absolute inset-y-0 left-0 flex items-center pl-2"></i>
                <button className='w-full   text-secondry-3 flex justify-center'>
                    <span className='w-4/5 text-sm font-bold justify-start'>Login with Facebook</span>
                </button>
            </div>
        </>
    )
}

export default Credentials