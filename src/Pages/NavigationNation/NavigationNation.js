import { useState, useEffect } from 'react';

import MenuOverlay from './Components/MenuOverlay/MenuOverlay';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import MainSection from './Components/MainSections/MainSections';

function NavigationNation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!isOpen);
    return setIsOpen(!isOpen);
  }, []);

  // // Toggling the className for the specific element
  // function toggleClassName(element, className) {
  //   element.classList.toggle(className);
  // }

  // // Return true or false if the className exist
  // function containsClassName(element, className) {
  //   return element.classList.contains(className);
  // }

  // // Use the element to exchange class Name
  // function replaceClassNameAnimation(element, classNameOne, classNameTwo) {
  //   return element.classList.replace(classNameOne, classNameTwo);
  // }

  return (
    <>
      <MenuOverlay isOpen={isOpen} />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainSection />
    </>
  );
}

export default NavigationNation;
