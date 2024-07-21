'use client'

import {
    IconButton,
    // Avatar,
    Box,
    CloseButton,
    Flex,
    // HStack,
    // VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Stack,
    // Menu,
    // MenuButton,
    // MenuDivider,
    // MenuItem,
    // MenuList,
} from '@chakra-ui/react'

import { BsLayoutSidebar } from "react-icons/bs";

import { IconType } from 'react-icons'
import { IoIosSearch } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { IoTodayOutline, IoCalendarOutline } from "react-icons/io5";
import { BsMenuButtonWide } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { Navigate, Outlet } from 'react-router-dom'
import { NavLink as RouteLink } from 'react-router-dom'
import DialogComp from '../shared/AlertDialog';
import AddTask from '../components/AddTask';
import ResizablePanel from '../components/ResizablePanel';
import { useMediaQuery } from 'react-responsive';



interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

interface NavItemProps extends FlexProps {
    icon: IconType
    path: string
    children: React.ReactNode
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

interface SidebarProps extends BoxProps {
    onClose: () => void
    onOpenTask: () => void
    onOpenSearch: () => void
}

const LinkItems: Array<LinkItemProps> = [
    // { name: 'Search', icon: IoIosSearch ,path: "/" },
    { name: 'Inbox', icon: GoInbox, path: "/inbox" },
    { name: 'Today', icon: IoTodayOutline, path: "/" },
    { name: 'Upcoming', icon: IoCalendarOutline, path: "/upcoming" },
    { name: 'Filters & Labels', icon: BsMenuButtonWide, path: "/filters-labels" },
]


const SidebarContent = ({ onClose, onOpenTask, onOpenSearch, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <IconButton
                    onClick={onClose}
                    variant="outline"
                    _hover={{ bg: "transparent" }}
                    border="none"
                    display={{ base: 'flex', md: 'none' }}
                    aria-label="open menu"
                    icon={<BsLayoutSidebar />}
                />

                {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
            </Flex>
            <Box
                style={{ textDecoration: 'none' }}
                _focus={{ bg: "#ffefe5" }}
                _activeLink={{ bg: "#ffefe5" }}
                onClick={onOpenTask}
            >
                <Flex
                    align="center"
                    p="2"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    color="#dc4c3e"
                    fontWeight={"600"}
                    _hover={{
                        bg: '#f2efed',
                    }}
                >

                    <TiPlus
                        style={
                            {
                                background: "#dc4c3e",
                                color: "#fff",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",

                                marginRight: " .8rem",
                            }
                        }
                        fontSize="16px"
                    />

                    Add Task
                </Flex>
            </Box>
            <Box
                style={{ textDecoration: 'none' }}
                _focus={{ bg: "#ffefe5" }}
                _activeLink={{ color: "#dc4c3e", bg: "#ffefe5" }}
                onClick={onOpenSearch}
            >
                <Flex
                    align="center"
                    p="2"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: '#f2efed',
                    }}
                >
                    <IoIosSearch
                        style={
                            {
                                marginRight: " 1rem",
                            }
                        }
                        fontSize="16"
                    />

                    Search
                </Flex>
            </Box>
            {LinkItems.map((link) => (
                <NavItem key={link.name} path={link.path} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as={RouteLink}

            to={path}
            style={{ textDecoration: 'none' }}
            _focus={{ bg: "#ffefe5" }}
            _activeLink={{ color: "#dc4c3e", bg: "#ffefe5" }}
        >
            <Flex
                align="center"
                p="2"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: '#f2efed',
                    // color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            // color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen }: MobileProps) => {
    return (
        <Stack className='relative w-fit h-fit'>
            <IconButton
                onClick={onOpen}
                variant="outline"
                _hover={{ bg: "transparent" }}
                border="none"

                aria-label="open menu"
                icon={<BsLayoutSidebar />}
            />
            <span className='absolute w-2 h-2 rounded-full right-2 top-2 bg-[#dc4c3e]'></span>
        </Stack>

    )
}


interface SidebarLayoutProps {
    isAuthenticated: string | undefined;
}

const SidebarLayout = ({ isAuthenticated }: SidebarLayoutProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenTask, onOpen: onOpenTask, onClose: onCloseTask } = useDisclosure()
    const { isOpen: isOpenSearch, onOpen: onOpenSearch, onClose: onCloseSearch } = useDisclosure()
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    if (!isAuthenticated) return <Navigate to="/login" replace />


    return (
        <>
            <Box minH="100vh">
                {isSmallScreen ?
                    <>
                        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} onOpenTask={onOpenTask} onOpenSearch={onOpenSearch} />
                        <Drawer
                            isOpen={isOpen}
                            placement="left"
                            onClose={onClose}
                            returnFocusOnClose={false}
                            onOverlayClick={onClose}
                            size="sm">
                            <DrawerContent>
                                <SidebarContent onClose={onClose} onOpenTask={onOpenTask} onOpenSearch={onOpenSearch} />
                            </DrawerContent>
                        </Drawer>
                        {/* mobilenav */}
                        <MobileNav onOpen={onOpen} />
                        <Box p="4">
                            <Outlet />

                        </Box>

                    </> : <ResizablePanel leftPanel={
                        <>
                            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} onOpenTask={onOpenTask} onOpenSearch={onOpenSearch} />
                            <Drawer
                                isOpen={isOpen}
                                placement="left"
                                onClose={onClose}
                                returnFocusOnClose={false}
                                onOverlayClick={onClose}
                                size="sm">
                                <DrawerContent>
                                    <SidebarContent onClose={onClose} onOpenTask={onOpenTask} onOpenSearch={onOpenSearch} />
                                </DrawerContent>
                            </Drawer>
                            {/* mobilenav */}
                            <MobileNav onOpen={onOpen} />
                        </>
                    }
                        rightPanel={
                            <>
                                <Box p="4">
                                    <Outlet />
                                </Box>
                            </>
                        }
                    >
                    </ResizablePanel>}
            </Box>


            {/* هنا اكتبي الكود اللي هيظهر جوا المودل اللي بتظهر لما تضغطي ع Add Task */}
            <DialogComp isOpen={isOpenTask} onClose={onCloseTask}     >
                <AddTask onCloseTask={onCloseTask} />
            </DialogComp>
            {/* هنا اكتبي الكود اللي هيظهر جوا المودل اللي بتظهر لما تضغطي ع Search */}
            <DialogComp isOpen={isOpenSearch} onClose={onCloseSearch}     >
                <h3>Hello Search</h3>
            </DialogComp>
        </>
    )
}

export default SidebarLayout





















{/* <Flex
ml={{ base: 0, md: 60 }}
px={{ base: 4, md: 4 }}
height="20"
alignItems="center"
bg={useColorModeValue('white', 'gray.900')}
borderBottomWidth="1px"
borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
justifyContent={{ base: 'space-between', md: 'flex-end' }}
{...rest}>


<Text
    display={{ base: 'flex', md: 'none' }}
    fontSize="2xl"
    fontFamily="monospace"
    fontWeight="bold">
    Logo
</Text>

<HStack spacing={{ base: '0', md: '6' }}>
    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
    <Flex alignItems={'center'}>
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">Justina Clark</Text>
                        <Text fontSize="xs" color="gray.600">
                            Admin
                        </Text>
                    </VStack>
                    <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                    </Box>
                </HStack>
            </MenuButton>
            <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
</HStack>
</Flex> */}