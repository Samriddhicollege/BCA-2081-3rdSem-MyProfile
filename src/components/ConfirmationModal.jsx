import React from 'react'
import '../css/ConfirmationModal.css'

const ConfirmationModal = ({ 
  isOpen = false, 
  title = 'Confirm Action', 
  message = 'Are you sure?', 
  onConfirm = () => {}, 
  onCancel = () => {},
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'default' // 'default', 'danger', 'success'
}) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className={`confirmation-modal modal-${type}`}>
        <div className="modal-header">
          <h2>{title}</h2>
        </div>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onCancel}>
            {cancelText}
          </button>
          <button className={`btn-confirm btn-confirm-${type}`} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
