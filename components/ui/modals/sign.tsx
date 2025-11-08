"use client"
import { Check, Eraser, PenLineIcon, X } from 'lucide-react'
import React , {useEffect, useRef, useState}from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'

type point = {x: number, y: number}

export const SignaturePad = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [strokes, setStrokes] = useState<point[][]>([]) // Array of stroke arrays
  const [currentStroke, setCurrentStroke] = useState<point[]>([]) // Current stroke being drawn
  const [animationProgress, setAnimationProgress] = useState(0) // Progress of signature animation
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHolding, setIsHolding] = useState(false) // Track if button is being held
  const [isComplete, setIsComplete] = useState(false) // Track if animation completed
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const reverseAnimationRef = useRef<NodeJS.Timeout | null>(null)
  const holdingRef = useRef(false) // Ref to track holding state
  const [ isOpen , setIsOpen] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
 


  useEffect(() => {
    const canvas = canvasRef.current
    if(!canvas) return;
    const ctx = canvas.getContext("2d")
    if(!ctx) return;

    const setupcanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(scale, scale)
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = "gray";
    }
    setupcanvas()
  }, [])

  const getPosition = (e:React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>, canvas:HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    
    if("touches" in e){
      return {
        x: (e.touches[0].clientX - rect.left) * (canvas.width / rect.width),
        y: (e.touches[0].clientY - rect.top) * (canvas.height / rect.height)
       }
    }else{
      return{
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault(); // Prevent scrolling on touch devices
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d")
    if(!ctx) return;

    setIsDrawing(true)
    const pos = getPosition(e, canvas)
    setCurrentStroke([{x: pos.x, y: pos.y}])
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault(); // Prevent scrolling on touch devices
    if(!isDrawing) return;
    const canvas = canvasRef.current
    if(!canvas) return;
    const ctx = canvas.getContext("2d")
    if(!ctx) return;

    const pos = getPosition(e, canvas)
    
    // Draw immediately to canvas
    ctx.beginPath()
    ctx.moveTo(currentStroke[currentStroke.length - 1]?.x || pos.x, currentStroke[currentStroke.length - 1]?.y || pos.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    const duration = strokes.length * 2 * 1000;
    // Update current stroke
    setCurrentStroke((prev) => [...prev, pos])
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    const canvas = canvasRef.current
    if(!canvas) return;
    const ctx = canvas.getContext("2d")
    if(!ctx) return;
    
    // Save the current stroke to the strokes array
    if(currentStroke.length > 0) {
      setStrokes((prev) => [...prev, currentStroke])
      setCurrentStroke([])
    }
    
    ctx.beginPath()
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d")
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setStrokes([]) // Clear the strokes state as well
    setCurrentStroke([]) // Clear current stroke
  }


  const redraw = () => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    if(!ctx || strokes.length === 0) return
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // First, draw all strokes in gray as background
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.strokeStyle = "gray";
    
    strokes.forEach(stroke => {
      if(stroke.length > 1) {
        ctx.beginPath()
        ctx.moveTo(stroke[0].x, stroke[0].y)
        for(let i = 1; i < stroke.length; i++) {
          ctx.lineTo(stroke[i].x, stroke[i].y)
        }
        ctx.stroke()
      }
    })
  }

  // Effect to control animation based on progress
  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas || strokes.length === 0) return;
    
    const ctx = canvas.getContext("2d");
    if(!ctx) return;

    // Draw the animated portion based on animationProgress
    const totalPoints = strokes.reduce((sum, stroke) => sum + stroke.length - 1, 0);
    const targetProgress = totalPoints;
    
    if (animationProgress >= targetProgress) {
      setIsComplete(true);
      return;
    }

    // Reset and draw animated portion
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw gray background
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.strokeStyle = "gray";
    
    strokes.forEach(stroke => {
      if(stroke.length > 1) {
        ctx.beginPath()
        ctx.moveTo(stroke[0].x, stroke[0].y)
        for(let i = 1; i < stroke.length; i++) {
          ctx.lineTo(stroke[i].x, stroke[i].y)
        }
        ctx.stroke()
      }
    })
    
    // Draw animated portion in black
    ctx.strokeStyle = "black";
    let pointCount = 0;
    
    for(let strokeIndex = 0; strokeIndex < strokes.length; strokeIndex++) {
        const currentStroke = strokes[strokeIndex];
        
      for(let pointIndex = 1; pointIndex < currentStroke.length; pointIndex++) {
        if(pointCount >= animationProgress) break;
        
          const p1 = currentStroke[pointIndex - 1]
          const p2 = currentStroke[pointIndex]
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke();
        
        pointCount++;
      }
      
      if(pointCount >= animationProgress) break;
    }

  }, [animationProgress, strokes])

  // Handle button press and release
  const handleMouseDown = () => {
    if(strokes.length === 0 || isComplete) return;
    holdingRef.current = true;
    setIsHolding(true);
    setIsAnimating(true);
    setAnimationProgress(0);
    
    // Calculate total duration and increment per frame
    const totalPoints = strokes.reduce((sum, stroke) => sum + stroke.length - 1, 0);
    const interval = 20; // ms per frame
    const duration = strokes.length * 0.6 * 1000; // Convert to ms

    const increment = totalPoints / (duration / interval);
    
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      if(holdingRef.current && currentProgress < totalPoints) {
        currentProgress += increment;
        setAnimationProgress(Math.min(currentProgress, totalPoints));
      } else {
        clearInterval(progressInterval);
        animationRef.current = null;
        if(currentProgress >= totalPoints && holdingRef.current) {
          setIsComplete(true);
        }
      }
    }, interval);

    // Store interval in ref to cleanup
    animationRef.current = progressInterval;
  }

  const handleMouseUp = () => {
    holdingRef.current = false;
    
    // Check if animation is complete
    const totalPoints = strokes.reduce((sum, stroke) => sum + stroke.length - 1, 0);
    const isCompleteNow = animationProgress >= totalPoints;
    
    if(!isCompleteNow) {
      // If not complete, animate backwards
      // Stop forward animation first
      if(animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      
      // Start reverse animation
      const reverseInterval = 20; // ms per frame
      const reverseSpeed = Math.max(2, Math.floor(totalPoints / 100)); // Adjust speed based on total points
      
      let currentProgress = animationProgress;
      const reverseProgressInterval = setInterval(() => {
        if(currentProgress > 0) {
          currentProgress = Math.max(0, currentProgress - reverseSpeed);
          setAnimationProgress(currentProgress);
        } else {
          clearInterval(reverseProgressInterval);
          reverseAnimationRef.current = null;
        }
      }, reverseInterval);
      
      reverseAnimationRef.current = reverseProgressInterval;
        } else {
      // If complete, mark as complete
      setIsComplete(true);
    }
    
    setIsHolding(false);
    setIsAnimating(false);
    if(animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }
  }

  // Reset on close or clear
  useEffect(() => {
    if(!isOpen) {
      holdingRef.current = false;
      setAnimationProgress(0);
      setIsComplete(false);
      setIsHolding(false);
      if(animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      if(reverseAnimationRef.current) {
        clearInterval(reverseAnimationRef.current);
        reverseAnimationRef.current = null;
      }
    }
  }, [isOpen])

  useEffect(() => {
    if(strokes.length === 0) {
      holdingRef.current = false;
      setAnimationProgress(0);
      setIsComplete(false);
      setIsHolding(false);
      if(animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      if(reverseAnimationRef.current) {
        clearInterval(reverseAnimationRef.current);
        reverseAnimationRef.current = null;
      }
    }
  }, [strokes])

  useEffect(() => {
    if(isComplete){
      setIsSigned(true)
      setTimeout(() => {
        setIsOpen(false)
        setStrokes([])
      }, 2000)
    }
  }, [isComplete])

  const animatetext: Variants = {
    "initial": {
      y: 10,
      opacity: 0
    },
    "animate": {
      y: 0,
      opacity: 1
    },
    "exit": {
      y: -10,
      opacity: 0
    }
  }


  return (
    <div>
        {
            !isOpen 
            ?
            <m.button style={{borderRadius: "40px"}} onClick={() => setIsOpen(true)} 
           
            className='w-10 h-10 bg-gray-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center' layoutId='box'>
            {
                !isSigned ?
                <m.span className='p-2 rounded-full items-center justify-center' layoutId='icon'> <PenLineIcon size={18}/></m.span> :
                <m.span className='p-2 rounded-full flex items-center justify-center w-full h-full'  initial={{x: -30, opacity: 0}}
                animate={{x: 0, opacity: 1, background: "#016630"}} 
                transition={{delay: 0.3}}
                ><Check size={18}/></m.span>
              }</m.button> 
            :
            <m.div layoutId='box' style={{borderRadius: "12px"}}
             className="w-100 p-2 gap-2 flex flex-col overflow-hidden bg-gray-100 dark:bg-neutral-800 shadow-md
              shadow-gray-200 relative dark:shadow-black">
            <div className='flex gap-2 items-center'>
               <m.span layoutId='icon'> <PenLineIcon size={18}/></m.span>
                <span>Draw Signature</span>
            </div>
            <canvas
            onMouseDown={startDrawing} 
            onMouseLeave={stopDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            ref={canvasRef} className="w-full h-48 rounded-md relative">
            </canvas>
            <div className='flex justify-between items-center w-full'>

             <m.div animate={{y: isComplete ? 50 : 0}} className='flex gap-2 w-fit h-fit'>
                <m.span onClick={clearCanvas} 
                  className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900 cursor-pointer'><Eraser size={18}/>
                  </m.span>
                <m.span onClick={() => {
                  clearCanvas()
                  setIsOpen(false)
                }} className='p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900 cursor-pointer'>
                  <X size={18}/></m.span>
             </m.div>
              <m.button 
              whileTap="press"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="p-1 px-4 rounded-md relative overflow-hidden w-40 bg-gray-200">
                <m.div 
                animate={isComplete ? {width: "100%"} : isHolding ? "press" : {}}
                initial={{width: 0}}
                variants={{
                  "press": {
                    width: "100%"
                  }
                }}
                transition={{
                  duration: (strokes.length * 0.5 )
                }}
                className='absolute top-0 left-0 inset-0 bg-green-300'></m.div>
                <div className='w-full h-full flex items-center justify-center bg-transparent text-neutral-500 mix-blend-difference'>
                  <AnimatePresence mode='popLayout'>
                  {
                    !isComplete ?
                    <m.span variants={animatetext} exit="exit" key={"hold"}
                    initial="initial" animate="animate" className='w-full text-center'>Hold to confirm</m.span> :
                    <m.span variants={animatetext} exit="exit" key={"done"}
                    initial="initial" animate="animate">Signed</m.span>
                  }
                  </AnimatePresence>
                </div>
              </m.button>
              
            </div>


        </m.div> 
        }
    </div>
  )
}



