import {motion} from "framer-motion"
import {AiFillGithub, AiFillTwitterCircle, AiFillSpotify, AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import AnimatedWord2 from "../animations/AnimatedWord2"
import AnimatedBody from "../animations/AnimatedBody"
import Link from "next/link"

const Contact = ()=>{
    return(
        <motion.section
        className="relative z-10 flex h-[95vh] w-full items-center
        justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16
        md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
        id="contact"
        initial="initial"
        animate="animate">
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div className={`flex flex-col items-start justify-center font-sans relative w-full sm:items-center lg:max-w-[1440px]`}>
                    <AnimatedWord2
                    title={"Contactez moi"}
                    style="flex max-w-[500px] flex-col items-start text-left text-[60px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[70px] md:text-[80px] lg:text-center lg:text-[100px] xl:text-[110px]" 
                    
                    />
                </div>
                
                <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
                    <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]"
                    >
                        <AnimatedBody
                        text={"Tout commence par un"}
                        className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        />

                        <div className="mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
                            <Link
                            href='/'
                            aria-label="Envoyez message"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4">
                                <AnimatedBody
                                 text={"Envoyez un mail"}
                                 className={"w-[190px] pr-[40px] md:w-[170px] md:pr-0"}   
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <form action="">
                    <div>
                        <label htmlFor="name" hidden>
                            Name
                        </label>
                        <input type="text" name="name" placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" hidden>
                            Email
                        </label>
                        <input type="text" name="email" placeholder="email" required />
                    </div>
                    <div>
                        <label htmlFor="message" hidden>
                            Message
                        </label>
                        <textarea type="text" name="name" placeholder="name" required></textarea>
                    </div>
                </form> */}
             </div>
        </motion.section>
    )
}

export default Contact