import {useRef} from 'react';
import {motion,useInView,useReducedMotion} from 'motion/react';
type Props = {text:string;delay?:number;speed?:number;className?:string};
export function Typewriter({text,delay=0,speed=.015,className=''}:Props){
 const ref=useRef<HTMLSpanElement>(null);
 const inView=useInView(ref,{once:true,margin:'-10px'});
 const reduced=useReducedMotion();
 if(reduced) return <span className={className}>{text}</span>;
 return <span className={className}><span className="feedback-sr-only">{text}</span><motion.span ref={ref} aria-hidden="true" initial="hidden" animate={inView?'visible':'hidden'} variants={{hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:speed,delayChildren:delay}}}}>{Array.from(text).map((char,i)=><motion.span key={i} variants={{hidden:{opacity:0},visible:{opacity:1}}}>{char}</motion.span>)}</motion.span></span>;
}
