import { useEffect, useRef } from "react";

const Canvas = props => {
  const { color, tool } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineJoin = 'miter';
    context.strokeStyle = color || 'black';

    const handleMouseMove = (e) => {
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      context.beginPath();
      context.moveTo(e.offsetX, e.offsetY);
      canvas.addEventListener('mousemove', handleMouseMove, false);
    };

    const handleMouseUp = () => {
      canvas.removeEventListener('mousemove', handleMouseMove, false);
    };

    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} {...props}></canvas>;
}

export default Canvas;