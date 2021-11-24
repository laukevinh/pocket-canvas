import styles from '../styles/Settings.module.css'

const ColorPicker = props => {
  const {
    color,
    setColor
  } = props;

  const choices = [
    'black',
    'red',
    'green',
    'blue',
    'white'
  ];

  // const hexCodes = [
  //   '#000000', // black
  //   '#FF0000', // red
  //   '#00FF00', // green
  //   '#0000FF', // blue
  //   '#FFFFFF'
  // ];

  const choiceToHexColor = {
    'black': '#000000', // black
    'red': '#FF0000', // red
    'green': '#00FF00', // green
    'blue': '#0000FF', // blue
    'white': '#FFFFFF'  // white  
  }

  // const rgbaCode = {
  //   'black': [0, 0, 0, 0], // black
  //   'red': [255, 0, 0, 0], // red
  //   'green': [0, 255, 0, 0], // green
  //   'blue': [0, 0, 255, 0], // blue
  //   'white': [0, 0, 0, 0]  // white  
  // };

  return (
    <div>
      Color:{' '}
      {
        choices.map(choice => {
          return (
            <button
              className={choiceToHexColor[choice] === color ? styles.selected : null}
              onClick={() => setColor(choiceToHexColor[choice])}
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