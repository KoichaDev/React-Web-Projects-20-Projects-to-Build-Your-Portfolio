import './MenuOverlay.scss';

function MenuOverlay({ isOpen }) {
  const initialClass = 'navigation-nation-overlay overlay-slide-left';
  const overlayClass = isOpen ? `${initialClass} overlay-active` : initialClass;

  return (
    <div className={overlayClass}>
      <nav>
        <ul>
          <li className='slide-out-1' id='nav-1'>
            <a href='#home'>Home</a>
          </li>
          <li className='slide-out-2' id='nav-2'>
            <a href='#about'>About</a>
          </li>
          <li className='slide-out-3' id='nav-3'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='slide-out-4' id='nav-4'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='slide-out-5' id='nav-5'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuOverlay;