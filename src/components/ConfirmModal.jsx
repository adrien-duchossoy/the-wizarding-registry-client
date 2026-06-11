import '../styles/ConfirmModal.css'

function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="confirm-modal-overlay" onClick={onCancel}>
            <div className="confirm-modal" onClick={e => e.stopPropagation()}>
                <p>{message}</p>
                <div className="confirm-modal-actions">
                    <button className="main-btn" onClick={onConfirm}>Confirm</button>
                    <button className="main-btn" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
