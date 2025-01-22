"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el hook para navegación
import { FaPlus } from "react-icons/fa";
import "../../Css/general.css"; // Importa el archivo de estilos

const CrudTable = () => {
  const [data, setData] = useState([
    {
      CodigoComision: "001",
      Tipo: "Comisión Estándar",
      MontoBase: "$100",
      TransaccionesBase: "10",
      ManejaSegmenos: "Sí",
      Estado: "Activo",
      FechaCreacion: "01-01-2024",
    },
    {
      CodigoComision: "002",
      Tipo: "Comisión Premium",
      MontoBase: "$150",
      TransaccionesBase: "15",
      ManejaSegmenos: "Sí",
      Estado: "Activo",
      FechaCreacion: "02-01-2024",
    },
  ]);

  const router = useRouter(); // Inicializa el router para redirigir

  const handleRowClick = (item) => {
    router.push(`/GtwComision/read/${item.CodigoComision}`);
  };

  const handleCreate = () => {
    router.push('/GtwComision/create');
  };

  return (
    <div className="main-container">
      <div className="table-header">
        <div className="header-content">
          <h1 className="table-title">Comisiones Registradas</h1>
        </div>
        <div className="table-summary">
          <div className="summary-item">
            <span className="summary-label">Total Comisiones:</span>
            <span className="summary-value">{data.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Comisiones Activas:</span>
            <span className="summary-value">
              {data.filter(item => item.Estado === "Activo").length}
            </span>
          </div>
        </div>
      </div>

      <div className="table-responsive">
      <button className="create-button" onClick={handleCreate}>
            <FaPlus className="button-icon" />
            <span> Nueva</span>
          </button>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Tipo de Comisión</th>
              <th>Monto Base</th>
              <th>Transacciones Base</th>
              <th>Maneja Segmentos</th>
              <th>Estado</th>
              <th>Fecha Creación</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={item.CodigoComision}
                className={`table-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`}
                onClick={() => handleRowClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <td className="code-cell">{item.CodigoComision}</td>
                <td className="type-cell">{item.Tipo}</td>
                <td className="amount-cell">{item.MontoBase}</td>
                <td className="transactions-cell">{item.TransaccionesBase}</td>
                <td className="segments-cell">
                  <span className={`badge ${item.ManejaSegmenos === "Sí" ? "badge-success" : "badge-neutral"}`}>
                    {item.ManejaSegmenos}
                  </span>
                </td>
                <td className="status-cell">
                  <span className={`status-badge ${item.Estado.toLowerCase()}`}>
                    {item.Estado}
                  </span>
                </td>
                <td className="date-cell">{item.FechaCreacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="pagination">
          <button className="pagination-button">&lt;</button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <button className="pagination-button">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
