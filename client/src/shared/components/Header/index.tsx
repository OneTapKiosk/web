import { BackButton, HeaderContainer, RowStyle, Spacer, TitleText } from './style.css'

interface HeaderProps {
  title: string
  handleBack: () => void
}

export const Header = ({ title, handleBack }: HeaderProps) => {
  return (
    <div className={HeaderContainer}>
      <div className={RowStyle}>
        <button onClick={handleBack} className={BackButton}>
          <i className="ri-arrow-left-line" />
        </button>
        <h1 className={TitleText}>{title}</h1>
        <div className={Spacer} />
      </div>
    </div>
  )
}
