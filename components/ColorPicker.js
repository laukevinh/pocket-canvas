import styles from '../styles/Settings.module.css'

const ColorPicker = props => {
  const {
    color,
    setColor
  } = props;

  const mapColorToHex = {
    'black': '#000000', // black
    'red': '#FF0000', // red
    'green': '#00FF00', // green
    'blue': '#0000FF', // blue
    'white': '#FFFFFF'  // white  
  }

  return (
    <div>
      Color:{' '}
      {
        Object.entries(mapColorToHex).map(([choice, hexColor]) => {
          return (
            <button
              key={hexColor}
              className={hexColor === color ? styles.selected : null}
              onClick={() => setColor(hexColor)}
            >
              {choice}
            </button>
          );
        })
      }
    </div>
  )
}

export default ColorPicker;