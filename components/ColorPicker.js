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

  return (
    <div>
      Color:{' '}
      {
        choices.map(choice => {
          return (
            <button
              className={choice === color ? styles.selected : null}
              onClick={() => setColor(choice)}
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