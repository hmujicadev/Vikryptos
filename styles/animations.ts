import { keyframes } from 'styled-components'

export const glowAnimation = keyframes`
 0% { 
   filter: blur(8px);
  }
 50% { 
   filter: blur(16px);
  }
 100% {
  kit-filter: blur(8px);}
`

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
