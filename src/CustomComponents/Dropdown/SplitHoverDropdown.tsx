import "./SplotHoverDropdown.css"
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type DropdownItem = {
  label: string;
  link: string;
};

type SplitHoverDropdownProps = {
  title: string;
  customClassName: string; // Make this required since we always pass it
  items: DropdownItem[];
  link?: string; // Enlace principal del botón izquierdo
  onItemClick?: () => void
  isScrolled?: boolean;
};

export const SplitHoverDropdown: React.FC<SplitHoverDropdownProps> = ({
  title,
  items,
  customClassName,
  link = '#',
  onItemClick,
  isScrolled,
}) => {
  const [show, setShow] = useState(false);
  let timer: any;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setShow(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => setShow(false), 50);
  };
  const handleToggleClick = () => setShow(!show);

  const navigate = useNavigate();

  return (
    <Dropdown
      show={show}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onToggle={() => { }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Botón principal con navegación directa */}
        <a
          role='button'
          onClick={link === "acceder" ? () => null : () => {
            navigate(link);
            if (onItemClick) onItemClick();
          }}
          className={`py-2 me-4 me-md-2 ${customClassName} mb-0`}
          style={isScrolled ? {
            textDecoration: 'none',
            display: 'block',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, .3))',
            transition: 'color 0.3s ease', // Add transition for smooth color change
          } : 
        {
            textDecoration: 'none',
            display: 'block',
            filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))',
            transition: 'color 0.3s ease', // Add transition for smooth color change
          }
        }
        >
          {title}
        </a>

        {/* Botón toggle para abrir el menú */}
        <Dropdown.Toggle
          className={`me-2 p-0 d-flex align-items-center justify-content-center ${customClassName}`}
          split
          variant="light"
          onClick={handleToggleClick}
          style={{
            background: 'transparent',
            border: 'none',
            filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 1))',
            transition: 'color 0.3s ease', // Add transition for smooth color change
          }}
        />
      </div>

      <Dropdown.Menu>
        {items.map((item, idx) => (
          <Dropdown.Item key={idx} onClick={() => {
            navigate(item.link);
            if (onItemClick) onItemClick();
          }}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};