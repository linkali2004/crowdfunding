import * as React from "react";
import HeroSection from "./HeroSection";
import OverviewDonations from "./OverviewDonations";
import FAQ from "./FAQ";
import Mission from "./Mission";
import Trust from "./Trust";

export default function MainPage()
{
    return (
        <>
        <HeroSection></HeroSection>
        <OverviewDonations></OverviewDonations>
        <FAQ></FAQ>
        <Mission></Mission>
        <Trust></Trust>
        </>
    );
}