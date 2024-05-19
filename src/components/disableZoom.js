import React, {useEffect} from 'react';

export const DisableZoom =()=> {
    useEffect(() => {
      const handleWheel = (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
        }
      };
  
      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-'|| e.key==='=')) {
          e.preventDefault();
        }
      };
  
      window.addEventListener('wheel', handleWheel);
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return null;
  }
