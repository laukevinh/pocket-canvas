import { useEffect, useRef } from "react";

const Canvas = props => {
  const { color, tool } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = color || 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, [color]);

  return <canvas ref={canvasRef} {...props}></canvas>;
}

export default Canvas;