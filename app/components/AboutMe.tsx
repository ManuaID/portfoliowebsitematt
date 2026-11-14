import '@/public/styling/style.css'

type AboutMeProps = {
    onClose: () => void
}

export default function AboutMe({ onClose }: AboutMeProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl rounded-2xl bg-white p-8 text-black"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6">
                    <div className="AboutMeModalContainer flex flex-row justify-between items-start">
                        <div className="flex flex-col items-center">
                            <p className="GlutenFont dynamicSize" style={{ "--font-size": "3rem" }}>10</p>
                            <img src="/suits/spade.png" alt="Spade" width={48} height={48}/>
                        </div>
                        <div className="goBackbutton flex flex-row items-center border-black border-t-2 border-l-2 border-r-5 border-b-5">
                            <img src="/arrow.png" alt="LeftArrow" width={10} height={10}/>
                            <p className="baloo-2Font">Back to the table</p>
                        </div>
                    </div>
                    {/* Profile container */}
                    <div>
                        <div className="GlutenFont dynamicSize pt-10" style={{ "--font-size": "4rem", "--font-weight": "800"}}>
                            <p>About me</p>
                        </div>
                        <div className="flex flex-row pb-10">
                            {/* Photo of me */}
                            <div className="w-1/2 flex justify-center items-center pr-14">
                                {/* Put your photo in public/ and set src, e.g. src="/me.jpg" */}
                                <img src={undefined} alt="Photo of Matthew" className="pictureIcon"/>
                            </div>
                            {/* Quick descirption */}
                            <div className="w-1/2">
                                <p className="baloo-2Font dynamicSize" style={{"--font-size": "1.5rem", "--font-weight": "600"}}>I'm Matthew, a 2023-year computer science student at RMIT Univeristy</p>
                                <p className="text-gray-500">I'm happiest writing C++ where every millisecond counts, and I enjoy problems that need an unconventional idea to crack. Open to graduate software roles from 2027.</p>
                            </div>
                        </div>
                        {/* Personal info */}
                        <div className="flex flex-row">
                            {/* Based in */}
                            <div className="w-1/3 justify-center items-center">
                                <hr className="w-9/10 mx-auto border-t-2 border-dashed border-slate-300"/>
                                <div className="w-9/10 mx-auto flex flex-col pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Based in</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>Melbourne, Australia</p>
                                </div>
                            </div>
                            {/* Languages */}
                            <div className="w-1/3 justify-center items-center">
                                <hr className="w-9/10 mx-auto border-t-2 border-dashed border-slate-300"/>
                                <div className="w-9/10 mx-auto pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Languages</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>English, Japanese</p>
                                </div>
                            </div>
                            {/* Job what we looking for*/}
                            <div className="w-1/3 justify-center items-center">
                                <hr className="w-9/10 mx-auto border-t-2 border-dashed border-slate-300"/>
                                <div className="w-9/10 mx-auto pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Looking For</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>Software Development from 2027</p>
                                </div>
                            </div>
                        </div>
                        {/* Experience Section */}
                        <div className="flex flex-col justify-center items=center">
                            <div className="flex flex-row items-center gap-3">
                                <img src="/suits/diamond.png" alt="Diamond suit" width={24} height={24}/>
                                <p className="GlutenFont dynamicSize" style={{"--font-weight": "700", "--font-size": "2rem"}}>Experience</p>
                            </div>
                            <hr className="border-t-2 border-dashed w-9/10 border-slate-300 mx-auto"/>
                            <div className="flex flex-row pt-3 pb-3">
                                <div className="w-3/10 baloo-2Font flex justify-center items-cente">
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>
                                        3/2025 - Current
                                    </p>
                                </div>
                                <div className="w-7/10 baloo-2Font">
                                    {/* Role within company */}
                                    <div className="baloo-2Font dynamicSize" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>
                                        <p>
                                            Retail Assistant, Coles Group Lmtd  
                                        </p>
                                    </div>
                                    <div className="baloo-2Font dynamicSize text-gray-600">
                                        <p>
                                            Collected trolleys and cleaned the store    using commercial cleaning chemicals. Planned each shift around areas I could only reach at set times, handled spills and other urgent jobs as they came up, and helped customers every day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t-2 border-dashed w-9/10 border-slate-300 mx-auto"/>
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
    )
}