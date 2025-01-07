import {Route, Routes} from "react-router-dom";
import Shell from "../../../components/shell/shell";
import UncletAdminHome from "./unclet-admin-home";
import UncletAdminBookings from "./unclet-admin-bookings";
import UncletAdminBooking from "./unclet-admin-booking";
import UncletAdminReviews from "./unclet-admin-reviews";
import UncletAdminReview from "./unclet-admin-review";
import UncletAdminNotFound from "./unclet-admin-not-found";
import Protected from "../../../components/protected/protected";
import {SharedAccountPermissionPermission} from "../../../enums/shared/permission";
import UncletAdminLogin from "./unclet-admin-login";

const JublawomaAdmin = () => {

  return (
      <Shell title="Jubla Woma Admin" side={true} logo="/assets/unclet/images/logos/logo.png"
             icon="/assets/unclet/images/logos/favicon.ico" links={[
        {name: "Home", to: "/", primary: true},
        {name: "Buchungen", to: "/booking", primary: true},
        {name: "Bewertungen", to: "/review", primary: true},
      ]}>
        <Routes>
          <Route path="/login" element={<UncletAdminLogin/>}/>
          <Route path="/*" element={<UncletAdminNotFound/>}/>
          <Route element={<Protected permissions={[SharedAccountPermissionPermission.UNCLET_ADMIN]}/>}>
            <Route path="/" element={<UncletAdminHome/>}/>
            <Route path="/booking" element={<UncletAdminBookings/>}/>
            <Route path="/booking/:id" element={<UncletAdminBooking/>}/>
            <Route path="/review" element={<UncletAdminReviews/>}/>
            <Route path="/review/:id" element={<UncletAdminReview/>}/>
          </Route>
        </Routes>
      </Shell>
  )
}

export default JublawomaAdmin
