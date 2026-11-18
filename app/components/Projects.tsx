type ProjectProps = {
    onClose: () => void;
}

export default function ProjectModal({ onClose }: ProjectProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/60 p-4 sm:p-10"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl my-auto h-fit rounded-2xl bg-white p-8 text-black"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky tape on the top edge */}
                <span aria-hidden="true" className="tape absolute -top-4 left-14 -rotate-3" />
                <span aria-hidden="true" className="tape absolute -top-4 right-14 rotate-2" />

                <div className="border-2 border-dashed border-slate-300 rounded-xl px-[5%] py-10">
                    <div className="AboutMeModalContainer flex flex-row justify-between items-start">
                        <div className="flex flex-col items-center">
                            <p className="GlutenFont dynamicSize" style={{ "--font-size": "2rem" }}>J</p>
                            <img src="/suits/spade.png" alt="Spade" width={32} height={32}/>
                        </div>
                        <div className="goBackbutton flex flex-row items-center border-black border-t-2 border-l-2 border-r-5 border-b-5" onClick={onClose}>
                            <img src="/arrow.png" alt="LeftArrow" width={10} height={10}/>
                            <p className="baloo-2Font" style={{"--font-weight": "600"}}>Back to the table</p>
                        </div>
                    </div>
                    <p className="GlutenFont dynamicSize" style={{"--font-weight": "800", "--font-size": "3.5rem"}}>Projects</p>
                    <p className="baloo-2Font text-gray-500 dynamicSize" style={{"--font-size": "1.5rem"}}>Things I've built, starting with my best hand</p>
                    <div className="border-1 border-black h-fit">

                    </div>
                </div>

            </div>
        </div>
    )
}