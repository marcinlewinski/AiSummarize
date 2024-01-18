import {Pricing} from "../../components/pricing/Pricing";
import NavBar from "../../components/appBar/NavBar";
import PersistentDrawerLeft from "../../components/appBar/PersistentDrawerLeft";

export const PricingPage = () => {
return (
    <>
        <NavBar></NavBar>
        <Pricing></Pricing>
     <PersistentDrawerLeft></PersistentDrawerLeft>
    </>
)
}