import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

const PopupRefuseRequest = ({ visible, onCancel, onRefuse }) => {
  const [note, setNote] = useState("");

  const handleRefuse = () => {
    onRefuse(note);
    setNote(""); // Clear note after refusing
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={[
        
          <div className="popup1">
            <div className="button-popup">
              <button className="btn-epic" onClick={handleRefuse}>
                <div>
                  <span>Xác nhận</span>
                  <span>Xác nhận</span>
                </div>
              </button>
              <button className="btn-epic1" onClick={onCancel}>
                <div>
                  <span>Hủy</span>
                  <span>Hủy</span>
                </div>
              </button>
            </div>
          </div>

      ]}
    >
    <p style={{marginLeft:"25px"}} className="title-popup">Bạn có chắc chắn muốn Hủy không?</p>
      <Input
        placeholder="Enter refusal note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{height:"100px"}}
      />
    </Modal>
  );
};

export default PopupRefuseRequest;
