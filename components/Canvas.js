import { useEffect, useRef } from "react";
import styles from '../styles/Paint.module.css';

const Canvas = props => {
  const {
    color,
    tool,
    width,
    height
  } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (tool === null || tool === 'clear') {
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (tool === 'marker') {
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
    }

    if (tool === 'fill') {
      ;
    }

  }, [color, tool]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.frame}
      width={width || '400'}
      height={height || '300'}
    />
  );
}

export default Canvas;