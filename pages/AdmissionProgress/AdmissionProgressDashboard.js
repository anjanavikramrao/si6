import Link from "next/link";
import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/Layout"
import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";
import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr'


toast.configure()

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
}).then((res) => res.json())

function AdmissionProgressDashboard(props) {
    const [university, setUniversity] = useState([])

    const [selectedUniversity, SetselectedUniversity] = useState(null);
    const [selectedInstitute, SetselectedInstitute] = useState(null);
    const [selectedProgram, SetselectedProgram] = useState(null);
    const [selectedSession, SetselectedSession] = useState(null);

    async function fetchUniversity() {
        const { data, error } = useSWR(
            ['/api/getUniversity', props.getProp("token")],
            fetcher
        )
        setUniversity(data)
    }

    const institutes = []
    const program = []
    const session2 = []


    const onUniversityChange = (e) => {
        SetselectedUniversity(e.value);
    };

    const onInstituteChange = (e) => {
        SetselectedInstitute(e.value);
    };

    const onProgramChange = (e) => {
        SetselectedProgram(e.value);
    };

    const onSessionChange = (e) => {
     SetselectedSession(e.value);
    };

    return (
        <Layout {...props}>
            <div>
                <div className="right-align-drp">
                    <Dropdown
                    className="p-button-warning dropdown-adm"
                    value={selectedUniversity}
                    options={university}
                    onChange={onUniversityChange}
                    optionLabel="name"
                    placeholder="University"
                    style={{ color: "red" }}
                    />
                    <Dropdown
                    className="p-button-warning dropdown-adm"
                    value={selectedInstitute}
                    options={institutes}
                    onChange={onInstituteChange}
                    optionLabel="name"
                    placeholder="Institution"
                    style={{ color: "red" }}
                    />

                    <Dropdown
                    value={selectedProgram}
                    options={program}
                    onChange={onProgramChange}
                    optionLabel="name"
                    placeholder="Program"
                    className="dropdown-adm"

                    />

                    <Dropdown
                    value={selectedSession}
                    options={session2}
                    onChange={onSessionChange}
                    optionLabel="name"
                    placeholder="Year and Session"
                    className="dropdown-adm"
                    />
                </div>
                <div className="right-align-drp2">
                <p >&gt;&gt;<a href="#" > Save Search</a>
                <span style={{ marginLeft: '2rem' }}></span>
                <i className="pi pi-book" ></i><Link  href="./SearchPreferenceEdit"> Edit Search Preference</Link></p>
                </div>
                <div>
                    <TabView>
                
                    <TabPanel header="New Application">
                                {/* <AdmissionStatus title="New Application"/>             */}
                    </TabPanel>
                    <TabPanel header="Approved Application">
                            {/*  <AdmissionStatus title="Approved Application"/> */}    
                    </TabPanel>
                    <TabPanel header="Rejected Application">
                            {/*  <AdmissionStatus title="Rejected Application"/> */}    
                    </TabPanel>
                    </TabView>
                </div>
                <ToastContainer />
            </div>
        </Layout>
    )
}

export default AdmissionProgressDashboard