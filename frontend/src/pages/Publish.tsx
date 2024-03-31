import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const Publish=()=>{
    const [title,SetTitle]=useState("")
    const [content,SetContent]=useState("")
    const navigate=useNavigate()
    return <div>
        <Appbar/>
        <div className="flex justify-center w-full pt-10">
        <div className="max-w-screen-md w-full">
        <label className="block mb-2 text-xl font-extrabold text-gray-900 dark:text-white">Title</label>
        <input onChange={(e)=>{
            SetTitle(e.target.value)
        }} type="text"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Title"></input>
        <div className="pt-4">
        <label className="block mb-2 text-xl font-extrabold text-gray-900 dark:text-white">Blog Content</label>
        <input onChange={(e)=>{
            SetContent(e.target.value)
        }} type="text"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-3 pl-3 py-20  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Content ......"></input>
         </div>
        <div className="pt-4"><button onClick={async()=>{
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            navigate(`/blog/${response.data.id}`)
        }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2   focus:outline-none ">Publish Blog</button></div>
        </div>
        </div>
    </div>
}



