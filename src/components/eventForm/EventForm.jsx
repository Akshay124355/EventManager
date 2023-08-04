import React, { useState, useEffect } from 'react'
import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, updateEvent } from '../../redux/actions/reducerActions';
import { useLocation } from "react-router-dom";
;

const EventForm = () => {
    const dispatch = useDispatch()
    let result = useSelector((state) => state.eventReducer);

    const location = useLocation();
    const editData = location.state;

    const [formData, setFormData] = useState({
        id: 0,
        eventName: '',
        eventType: 'sports',
        eventStartDate: '',
        eventEndDate: '',
        eventDescription: '',
        eventHandledBy: '',
        eventOrganisation: '',
        totalSubEvents: 0,
    });

    useEffect(() => {
        if (editData) return setFormData(editData);
    }, [editData])

    useEffect(() => {
        if (!editData) {
            formData.id = result.events.length + 1;
            setFormData({ ...formData })
        }
        console.log("result", result);
    }, [result])

    const initialFormData = {
        eventName: '',
        eventType: 'sports',
        eventStartDate: '',
        eventEndDate: '',
        eventDescription: '',
        eventHandledBy: '',
        eventOrganisation: '',
        totalSubEvents: 0,
    };
    const formList = [
        {
            name: 'eventName',
            label: "Event Name",
            type: "text",
            placeholder: "Enter the event",
        },
        {
            name: 'eventType',
            label: "Event Type",
            type: "select",
            options: ['sports', 'music', 'general', 'children', 'school']
        },
        {
            name: 'eventStartDate',
            label: "Event Start Date",
            type: "date",
        },
        {
            name: 'eventEndDate',
            label: "Event End Date",
            type: "date",
        },
        {
            name: 'eventDescription',
            label: "Event Description",
            type: "textarea",
            placeholder: "Event Description",
        },
        {
            name: 'eventHandledBy',
            label: "Event Handled By",
            type: "text",
            placeholder: "Event Handled By",
        },
        {
            name: 'eventOrganisation',
            label: "Event Organisation",
            type: "text",
            placeholder: "Event Organisation",
        },
        {
            name: 'totalSubEvents',
            label: "Total Number of Sub-Events",
            type: "number",
            placeholder: "Total Number of Sub-Events",
        },
    ]

    // onchange Funtion
    const handleInput = (e, fieldName) => {
        setFormData((currData) => ({ ...currData, [fieldName]: e.target.value, }))
    };
    // onSubmit Funtion
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editData) {
            dispatch(addEvent(formData))
        } else {
            dispatch(updateEvent(formData))
        }
        // Clear fields
        setFormData(initialFormData)
    }

    return (
        <div>
            <div class="main-container">
                <div className="sub-container">
                    <form onSubmit={handleSubmit}>
                        {formList.map((element, index) => {
                            return (
                                <div className="form-container">
                                    <div className="form-fields" key={index}>
                                        <label>{element.label}:</label>
                                        {element.type === "textarea" ? (
                                            <textarea cols="30" rows="8"
                                                required
                                                value={formData[element.name]}
                                                onChange={(e) => handleInput(e, element.name)}>
                                            </textarea>
                                        ) : element.type === "select" ? (
                                            <select
                                                name={element.name}
                                                onChange={(e) => handleInput(e, element.name)}>
                                                {element.options.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={element.type}
                                                onChange={(e) => handleInput(e, element.name)}
                                                value={formData[element.name]}
                                                placeholder={element.placeholder}
                                                required
                                            />
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                        <div className="save__btn">
                            <button type="submit" class="savebtn">Save</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default EventForm;
