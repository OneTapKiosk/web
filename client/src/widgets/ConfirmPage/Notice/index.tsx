import { ColumnStyle, Container, NoticeIconStyle, TitleStyle } from "./style.css"

export const Notice = () => {
  return (
    <div className={Container}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
        <i className={NoticeIconStyle} />
        <div>
          <h4 className={TitleStyle}>주문 전 확인사항</h4>
          <ul className={ColumnStyle}>
            <li>• 주문 내역을 다시 한 번 확인해주세요</li>
            <li>• 결제 완료 후에는 주문 변경이 불가능합니다</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
