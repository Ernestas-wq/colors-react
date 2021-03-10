import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { MdError } from 'react-icons/md';
import { useSavedColorsContext } from './context';

const DeleteModal = () => {
  const { closeDeleteModal, deleteModal, deleteColor } = useSavedColorsContext();

  return (
    <div
      className={`${
        deleteModal.isOpen ? 'modal-overlay modal-overlay--active' : 'modal-overlay'
      }`}
    >
      <div className="delete-modal">
        <div className="delete-modal__container">
          <h3 className="delete-modal__title">
            Are you sure you want to delete <span>{deleteModal.colorName}</span> from
            your saved colors?
          </h3>
          <div className="delete-modal__buttons">
            <button
              className="delete-modal__yes"
              onClick={() => {
                deleteColor(deleteModal.id);
              }}
            >
              Yes <HiCheckCircle />
            </button>
            <button className="delete-modal__no" onClick={closeDeleteModal}>
              No <MdError />
            </button>
          </div>

          <button className="delete-modal__close" onClick={closeDeleteModal}>
            <FaWindowClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
