import { BackButton, HeaderContainer, RowStyle, Spacer, TitleText } from './style.css'
import { useNavigate } from 'react-router'

interface HeaderProps {
  title: string
  backPath: string
}

export const Header = ({ title, backPath = '/' }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className={HeaderContainer}>
      <div className={RowStyle}>
        <button onClick={() => navigate(backPath)} className={BackButton}>
          <i className="ri-arrow-left-line" />
        </button>
        <h1 className={TitleText}>{title}</h1>
        <div className={Spacer} />
      </div>
    </div>
  )
}
