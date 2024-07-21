import { Button, Divider, Flex, Stack } from "@chakra-ui/react"
import { ChangeEvent, useEffect, useRef, useState } from "react"
// import Cleander from "./Cleander";

import { IoCalendarClearOutline, IoPersonOutline } from "react-icons/io5";
import { LuFlag } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { GoInbox } from "react-icons/go";


interface IProps {
    onCloseTask: () => void
}




const AddTask = ({ onCloseTask }: IProps) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const [task, setTask] = useState({
        title: "",
        description: "",
    })

    /* Part Text Area */
    useEffect(() => {
        if (textAreaRef.current) {

            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [task.description]);
    /* Part Text Area */


    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setTask({ ...task, [name]: value })
    }
    return (
        <>
            <Flex flexDirection={"column"} gap={"2"} >
                <div>
                    <input placeholder="Task name" className="w-full border-none text-xl font-semibold focus:outline-none" type="text" name="title" value={task.title} onChange={(e) => changeHandler(e)} />
                </div>
                <div>
                    <textarea placeholder="Description" className="w-full border-none text-lg resize-none focus:outline-none" name="description" rows={1} value={task.description} onChange={(e) => changeHandler(e)} ref={textAreaRef} />
                </div>
                <Stack direction='row' spacing={4} mb={"3"}>
                    <Button leftIcon={<IoCalendarClearOutline />} h={"fit-content"} fontSize={13} py={"1"} variant='outline'>
                        Due Date
                    </Button>
                    <Button leftIcon={<IoPersonOutline />} variant='outline' h={"fit-content"} fontSize={13} py={"1"}>
                        Assignee
                    </Button>
                    <Button leftIcon={<LuFlag />} variant='outline' h={"fit-content"} fontSize={13} py={"1"}>
                        Priorty
                    </Button>
                </Stack>
                <Flex>

                </Flex>

                <Divider />

                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Button rightIcon={<IoIosArrowDown />} leftIcon={< GoInbox />} variant='outline' h={"fit-content"} fontSize={13} py={"1"}>
                        Inbox
                    </Button>

                    <Stack direction='row' spacing={4}>
                        <Button fontSize={13} variant='solid' onClick={() => onCloseTask()} >
                            Cancel
                        </Button>
                        <Button variant='solid' fontSize={13} bg="#dc4c3e" color="#fff"
                            _hover={"#dc4c3e"} opacity={`${task.title ? "1" : "0.5"} `}
                            cursor={`${task.title ? "pointer" : "not-allowed"} `}
                            disabled={!task.title}
                            onClick={() => console.log("RRRR")}>
                            Add Task
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}

export default AddTask
