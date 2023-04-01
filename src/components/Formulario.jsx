import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import useCategorias from "../hooks/useCategorias";

function Formulario() {
  const { categorias } = useCategorias();
  const { consultarBebidas } = useBebidas();

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarBebidas(busqueda);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert variant="danger" className="text-center">
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Tequila, Vodkat, etc"
              value={busqueda.nombre}
              onChange={(e) => {
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) => {
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option>- Seleccione Categoria -</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end mt-3">
        <Col md={3}>
          <Button
            variant="danger"
            type="submit"
            className="text-uppercase w-100"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formulario;
