'use client'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import {
    FormHelperText,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { BiHide } from "react-icons/bi";
// 
// import { Navigate } from 'react-router-dom';



export default function SimpleCard() {

    const [showPassword, setShowPassword] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPasword, setIsPasword] = useState(false)
    const [user, setUser] = useState({
        identifier: "",
        password: "",
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const onSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (!user.identifier && !user.password) {
            setIsEmail(true)
            setIsPasword(true)

            
        }
        if (!user.identifier) {
            setIsEmail(true)

            return
        }
        if (!user.password) {
            setIsPasword(true)
            return
        }

        setIsEmail(false)
        setIsPasword(false)
        return
    }

    // if (isAuthenticated) return <Navigate to="/" replace />

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}>
            <Stack as={"form"} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Register</Heading>
                    {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text> */}
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="identifier" value={user.identifier} onChange={(e) => onChangeHandler(e)} isInvalid={isEmail}
                                errorBorderColor='red.300' required />
                            {isEmail ? <FormHelperText color={"red.500"}>
                                Email is required
                            </FormHelperText> : null}
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} name="password" onChange={(e) => onChangeHandler(e)} isInvalid={isPasword}

                                    errorBorderColor='red.300' value={user.password} required />

                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        p="0"
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <GrView /> : <BiHide />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {isPasword ? <FormHelperText color={"red.500"}>
                                Password is required
                            </FormHelperText> : null}
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'flex-end'}>
                                <Text color={'#666'} textAlign={"right"} fontSize="sm" textDecorationLine={"underLine"} >Forgot password?</Text>
                            </Stack>
                            <Button
                                onClick={(e) => onSubmit(e)}
                                type={"submit"}
                                bg={'#dc4c3e'}
                                color={'white'}
                                // isLoading={loading}
                                _hover={{
                                    bg: '#b22c1f',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                        <Text color={"#666"} textAlign={"center"} fontSize="sm" textDecorationLine={"underLine"}>Don’t have an account? Sign up</Text>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}