import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { HiSaveAs } from 'react-icons/hi';
import { useColorGeneratorContext } from './context';

const SaveColorModal = () => {
  const {
    generator,
    saveColor,
    saveColorModal,
    closeSaveColorModal,
    setSaveColorName,
  } = useColorGeneratorContext();
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    saveColor(saveColorModal.colorName, generator.color);
  };

  useEffect(() => {
    if (saveColorModal.isOpen) inputRef.current.focus();
  }, [saveColorModal.isOpen]);

  return (
    <div
      className={`${
        saveColorModal.isOpen
          ? 'modal-overlay modal-overlay--active'
          : 'modal-overlay'
      }`}
    >
      <div className="save-color">
        <div className="save-color__container">
          <h3 className="save-color__title">
            Save <span>{generator.color}</span> pallet as:
          </h3>
          <button className="save-color__close" onClick={closeSaveColorModal}>
            <FaWindowClose />
          </button>
          <form className="save-color__form" onSubmit={handleSubmit}>
            <label htmlFor="color-name" className="save-color__label">
              Color name:
            </label>
            <input
              type="text"
              name="color-name"
              className="save-color__input"
              placeholder="Color name"
              onChange={e => setSaveColorName(e.target.value)}
              ref={inputRef}
            />
            <button type="submit" className="save-color__submit">
              Save <HiSaveAs />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SaveColorModal;
