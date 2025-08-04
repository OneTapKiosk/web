import { BackButton, HeaderContainer, RowStyle, Spacer, TitleText } from './style.css'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={HeaderContainer}>
      <div className={RowStyle}>
        <button onClick={() => navigate('/')} className={BackButton}>
          <i className="ri-arrow-left-line" />
        </button>
        <h1 className={TitleText}>장바구니</h1>
        <div className={Spacer} />
      </div>
    </div>

  )
}
