import axios from "axios";
import {FormProfileData} from "../layout/content/profile/ui/profile/profileSetDataForm/ProfileSetDataForm";


const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers:     {
        "API-KEY": "845a7512-7ea3-4d78-b9e5-2066f67a35cc"
    }
})

export const usersApi = {
    getUsers (currentPage: number, pageSize: number) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    follow(userId: number) {
        return instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile (userId: number) {
        console.warn("Is not actuale this method, use please object profileApi")
        return profileApi.getProfile(userId)
    }
}


export const profileApi = {
    getProfile (userId: number) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instanse.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instanse.put('/profile/status', {status})
    },
    updatePhoto(photoFile: any) {
        debugger
        const formData = new FormData()
        formData.append('image', photoFile)
        return instanse.put('/profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    updateProfile(profile: FormProfileData) {
      return instanse.put('/profile', profile)
    }
}

export const authApi = {
    getAuthData () {
        return instanse.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instanse.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instanse.delete('auth/login')
    }
}

export const securityApi = {
    getCaptchaURL () {
        return instanse.get('security/get-captcha-url')
    },
}