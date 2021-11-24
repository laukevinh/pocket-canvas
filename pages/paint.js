import Link from 'next/link'
import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import Settings from '../components/Settings';
import styles from '../styles/Paint.module.css';

const Paint = props => {
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState(null);

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.segment}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>

        <div className={`${styles.grid} ${styles.center}`}>
          <div className={styles.card}>
            <Canvas
              color={color}
              tool={tool}
              setTool={setTool}
              width={500}
              height={400}
            />
          </div>
          <div className={styles.card}>
            <Settings
              color={color}
              tool={tool}
              setColor={setColor}
              setTool={setTool}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Paint;