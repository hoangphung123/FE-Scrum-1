import React from 'react';

function DeleteConfirmationPopup({ showLogout, closeLogout, handleLogout}) {
  return (
    showLogout && (
      <div className="popup-overlay1" onClick={closeLogout}>
        <div className="popup1" onClick={(e) => e.stopPropagation()}>
          <p className="title-popup">Bạn có chắc chắn muốn Đăng xuất không?</p>
          <div className="button-popup">
            <button className="btn-epic" onClick={() => handleLogout()}>
              <div>
                <span>Xác nhận</span>
                <span>Xác nhận</span>
              </div>
            </button>
            <button className="btn-epic1" onClick={closeLogout}>
              <div>
                <span>Hủy</span>
                <span>Hủy</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteConfirmationPopup;
