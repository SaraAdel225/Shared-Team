import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { ReactNode, useRef } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode

}

const DialogComp = ({ isOpen, onClose, title , children}: IProps) => {
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
              {children}
            </AlertDialogBody>

            <AlertDialogFooter>
              {/* <Button onClick={onClose}>
                {cancel}
              </Button>
              <Button colorScheme='red' onClick={onOkHandler} ml={3}>
                {Ok}
              </Button> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DialogComp
