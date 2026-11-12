import react from 'react'
import { div } from 'three/tsl'
import '@/public/styling/style.css'

export default function AboutMe({onClose}) {
    return (
        
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose}
        >
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Limelight&display=swap');
            </style>

            <div
                className="relative w-full max-w-lg rounded-2xl bg-white p-8 text-black"
                onClick={(e) => e.stopPropagation()}
            >
                {/* <button onClick={onClose} className="absolute right-4 top-4 text-xl">
                Back to the table
                </button>
                <h2 className="mb-4 text-2xl font-bold">About Me</h2> */}

                <div className="flex">
                    <div className="flex .flex-row">
                        <p className="LimelightFont">10</p>
                        
                    </div>
                </div>
                <p>Your text here...</p>
            </div>
    </div>
    )
}