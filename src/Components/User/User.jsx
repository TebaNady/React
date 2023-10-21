import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img from '../../Images/avatar.png'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

export default function User() {

    const [allMsg, setAllMsg] = useState([])
    const [userID, setUserID] = useState("")
    const [userName, setUserName] = useState("")
    function getUserID() {
        let decoded = jwtDecode(localStorage.getItem("userToken"))
        setUserID(decoded.id)
        setUserName(decoded.name)
    }
    async function getMsg() {
        let { data } = await axios.get(`https://sara7aiti.onrender.com/api/v1/message`, {
            headers: {
                token: localStorage.getItem("userToken")
            }

        })
        setAllMsg(data.allMessages)
    }

    useEffect(() => {
        getMsg()
        getUserID()
    }, [])

    return (
        <>
            <div>
                <div className="container text-center py-5 my-5 text-center">
                    <div className="card pt-5">
                        <a href=''>
                            <img src={img} className="avatar" alt="Avatar" />
                        </a>
                        <h3 className="py-2">Hi, {userName}</h3>
                        <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark rounded-pill share"><i className="fa fa-share-alt" />  Share Profile</Link>
                    </div>
                </div>

                <div className="container text-center my-5 text-center">
                    <div className="row">
                        {allMsg.length == 0 ? <div className="col-md-12">
                            <div className="card py-5">
                                <p>You don't have any messages... </p>
                            </div>
                        </div>
                            :
                            ""}

                        {allMsg.map((ele) => <div key={ele._id} className="col-md-12 mb-3">
                            <div className="card py-5">
                                <p>{ele.messageContent}</p>
                                <div className='d-flex justify-content-end'>
                                <button className='btn btn-danger rounded-pill me-3' ><i className="fa fa-trash" /> Delete message</button>
                            </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Copy the URL to send message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            http://localhost:3000/messages/{userID}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
