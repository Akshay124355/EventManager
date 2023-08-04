import React, { useState } from 'react'
import "./event.scss"
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { deleteEvent, filterEvents } from '../../redux/actions/reducerActions';
import { useNavigate } from "react-router-dom";

const EventData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectBox, setSelectBox] = useState("All");

    let result = useSelector((state) => state.eventReducer);
    const eventType = ['All', 'sports', 'music', 'general', 'children', 'school']

    const handleSelect = (data) => {
        setSelectBox(data.target.value)
        dispatch(filterEvents(data.target.value));
    }
    const editEvent = (data) => {
        navigate("/eventform", { state: data })
    }
    const delEvent = (id) => {
        dispatch(deleteEvent(id));
    }
    return (
        <div className='event-data-wrapper'>
            <div className="data-container">
                <div className="select-container">
                    <h4>Filter Events :</h4>
                    <select
                        className='select-box'
                        onChange={(e) => handleSelect(e)}>
                        {eventType.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Event Name</th>
                        <th>Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Handle By</th>
                        <th>Organisation</th>
                        <th>Description</th>
                        <th>Total Sub Events</th>
                        <th>Actions</th>
                    </tr>
                    {selectBox == "All" ?
                        (result.events.map((currData, index) => {
                            return (
                                <tr key={index}>
                                    <td>{currData.id}</td>
                                    <td>{currData.eventName}</td>
                                    <td>{currData.eventType}</td>
                                    <td>{currData.eventStartDate}</td>
                                    <td>{currData.eventEndDate}</td>
                                    <td>{currData.eventHandledBy}</td>
                                    <td>{currData.eventOrganisation}</td>
                                    <td>{currData.eventDescription}</td>
                                    <td>{currData.totalSubEvents}</td>
                                    <td>
                                        <BiEdit className='edit-icons'
                                            onClick={() => editEvent(currData)} />
                                        <RiDeleteBin6Line className='delete-icons'
                                            onClick={() => delEvent(currData.id)} />
                                    </td>
                                </tr>
                            )
                        }))
                        :
                        (result.filteredEvents?.map((currData, index) => {
                            return (
                                <tr key={index}>
                                    <td>{currData.id}</td>
                                    <td>{currData.eventName}</td>
                                    <td>{currData.eventType}</td>
                                    <td>{currData.eventStartDate}</td>
                                    <td>{currData.eventEndDate}</td>
                                    <td>{currData.eventHandledBy}</td>
                                    <td>{currData.eventOrganisation}</td>
                                    <td>{currData.eventDescription}</td>
                                    <td>{currData.totalSubEvents}</td>
                                    <td>
                                        <BiEdit className='edit-icons'
                                            onClick={() => editEvent(currData)} />
                                        <RiDeleteBin6Line className='delete-icons'
                                            onClick={() => delEvent(currData.id)} />
                                    </td>
                                </tr>
                            )
                        }))}
                </table>
            </div>
        </div>
    )
}

export default EventData