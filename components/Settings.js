import { useState } from "react"
import styles from '../styles/Settings.module.css'
import ColorPicker from "./ColorPicker";
import ToolPicker from "./ToolPicker";

const Settings = props => {
  const {
    color,
    setColor,
    tool,
    setTool
  } = props;

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <ColorPicker
        color={color}
        setColor={setColor}
      />
      <ToolPicker
        tool={tool}
        setTool={setTool}
      />
    </div>
  )
}

export default Settings;