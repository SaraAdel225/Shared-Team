import "./Today.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, useDisclosure, Box, Fade } from "@chakra-ui/react";
import ImgToDay from "../../image/9b83bf5d1895df53ed06506fd3cd381c.png"

const Today = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <div className="today">
            <div className="HeaderContent">
                <h1>Today</h1>
                {!isOpen && (
                    <div>
                        <button onClick={onToggle} className="task">
                            <FontAwesomeIcon className="iconPlus" icon={faPlus} />
                            <p className="addTask">Add task</p>
                        </button>
                        <div className="ImageDiv">
                            <div>
                                <img src={ImgToDay} className="max-w-full" />
                                <h5>You're all done for the week, user</h5>
                                <p>Enjoy the rest of your day and don't forget to share your #TodoistZero awesomeness</p>
                            </div>
                        </div>
                    </div>
                )}
                <Fade in={isOpen}>
                    <Box
                        className="boxTask"
                    >
                        
                        <input type="text" className="TaskName" placeholder="Task name"/>
                        <input type="text" placeholder="Description"/>
                        <Button onClick={onToggle} mt={4}>
                            Close
                        </Button>
                    </Box>
                </Fade>
            </div>
        </div>
    );
};

export default Today;
