import './App.css'

const TabsList = props => {
  const {each, onClickTabItem} = props
  const {buttonText, id} = each
  const onClickBtn = () => {
    onClickTabItem(id)
  }
  return (
    <li style={{listStyle: 'none'}}>
      <button type="button" onClick={onClickBtn} className="Btn">
        {buttonText}
      </button>
    </li>
  )
}

export default TabsList
