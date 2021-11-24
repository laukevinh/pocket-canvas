import Link from 'next/link'
import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import Settings from '../components/Settings';

const Paint = props => {
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState(null);

  return (
    <>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <br />
      <Canvas
        color={color}
        tool={tool}
        width={500}
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