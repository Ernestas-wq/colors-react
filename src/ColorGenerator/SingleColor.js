import React, { useState, useRef, useEffect } from 'react';
import { FaCopy, FaRegCopy } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [copyMessage, setCopyMessage] = useState('');
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);
  const copyMessageRef = useRef(null);
  const successIconRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccessIcon(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [showSuccessIcon]);

  useEffect(() => {
    showSuccessIcon
      ? (successIconRef.current.style.opacity = '1')
      : (successIconRef.current.style.opacity = '0');
  }, [showSuccessIcon]);

  const handleMouseEnter = msg => {
    setCopyMessage(msg);
    copyMessageRef.current.style.display = 'flex';
  };
  const handleMouseLeave = () => {
    setCopyMessage('');
    copyMessageRef.current.style.display = 'none';
  };
  const copyHex = () => {
    setShowSuccessIcon(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  };

  const copyRGB = () => {
    setShowSuccessIcon(true);
    navigator.clipboard.writeText(`rgba(${rgb.join(', ')}, 1)`);
  };

  return (
    <article
      className={`colors__item ${index > 10 && 'colors__item--light'}`}
      style={{
        backgroundColor: `#${hexColor}`,
      }}
    >
      <p className="colors__success" ref={successIconRef}>
        <BsCheckCircle />
      </p>
      <div className="colors__copy">
        <p ref={copyMessageRef}>{copyMessage}</p>
        <button
          className={`${index > 10 && 'colors__item--light'}`}
          onMouseEnter={() => handleMouseEnter('copy hex')}
          onMouseLeave={handleMouseLeave}
          onClick={copyHex}
        >
          <FaCopy />
        </button>
        <button
          className={`${index > 10 && 'colors__item--light'}`}
          onMouseEnter={() => handleMouseEnter('copy rgba')}
          onMouseLeave={handleMouseLeave}
          onClick={copyRGB}
        >
          <FaRegCopy />
        </button>
      </div>
      <p className="colors__hex">#{hexColor}</p>
      <p className="colors__percent">{weight}%</p>
    </article>
  );
};

export default SingleColor;
