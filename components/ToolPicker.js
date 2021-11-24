import styles from '../styles/Settings.module.css'

const ToolPicker = props => {
  const {
    tool,
    setTool
  } = props;

  const choices = [
    'marker',
    'fill',
    'clear'
  ];

  return (
    <div>
      tool:{' '}
      {
        choices.map(choice => {
          return (
            <button
              className={choice === tool ? styles.selected : null}
              onClick={() => setTool(choice)}
            >
              {choice}
            </button>
          );
        })
      }
    </div>
  )
}

export default ToolPicker;