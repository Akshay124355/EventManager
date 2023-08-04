import { BrowserRouter as MainRoute, Route, Routes } from "react-router-dom";
import EventForm from "../components/eventForm/EventForm";
import EventData from "../components/eventData/EventData";
import Home from "../components/home/Home";

export const Router = () => {
    return (
        <MainRoute>
            <Routes>
                <Route element={<Home />} path="/">
                    <Route element={<EventForm />} path="/eventform"/>
                    <Route element={<EventData />} path="/eventdata"/>
                </Route>
            </Routes>
        </MainRoute>
    )
}