import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function MuiModal({}) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto flat onClick={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        scroll
        fullScreen
     
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
               
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button flat auto color="error" onClick={() => setVisible(false)}>
            set
          </Button>
          <Button onClick={() => setVisible(false)}>Skill</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
