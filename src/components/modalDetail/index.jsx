import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../../context/modalContext";
const ModalDetailComponent = (props) =>{
    const {saveItem} = useContext(ModalContext)
    const conditionModal = saveItem !== undefined

    return(
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                {conditionModal && <Modal.Title id="contained-modal-title-vcenter">
                {saveItem.name.toUpperCase()}
                </Modal.Title>}     
            </Modal.Header>
            {conditionModal && 
                        <Modal.Body className="m-3">
                        <div className="row mt-3">
                            <div className="col-xs-2">
                                <img src={saveItem.image.url} alt={saveItem.name} width="150rem" />
                            </div>
                            <div className="col">
                                <h6 className="text-center p-1 mr-1" style={{color:"white", backgroundColor:"red"}}>{saveItem.biography.alignment.toUpperCase()}</h6>
                                <ul>
                                    <li>Nombre: {saveItem.biography.["full-name"]}</li>
                                    <li>Color de ojos: {saveItem.appearance.["eye-color"]}</li>
                                    <li>Color de pelo: {saveItem.appearance.["hair-color"]}</li>
                                    <li>Raza: {saveItem.appearance.race}</li>
                                    <li>Peso: {saveItem.appearance.weight[1]}</li>
                                    <li>Altura: {saveItem.appearance.height[1]}</li>
                                    <li>Lugar de Trabajo: {saveItem.work.base}</li>
                                </ul>
                            </div>
        
                        </div>
                    </Modal.Body>}

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDetailComponent;