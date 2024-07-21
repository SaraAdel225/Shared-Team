import { AsyncThunk, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axios.config";
import { AxiosError } from "axios";
import { RootState } from "../store";
import cookies from "../../service/cookies";

import { createStandaloneToast } from '@chakra-ui/react'



const { toast } = createStandaloneToast()


interface User {

    jwt: string;
    user: {
        blocked: boolean;
        confirmed: boolean;
        createdAt: string;
        email: string;
        id: number;
        provider: string;
        updatedAt: string;
        username: string;
    }
    // أضف الحقول الأخرى المتوقعة من API هنا
}

const UserData = {
    jwt: "",
    user: {
        blocked: false,
        confirmed: false,
        createdAt: "",
        email: "",
        id: 0,
        provider: "",
        updatedAt: "",
        username: "",
    }
}

// تعريف واجهات البيانات
interface LoginCredentials {
    identifier: string;
    password: string;
}


interface ErrorType {
    message: string;
    status?: number;
    response: object;
}

export interface AuthState {
    loading: boolean;
    dataApi?: User;
    error?: ErrorType;
}

const initialState: AuthState = {
    loading: false,
    dataApi: UserData || undefined,
    error: undefined,
};


export const userLogin: AsyncThunk<User, LoginCredentials, object> = createAsyncThunk(
    "login/userLogin",
    async (user, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const { data } = await axiosInstance.post("/auth/local", user)
            return data
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue({
                message: error.response?.data,
                status: error.response?.status
            } as ErrorType);

        }
    }
)

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false
                state.dataApi = action.payload

                const date = new Date()
                const EXPIRES_IN_DAYS = 1000 * 60 * 60 * 24 * 3
                date.setTime(date.getTime() + EXPIRES_IN_DAYS)
                const options = { path: "/", expires: date, }
                cookies.set("jwt", action.payload.jwt, options)

                toast({
                    position: "top-right",
                    title: 'Logged Done.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })

            })
            .addMatcher(isRejectedWithValue(userLogin), (state, action) => {
                state.loading = false
                state.error = action.payload as ErrorType

                toast({
                    title: action.payload?.message?.error?.message,
                    description: "We've created your account for you.",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })
    },
})


export const selectLogin = ({ login }: RootState) => login

export default loginSlice.reducer