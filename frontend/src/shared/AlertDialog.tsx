import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { ReactNode, useRef } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode

}

const DialogComp = ({ isOpen, onClose , children}: IProps) => {
  const cancelRef = useRef(null)

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose} 
        leastDestructiveRef={cancelRef}
        >
        <AlertDialogOverlay>
          <AlertDialogContent>


            <AlertDialogBody>
              {children}
            </AlertDialogBody>

            
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DialogComp
