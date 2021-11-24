import { useEffect, useRef } from "react";
import styles from '../styles/Paint.module.css';
import { rgbToHex } from "../utils/functions";

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
      console.log(tool, color);
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.lineJoin = 'miter';
      context.lineWidth = 3;
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
      console.log("fill", color);
      const getColorIndicesForCoord = (x, y, width) => {
        var red = y * (width * 4) + x * 4;
        return [red, red + 1, red + 2, red + 3];
      }
      const getColorForPoint = (x, y, width, imgData) => {
        const [r, g, b, a] = getColorIndicesForCoord(x, y, width);
        return imgData.slice(r, r + 4);
      }
      const getHexColorForPoint = (x, y, width, imgData) => {
        const [r, g, b, a] = getColorIndicesForCoord(x, y, width);
        return rgbToHex(imgData[r], imgData[g], imgData[b]);
      }

      const floodFill = (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const imgData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const initColor = getHexColorForPoint(x, y, canvas.width, imgData);
        if (!inside(x, y, initColor, color, imgData)) {
          const currColor = getHexColorForPoint(x, y, canvas.width, imgData);
          console.log("not inside", x, y, initColor, currColor, color);
          return;
        }
        context.beginPath();
        context.fillStyle = color;

        let S = [];
        S.push({ x: x, y: y });
        while (S.length > 0) {
          let point = S.pop();
          let lx = point.x;
          while (inside(lx - 1, point.y, initColor, color, imgData)) {
            lx -= 1;
          }
          while (inside(point.x, point.y, initColor, color, imgData)) {
            point.x += 1;
          }
          if (lx !== point.x) {
            context.fillRect(lx, point.y, point.x - lx, 1);
          }
          scan(lx, point.x - 1, point.y + 1, S, initColor, color, imgData);
        }
        S.push({ x: x, y: y });
        while (S.length > 0) {
          let point = S.pop();
          let lx = point.x;
          while (inside(lx - 1, point.y, initColor, color, imgData)) {
            lx -= 1;
          }
          while (inside(point.x, point.y, initColor, color, imgData)) {
            point.x += 1;
          }
          if (lx !== point.x) {
            context.fillRect(lx, point.y, point.x - lx, 1);
          }
          scan(lx, point.x - 1, point.y - 1, S, initColor, color, imgData);
        }
      };

      const inside = (x, y, initColor, newColor, imgData) => {
        const currColor = getHexColorForPoint(x, y, canvas.width, imgData);
        // console.log("insideFunc", x, y, initColor, newColor, currColor);
        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
          return false;
        }
        if (currColor === newColor) {
          return false;
        }
        if (currColor === initColor) {
          return true;
        }
        return false;
      }

      const fillOne = (x, y, newColor) => {
        context.fillStyle = newColor;
        context.rect(x, y, 1, 1);
        context.fill();
      }

      const scan = (lx, rx, y, S, initColor, newColor, imgData) => {
        let added = false;
        for (let x = lx; x < rx; x++) {
          if (!inside(x, y, initColor, newColor, imgData)) {
            added = false;
          } else if (!added) {
            S.push({ x: x, y: y });
            added = true;
          }
        }
      }

      canvas.addEventListener('mousedown', floodFill, false);

      return () => {
        canvas.removeEventListener('mousedown', floodFill);
      };
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