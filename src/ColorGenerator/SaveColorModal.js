import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { HiSaveAs } from 'react-icons/hi';
import { BiErrorAlt, BiMessageSquareCheck } from 'react-icons/bi';

import { useColorGeneratorContext } from './context';

const SaveColorModal = () => {
  const {
    generatorForm,
    saveColorModal,
    saveColor,
    closeSaveColorModal,
    setSaveColorName,
    resetSaveColorAlert,
  } = useColorGeneratorContext();

  const { isOpen, colorName, alert } = saveColorModal;
  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    saveColor(colorName, generatorForm.color);
    setSaveColorName('');
  };

  useEffect(() => {
    if (isOpen) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      resetSaveColorAlert();
    }, 1500);
    return () => clearTimeout(timeout);
  }, [alert.show, resetSaveColorAlert]);

  return (
    <div
      className={`${
        isOpen ? 'modal-overlay modal-overlay--active' : 'modal-overlay'
      }`}
    >
      <div className="save-color">
        <div className="save-color__container">
          <h3 className="save-color__title">
            Save <span>{generatorForm.color}</span> pallet as:
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
              value={colorName}
              onChange={e => setSaveColorName(e.target.value)}
              ref={inputRef}
            />
            <button type="submit" className="save-color__submit">
              Save <HiSaveAs />
            </button>
          </form>
          <div
            className={`${
              alert.show
                ? 'save-color__alert save-color__alert--active'
                : 'save-color__alert'
            }`}
          >
            <p
              className={`save-color__alert__message save-color__alert__message--${alert.type}`}
            >
              {alert.message}
              {alert.type === 'success' ? <BiMessageSquareCheck /> : <BiErrorAlt />}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveColorModal;
