import { useRef } from "react";
import { Modal } from "bootstrap"; // ✅ window.bootstrap 대신 import

function BootStrapModal() {
  const modalRef = useRef(null);

  const openModal = () => {
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        모달 열기
      </button>

      <div className="modal fade" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Bootstrap 모달</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="닫기"
              ></button>
            </div>
            <div className="modal-body">
              <p>이건 React + Bootstrap에서 동작하는 모달입니다 🎉</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                닫기
              </button>
              <button type="button" className="btn btn-primary">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootStrapModal;
