import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useSavedColorsContext } from './context';
import { HiSaveAs } from 'react-icons/hi';
import { BiErrorAlt, BiMessageSquareCheck } from 'react-icons/bi';
const EditModal = () => {
  const inputRef = useRef(null);

  const {
    editModal,
    closeEditModal,
    setColorName,
    editColor,
  } = useSavedColorsContext();

  useEffect(() => {
    if (editModal.isOpen) inputRef.current.focus();
  }, [editModal.isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
    editColor(editModal.id, editModal.colorName);
  };
  return (
    <div
      className={`${
        editModal.isOpen ? 'modal-overlay modal-overlay--active' : 'modal-overlay'
      }`}
    >
      <div className="edit-modal">
        <div className="edit-modal__container">
          <h3 className="edit-modal__title">
            Edit color's <br />
            <span>{editModal.id}</span> name to:
          </h3>
          <button className="edit-modal__close" onClick={closeEditModal}>
            <FaWindowClose />
          </button>
          <form className="edit-modal__form" onSubmit={handleSubmit}>
            <label htmlFor="color-name" className="edit-modal__label">
              Color name:
            </label>
            <input
              type="text"
              name="color-name"
              className="edit-modal__input"
              placeholder="Color name"
              value={editModal.colorName}
              ref={inputRef}
              onChange={e => setColorName(e.target.value)}
            />
            <button type="submit" className="edit-modal__submit">
              Save <HiSaveAs />
            </button>
          </form>
          <div
            className={`${
              editModal.alert.show
                ? 'edit-modal__alert edit-modal__alert--active'
                : 'edit-modal__alert'
            }`}
          >
            <p
              className={`edit-modal__alert__message edit-modal__alert__message--${editModal.alert.type}`}
            >
              {editModal.alert.message}
              {editModal.alert.type === 'success' ? (
                <BiMessageSquareCheck />
              ) : (
                <BiErrorAlt />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
