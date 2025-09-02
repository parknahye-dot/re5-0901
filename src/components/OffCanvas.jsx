import { useRef } from "react";
import { Offcanvas } from "bootstrap";
import { Link } from "react-router-dom";

function OffCanvas({ buttonLabel = "메뉴", title = "사이드 메뉴" }) {
  const offCanvasRef = useRef(null);

  const openOffCanvas = () => {
    const offcanvas = new Offcanvas(offCanvasRef.current);
    offcanvas.show();
  };

  // 메뉴 클릭 시 OffCanvas 닫기
  const closeOffCanvas = () => {
    const offcanvas = Offcanvas.getInstance(offCanvasRef.current);
    if (offcanvas) offcanvas.hide();
  };

  return (
    <div>
      {/* 토글 버튼 */}
      <button className="btn btn-secondary" onClick={openOffCanvas}>
        {buttonLabel}
      </button>

      {/* Bootstrap OffCanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" ref={offCanvasRef}>
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
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <Link to="/" className="text-blue-600" onClick={closeOffCanvas}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/app2" className="text-blue-600" onClick={closeOffCanvas}>
                직원목록
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-600" onClick={closeOffCanvas}>
                대시보드
              </Link>
            </li>
            <li>
              <Link to="/members" className="text-blue-600" onClick={closeOffCanvas}>
                회원 관리
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-600" onClick={closeOffCanvas}>
                설정
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
