import axios from "axios"
import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function ModalBebida() {
    const {modal, handleModalClick, receta, cargando} = useBebidas()
    
    const mostrarIngredientes = () => {
      let ingrediente = []

      for(let i=1; i<16; i++){
        if(receta[`strIngredient${i}`]){
          ingrediente.push(
            <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
          )
        }
      }
      return ingrediente
    }
 
  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={receta.strDrinkThumb} alt={`iamgen de bebida ${receta.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones:</h2>
            {receta.strInstructions}
            <h2>Ingredientes y Cantidad</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida
