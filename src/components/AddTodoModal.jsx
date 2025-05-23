import React, { useEffect } from 'react';

export default function AddTodoModal({ isOpen, onClose, onAddTodo }) {
    const [input, setInput] = React.useState('');

    // ⌨️ Tutup modal saat tekan ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = () => {
        onClose();
    };

    const handleAdd = () => {
        if (input.trim() !== '') {
            onAddTodo(input.trim());
            setInput('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Cegah klik dalam modal menutupnya
            >
                <h5>Tambah Aktivitas</h5>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Masukkan aktivitas"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAdd();
                    }}
                    autoFocus
                />
                <div className="modal-buttons">
                    <button onClick={handleAdd} className='nama'>Tambah</button>
                </div>
            </div>
        </div>
    );
}
