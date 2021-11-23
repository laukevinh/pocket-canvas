import Link from 'next/link'
import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import Settings from '../components/Settings';

const Paint = props => {
  const [color, setColor] = useState('white');
  const [tool, setTool] = useState('marker');

  return (
    <>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <br />
      <Canvas
        color={color}
        width={300}
        height={400}
      />
      <Settings
        color={color}
        tool={tool}
        setColor={setColor}
        setTool={setTool}
      />
    </>
  );
}

export default Paint;