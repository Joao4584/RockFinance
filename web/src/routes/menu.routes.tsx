// * Modules * //
import { Routes, Route, Link, Outlet } from "react-router-dom";

// * Exports * //
import { CalendarPage } from "../Pages/Calendar";
import { HomePage } from "../Pages/Home";
import { ChartPage } from "../Pages/Chart";
import { OptionsPage } from "../Pages/Options";
import { InfoPage } from "../Pages/Info";

export function MenuRoutes(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
    );
}
