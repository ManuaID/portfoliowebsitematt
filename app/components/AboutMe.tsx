import '@/public/styling/style.css'
import skillCategories from '@/public/Skills.json'

type AboutMeProps = {
    onClose: () => void
}

export default function AboutMe({ onClose }: AboutMeProps) {
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
                            <p className="GlutenFont dynamicSize" style={{ "--font-size": "2rem" }}>10</p>
                            <img src="/suits/spade.png" alt="Spade" width={32} height={32}/>
                        </div>
                        <div className="goBackbutton flex flex-row items-center border-black border-t-2 border-l-2 border-r-5 border-b-5" onClick={onClose}>
                            <img src="/arrow.png" alt="LeftArrow" width={10} height={10}/>
                            <p className="baloo-2Font" style={{"--font-weight": "600"}}>Back to the table</p>
                        </div>
                    </div>
                    {/* Profile container */}
                    <div>
                        <div className="GlutenFont dynamicSize pt-10" style={{ "--font-size": "4rem", "--font-weight": "800"}}>
                            <p>About me</p>
                        </div>
                        <div className="flex flex-row pb-10">
                            {/* Photo of me */}
                            <div className="w-1/2 flex items-center pr-10">
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
                        <div className="grid grid-cols-3 gap-6 pb-10">
                            {/* Based in */}
                            <div>
                                <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                                <div className="flex flex-col pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Based in</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>Melbourne, Australia</p>
                                </div>
                            </div>
                            {/* Languages */}
                            <div>
                                <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                                <div className="pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Languages</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>English, Japanese</p>
                                </div>
                            </div>
                            {/* Job what we looking for*/}
                            <div>
                                <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                                <div className="pt-3">
                                    <p className="baloo-2Font dynamicSize text-gray-600" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>Looking For</p>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600" ,"--font-size":"1.2rem"}}>Software Development from 2027</p>
                                </div>
                            </div>
                        </div>
                        {/* Experience Section */}
                        <div className="flex flex-col pt-5">
                            <div className="flex flex-row items-center gap-3 pb-2">
                                <img src="/suits/diamond.png" alt="Diamond suit" width={24} height={24}/>
                                <p className="GlutenFont dynamicSize" style={{"--font-weight": "700", "--font-size": "2rem"}}>Experience</p>
                            </div>
                            <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                            <div className="flex flex-row pt-3 pb-3">
                                <div className="w-3/10 shrink-0 pr-6">
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>
                                        3/2025 - Current
                                    </p>
                                </div>
                                <div className="w-7/10">
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
                            <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                        </div>
                        {/* Education */}
                        <div>
                            <div className="flex flex-row items-center gap-3 pt-10 pb-2">
                                <img src="/suits/club.png" alt="Diamond suit" width={24} height={24}/>
                                <p className="GlutenFont dynamicSize" style={{"--font-weight": "700", "--font-size": "2rem"}}>Education</p>
                            </div>
                            <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                            <div className="flex flex-row pt-3 pb-3">
                                <div className="w-3/10 shrink-0 pr-6">
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>
                                        2024 - 2027
                                    </p>
                                </div>
                                <div className="w-7/10">
                                    {/* Role within company */}
                                    <div className="baloo-2Font dynamicSize" style={{"--font-weight": "500", "--font-size": "1.2rem"}}>
                                        <p>
                                            B.Cs. Computer Science, RMIT Univeristy  
                                        </p>
                                    </div>
                                    <div className="baloo-2Font dynamicSize text-gray-600">
                                        <p>
                                            Relevant Courses: Data Structure, Algorithm, Software Engineering Fundamentals and Game Development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full border-t-2 border-dashed border-slate-300"/>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-col pt-5">
                            <div className="flex flex-row items-center gap-3 pb-2">
                                <img src="/suits/heart.png" alt="Heart suit" width={24} height={24}/>
                                <p className="GlutenFont dynamicSize" style={{"--font-weight": "700", "--font-size": "2rem"}}>Skills</p>
                            </div>
                            {/* One block per category in public/Skills.json */}
                            {skillCategories.map((category, i) => (
                                <div key={category.skillCategory} className={`flex flex-col gap-3 ${i > 0 ? "pt-5" : ""}`}>
                                    <p className="baloo-2Font dynamicSize" style={{"--font-weight": "600", "--font-size": "1.1rem"}}>{category.skillCategory}</p>
                                    <div className="flex flex-row flex-wrap gap-5">
                                        {category.skills.map((skill) => (
                                            <SkillCard key={skill.skillName} skill={skill} iconColor={category.iconColor}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

type Skill = {
    skillIconAcro: string
    skillName: string
}

type SkillCardProps = {
    skill: Skill
    iconColor: string
}

function SkillCard({ skill, iconColor }: SkillCardProps) {
    return (
        <div className="skillBanner inline-flex -rotate-1 items-center gap-2.5 rounded-xl border-2 border-[#2b1d16] bg-white py-1.5 pr-3.5 pl-1.5 text-[#2b1d16] shadow-[3px_3px_0_rgba(43,29,22,0.32)] w-fit">
            <div
                aria-hidden="true"
                className="skillIcon GlutenFont dynamicSize grid size-8 place-items-center rounded-lg border-2 border-[#2b1d16] text-white"
                style={{"--font-weight": "700", "--font-size": "13px", backgroundColor: iconColor}}
            >
                {skill.skillIconAcro}
            </div>
            <p className="baloo-2Font dynamicSize" style={{"--font-weight": "700", "--font-size": "17px"}}>{skill.skillName}</p>
        </div>
    )
}
