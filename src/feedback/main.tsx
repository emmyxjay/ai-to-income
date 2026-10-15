import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {ArrowLeft,ArrowRight} from 'lucide-react';
import {Typewriter} from './Typewriter';
import {feedbacks,slideIndex} from './feedbacks';
import './styles.css';
const directional={enter:(d:number)=>({x:d>0?100:-100,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:(d:number)=>({zIndex:0,x:d<0?100:-100,opacity:0})};
function Feedback(){
 const [currentIndex,setCurrentIndex]=useState(0);
 const [direction,setDirection]=useState(1);
 const reduced=useReducedMotion();
 const current=feedbacks[currentIndex];
 const navigate=(step:number)=>{setDirection(step);setCurrentIndex(index=>slideIndex(index,step));};
 const reveal={hidden:{opacity:reduced?1:0,y:reduced?0:20},visible:{opacity:1,y:0,transition:{duration:reduced?0:.6}}};
 const line={hidden:{scaleX:reduced?1:0},visible:{scaleX:1,transition:{duration:reduced?0:.8}}};
 return <section id="feedback" aria-labelledby="feedback-heading" aria-roledescription="carousel" className="feedback-section w-full overflow-hidden" onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();navigate(1);}else if(e.key==='ArrowLeft'){e.preventDefault();navigate(-1);}}}>
 <motion.div className="wrap" initial="hidden" whileInView="visible" viewport={{once:true,margin:'-10px'}} variants={{hidden:{opacity:reduced?1:0},visible:{opacity:1,transition:{staggerChildren:reduced?0:.05}}}}>
 <motion.div variants={reveal} className="feedback-heading flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 id="feedback-heading"><Typewriter text="Member comments" speed={.012}/></h2><p>Illustrative examples of the member experience</p></motion.div>
 <motion.div variants={line} className="feedback-divider origin-left"/>
 <motion.div variants={reveal} className="feedback-stage relative overflow-hidden" aria-label={`Sample feedback ${currentIndex+1} of ${feedbacks.length}`} aria-roledescription="slide">
 {feedbacks.map((feedback,i)=><p key={i} className="feedback-quote feedback-measure" aria-hidden="true">{feedback.quote}</p>)}
 <AnimatePresence initial={false} custom={direction} mode="wait"><motion.blockquote key={currentIndex} custom={direction} variants={reduced?{enter:{opacity:1},center:{opacity:1},exit:{opacity:1}}:directional} initial="enter" animate="center" exit="exit" transition={reduced?{duration:0}:{x:{type:'spring',stiffness:300,damping:30},opacity:{duration:.2}}} className="feedback-slide w-full"><p className="feedback-quote"><Typewriter text={current.quote} delay={.2} speed={.012}/></p></motion.blockquote></AnimatePresence>
 </motion.div>
 <motion.div variants={line} className="feedback-divider origin-left"/>
 <motion.div variants={reveal} className="feedback-bottom flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
 <AnimatePresence mode="wait"><motion.div key={currentIndex} initial={{opacity:reduced?1:0,y:reduced?0:10}} animate={{opacity:1,y:0}} exit={{opacity:reduced?1:0,y:reduced?0:-10}} transition={{duration:reduced?0:.2}} className="feedback-person flex items-center gap-4 w-full sm:w-auto"><div className="feedback-avatar" aria-hidden="true"><span>{current.author.split(' ').map(s=>s[0]).join('')}</span><img src={current.avatar} alt="" width="56" height="56" loading="lazy" referrerPolicy="no-referrer" onError={e=>{e.currentTarget.style.display='none';}}/></div><div><h3><Typewriter text={current.author} delay={.4} speed={.012}/></h3><p><Typewriter text={current.title} delay={.5} speed={.012}/></p></div></motion.div></AnimatePresence>
 <div className="feedback-controls flex items-center gap-2 w-full sm:w-auto justify-end"><span className="feedback-count" aria-hidden="true">0{currentIndex+1}<span> / 03</span></span><button type="button" onClick={()=>navigate(-1)} aria-label="Previous feedback"><ArrowLeft size={24} strokeWidth={1.5} aria-hidden="true"/></button><button type="button" onClick={()=>navigate(1)} aria-label="Next feedback"><ArrowRight size={24} strokeWidth={1.5} aria-hidden="true"/></button></div>
 </motion.div>

 <span className="feedback-sr-only" role="status" aria-live="polite" aria-atomic="true">{`Sample ${currentIndex+1} of 3. ${current.author}, ${current.title}. ${current.quote}`}</span>
 </motion.div></section>;
}
const root=document.getElementById('feedback-root');
if(root)createRoot(root).render(<Feedback/>);
