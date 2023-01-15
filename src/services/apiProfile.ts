import { IProfile } from "../types/IProfile";
import { api } from "./api"

const apiProfile = api.injectEndpoints({
    endpoints: (build) => ({
        updateImgProfile: build.mutation<IProfile, any>({
            query: ({ id, img }) => ({
                url: `/profile/${id}`,
                method: 'PATCH',
                body: img
            })
        }),
        updateInformationProfile: build.mutation<IProfile, { id: string, username: string, phone: string, fullName: string }>({
            query: (profileInfo) => ({
                url: `/profile/${profileInfo.id}`,
                method: 'PUT',
                body: {
                    username: profileInfo.username,
                    phone: profileInfo.phone,
                    fullName: profileInfo.fullName
                }
            })
        })
    })
})

export const { useUpdateImgProfileMutation, useUpdateInformationProfileMutation } = apiProfile;