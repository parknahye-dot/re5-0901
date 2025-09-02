import { useRef } from "react";
import { Offcanvas } from "bootstrap";

function OffCanvas({ buttonLabel = "메뉴", title = "사이드 메뉴", children }) {
    const offCanvasRef = useRef(null);

    const openOffCanvas = () => {
        const offcanvas = new Offcanvas(offCanvasRef.current);
        offcanvas.show();
    };

    return (
        <div>
            {/* 토글 버튼 */}
            <button className="btn btn-secondary" onClick={openOffCanvas}>
                {buttonLabel}
            </button>

            {/* Bootstrap OffCanvas */}
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                ref={offCanvasRef}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">{title}</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="닫기"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {children || <p>여기에 메뉴/폼/콘텐츠를 추가할 수 있습니다.</p>}
                </div>
            </div>
        </div>
    );
}

export default OffCanvas;
