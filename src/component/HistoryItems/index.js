import './index.css'

const HistoryItems = props => {
  const {initialHistoryItem, onDeleteItem} = props
  const {domainUrl, title, logoUrl, timeAccessed, id} = initialHistoryItem
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <div className="item-container">
      <li className="history-container">
        <p className="time">{timeAccessed}</p>
        <div className="history-details">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="text-content">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </li>
      <button
        type="button"
        className="btn"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </div>
  )
}

export default HistoryItems
