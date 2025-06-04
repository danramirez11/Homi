import { Text } from "../../theme/styledcomponents";

const Pagos = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* Rectángulo gris como placeholder para nav izquierda */}
      <div style={{ width: '247px', backgroundColor: '#ccc' }} />
      {/* Sección principal con nav superior y contenido */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Rectángulo gris como placeholder para nav superior */}
        <div style={{ height: '60px', backgroundColor: '#ddd' }} />

        {/* Contenido de la vista */}
        <section className="PagosContainer" style={{ padding: '40px' }}>
          <Text variant="sectionTitle">Gestión de pagos</Text>

          {/* Tabs fijos debajo del título */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '36px', marginLeft: '10px' }}>
            {/* Tab activo */}
            <div style={{ color: '#FF6B35', fontWeight: 400, borderBottom: '2px solid #FF6B35', paddingBottom: '2px' }}>
              Apartamentos Campestres
            </div>
            {/* Tab inactivo */}
            <div style={{ color: '#333', fontWeight: 400 }}>
              Ciudad Guabinas
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pagos;
