import { Container, ContentStyle, DescriptionStyle, TitleStyle } from "./style.css"

export const BarcodeScannerInstruction = () => {
  
return (
    <div className={Container}>
      <div className={ContentStyle}>
        <i className="ri-qr-scan-2-line" />
        <div>
          <h3 className={TitleStyle}>바코드 스캔</h3>
          <p className={DescriptionStyle}>
            원하는 아이스크림의 바코드를 스캔하여 장바구니에 추가하세요
          </p>
        </div>
      </div>
    </div>
  )
}