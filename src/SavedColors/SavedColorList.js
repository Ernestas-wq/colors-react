import React from 'react';
import { Link } from 'react-router-dom';
import { HiViewGrid, HiTrash } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { useSavedColorsContext } from './context';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
const SavedColorList = () => {
  const { savedColorList, openDeleteModal, openEditModal } = useSavedColorsContext();
  return (
    <section className="saved-colors">
      <div className="saved-colors__container">
        {Object.keys(savedColorList).map(key => {
          return (
            <article className="saved-colors__card" key={key}>
              <p className="saved-colors__title">{savedColorList[key]}</p>
              <p className="saved-colors__hex">{key}</p>
              <div className="saved-colors__buttons">
                <Link to={`/saved-colors/${key.substring(1)}`}>
                  <HiViewGrid />
                </Link>
                <button onClick={() => openDeleteModal(key, savedColorList[key])}>
                  <HiTrash />
                </button>
                <button onClick={() => openEditModal(key, savedColorList[key])}>
                  <AiFillEdit />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <DeleteModal />
      <EditModal />
    </section>
  );
};

export default SavedColorList;
