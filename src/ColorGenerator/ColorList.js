import React, { useRef } from 'react';
import { useColorGeneratorContext } from './context';
import { HiSaveAs } from 'react-icons/hi';
import GeneratorForm from './GeneratorForm';
import SingleColor from './SingleColor';
import Loading from '../staticComponents/Loading';
import SaveColorModal from './SaveColorModal';
const ColorList = () => {
  const colorGeneratorContainerRef = useRef(null);
  const {
    generatorForm,
    colorList,
    openSaveColorModal,
  } = useColorGeneratorContext();
  return (
    <section className="color-list" ref={colorGeneratorContainerRef}>
      <GeneratorForm />
      <button className="color-list__save" onClick={openSaveColorModal}>
        Save Color
        <HiSaveAs />
      </button>

      {generatorForm.isLoading ? (
        <Loading />
      ) : (
        <div className="colors">
          {colorList.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                hexColor={color.hex}
                index={index}
              />
            );
          })}
        </div>
      )}
      <SaveColorModal />
    </section>
  );
};

export default ColorList;
