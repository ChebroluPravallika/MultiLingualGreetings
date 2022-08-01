import './App.css'

const TabsList = props => {
  const {each, onClickTabItem} = props
  let clsName = ''
  const {buttonText, id} = each
  const onClickBtn = () => {
    clsName = 'clsBtn'
    onClickTabItem(id)
  }
  return (
    <li style={{listStyle: 'none'}}>
      <button
        type="button"
        onClick={onClickBtn}
        className={clsName}
        style={{
          backgroundColor: 'white',
          color: 'red',
          margin: '10px',
          width: '100px',
          height: '40px',
          borderRadius: '20px',
          border: '1px solid red',
          cursor: 'pointer',
        }}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabsList
