import React, { useState } from "react";
import "./Header.css";
import { 
  BiChevronDown, 
  BiRightArrow, 
  BiLeftArrow, 
  BiHome, 
  BiUser, 
  BiCalendar, 
  BiBook, 
  BiCreditCard, 
  BiReceipt, 
  BiMoney, 
  BiFile, 
  BiCog, 
  BiInfoCircle 
} from "react-icons/bi";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); // Controla si la barra lateral está expandida o no
  const [activeMenu, setActiveMenu] = useState(null); // Controla qué submenú está abierto

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const toggleSubmenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu)); // Alterna el submenú activo
  };

  const renderSubmenu = (menuItems) => {
    return (
      <div className="submenu">
        {menuItems.map((item, index) =>
          item === "---" ? (
            <div key={index} className="submenu-separator"></div>
          ) : (
            <div key={index} className="submenu-item">{item}</div>
          )
        )}
      </div>
    );
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`} id="sidebar">
      {/* Toggle Button */}
      <div className="toggle-menu" id="toggle-button" onClick={toggleSidebar}>
        {isActive ? <BiLeftArrow className="bxs-left-arrow" /> : <BiRightArrow className="bxs-right-arrow" />}
      </div>

      {/* Logo Section */}
      <div className="logo">
        <BiBook />
        <span>ERP ESCOLAR</span>
      </div>

      {/* Menu Items */}
      <div className="menu">
        {/* INICIO */}
        <div className="menu-item" onClick={() => toggleSubmenu("inicio")} data-tooltip="Inicio">
          <BiHome />
          <span>Inicio</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "inicio" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "inicio" && renderSubmenu(["Pantalla Principal"])}

        {/* GESTIÓN */}
        <div className="menu-item" onClick={() => toggleSubmenu("gestion")} data-tooltip="Gestión">
          <BiUser />
          <span>Gestión</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "gestion" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "gestion" &&
          renderSubmenu([
            "Administrar Estudiantes",
            "Administrar Representantes",
            "Administrar Docentes",
            "Administrar Tutores",
            "---",
            "Proceso de Matriculación"
          ])}

        {/* ASESORÍA */}
        <div className="menu-item" onClick={() => toggleSubmenu("asesoria")} data-tooltip="Asesoría">
          <BiUser />
          <span>Asesoría</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "asesoria" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "asesoria" && renderSubmenu(["Administrar Asesores"])}

        {/* PLANIFICACIÓN */}
        <div className="menu-item" onClick={() => toggleSubmenu("planificacion")} data-tooltip="Planificación">
          <BiCalendar />
          <span>Planificación</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "planificacion" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "planificacion" &&
          renderSubmenu([
            "Administrar Turnos",
            "Administrar Cursos",
            "Administrar Detalle Cursos",
            "Administrar Paralelos",
            "Administrar Cursos-Paralelos",
            "---",
            "Administrar Materias",
            "Administrar Materias por Curso",
            "---",
            "Administrar Asignación de Materias",
            "---",
            "Administrar Días",
            "Administrar Horas",
            "Administrar Horarios"
          ])}

        {/* FACTURACIÓN */}
        <div className="menu-item" onClick={() => toggleSubmenu("facturacion")} data-tooltip="Facturación">
          <BiReceipt />
          <span>Facturación</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "facturacion" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "facturacion" && renderSubmenu(["Factura", "Verificar Factura"])}

        {/* OPERACIONES */}
        <div className="menu-item" onClick={() => toggleSubmenu("operaciones")} data-tooltip="Operaciones">
          <BiMoney />
          <span>Operaciones</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "operaciones" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "operaciones" &&
          renderSubmenu(["Proveedor", "Productos", "Compra de Productos"])}

        {/* CAJA */}
        <div className="menu-item" onClick={() => toggleSubmenu("caja")} data-tooltip="Caja">
          <BiCreditCard />
          <span>Caja</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "caja" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "caja" && renderSubmenu(["Apertura", "Generar Cierre de Caja", "Verificar Cierre de Caja"])}

        {/* USUARIOS */}
        <div className="menu-item" onClick={() => toggleSubmenu("usuarios")} data-tooltip="Usuarios">
          <BiUser />
          <span>Usuarios</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "usuarios" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "usuarios" &&
          renderSubmenu([
            "Administrar Usuarios",
            "Cambiar Usuario",
            "Cambiar Contraseña",
            "---",
            "Cerrar Sesión"
          ])}

        {/* CONFIGURACIÓN */}
        <div className="menu-item" onClick={() => toggleSubmenu("configuracion")} data-tooltip="Configuración">
          <BiCog />
          <span>Configuración</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "configuracion" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "configuracion" &&
          renderSubmenu(["Datos Generales (Empresa)", "Cambiar ícono", "Cambiar Fondo de Inicio"])}

        {/* SISTEMA */}
        <div className="menu-item" onClick={() => toggleSubmenu("sistema")} data-tooltip="Sistema">
          <BiInfoCircle />
          <span>Sistema</span>
          <BiChevronDown className={`submenu-icon ${activeMenu === "sistema" ? "rotate" : ""}`} />
        </div>
        {activeMenu === "sistema" && renderSubmenu(["Sobre SYSTEM CONTROL"])}
      </div>
    </div>
  );
};

export default Sidebar;
