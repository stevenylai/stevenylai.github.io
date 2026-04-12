import { Steps, Dialog, Portal } from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <Dialog.Root
      open={isOpen}
      initialFocusEl={() => cancelRef.current}
      role='alertdialog'
      onOpenChange={e => {
        if (!e.open) {
          onClose();
        }
      }}>
      <Portal>

        <Dialog.Backdrop>
          <Dialog.Positioner>
            <Dialog.Content py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
              <Dialog.Header fontSize="lg" fontWeight="bold">
                {isSuccess ? 'All good!' : 'Oops!'}
              </Dialog.Header>
              <Dialog.Body>{message}</Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Backdrop>

      </Portal>
    </Dialog.Root>
  );
}

export default Alert;