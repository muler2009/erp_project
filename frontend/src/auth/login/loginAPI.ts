import { erpAPISlice } from "../../api/apiSlice";
import { API_TAGS } from "../../config/config";
import { LoginRequiredData, AuthResponse } from "../../iam/models/login.model";


const loginAPI = erpAPISlice.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation<AuthResponse, LoginRequiredData>({
            query: (loginData) => ({
                url: `account/login/`,
                method: "POST",
                body: loginData
            }),
            invalidatesTags: [API_TAGS.USER]
        }) 
    })
})


export const {
    useUserLoginMutation
} = loginAPI