import { Col, Card, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function Bebida({bebida}) {
    const {handleModalClick, handleBebidaIdClick} = useBebidas()
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card>
        <Card.Img 
            variant="top"
            src={bebida.strDrinkThumb}
        />
        <Card.Body>
            <Card.Title>{bebida.strDrink}</Card.Title>
            <Button 
                variant="warning" 
                className="w-100 mt-3 text-uppercase"
                onClick={() => {
                    handleModalClick()
                    handleBebidaIdClick(bebida.idDrink)
                }}
            >
                Ver Receta
            </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida
