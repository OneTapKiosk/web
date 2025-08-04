import { HeadingStyle, WelcomeContainer } from "./style.css"

export default function WelcomeMessage() {
  return (
    <div className={WelcomeContainer}>
      <h1 className={HeadingStyle}>무인 아이스크림 매장에</h1>
      <h2 className={HeadingStyle}>오신 것을 환영합니다</h2>
    </div>
  )
}
