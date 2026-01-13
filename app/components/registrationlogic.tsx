"use client";

import { useState } from "react"
import { SetBlogTitle } from "./blogcomponents"
import { RegisterDisplayName, RegisterUsername} from "./registrationcomponent";

export default function Registration () {

    const [registrationStep, setRegistrationStep] = useState (0)
    const [blogTitleData, setBlogTitleData] = useState ("")
    const [username, setUsername] = useState ("")
    const [displayName, setDisplayName] = useState ("")


    switch (registrationStep) {
        case 0:
            return (
                //<p>{registrationStep}</p>
                //<p>{blogTitleData}</p>

                <div className="registration-box min-w-[400px] w-[25vw] min-h-[400px] h-[45vh] mt-[8vh] px-[15px] flex flex-col gap-4">
                    
                    <div className="mt-[2vh]">
                        <SetBlogTitle />
                    </div>
                    
                    <input className="input h-[5vh]"
                        placeholder="Your title goes here"
                        minLength={1}
                        maxLength={100}
                        value={blogTitleData}
                        onChange={(e) => setBlogTitleData(e.target.value)}
                    />

                    <div>
                        <hr className="mt-[20vh] mb-[2vh]"></hr>
                        <div className="flex justify-between px-4">
                        
                            <button onClick={IncrementRegistration}>Skip</button>

                            <div className="flex gap-4">
                                <a href="/">
                                    <button>Cancel</button>
                                </a>
                                
                                <button onClick={() => {StoreData(blogTitleData); IncrementRegistration()}}>Next</button>

                            </div> 
                        </div>
                    </div>
    
                </div>
            );
        
        case 1:
            return (
                <div className="registration-box min-w-[400px] w-[25vw] min-h-[400px] h-[45vh] mt-[8vh] px-[15px] flex flex-col gap-4">
                    
                    <div className="mt-[2vh]">
                        <RegisterUsername />
                    </div>
                    
                    
                    <input
                        className="input h-[5vh]"
                        placeholder="Your title goes here"
                        minLength={1}
                        maxLength={100}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <div>
                        <hr className="mt-[20vh] mb-[2vh]"></hr>
                        <div className="flex justify-between px-4">

                            <a href="/">
                                <button>Cancel</button>
                            </a>

                            <div className="flex gap-4">
                                <button onClick={DecrementRegistration}>Prev</button>
                                <button onClick={IncrementRegistration}>Next</button>
                            </div>

                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="registration-box min-w-[400px] w-[25vw] min-h-[400px] h-[45vh] mt-[8vh] px-[15px] flex flex-col gap-4">
                    
                    <div className="mt-[2vh]">
                        <RegisterDisplayName />
                    </div>

                    <input
                        className="input h-[5vh]"
                        placeholder="Your title goes here"
                        minLength={1}
                        maxLength={100}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />


                    <div>
                        <hr className="mt-[20vh] mb-[2vh]"></hr>
                        <div className="flex justify-between px-4">

                            <a href="/">
                                <button>Cancel</button>
                            </a>

                            <div className="flex gap-4">

                                <button onClick={DecrementRegistration}>Prev</button>

                                <form action="/pages/home">
                                    <input type="hidden" name="blogTitle" value={blogTitleData} readOnly/>
                                    <input type="hidden" name="" value={username} readOnly/>
                                    <input type="hidden" name="" value={displayName} readOnly/>

                                    
                                        <button type="submit">Finish</button>
                                    

                                    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            );
    }

    function IncrementRegistration() {
        if (registrationStep < 0 || registrationStep < 2) {
            setRegistrationStep(prev => prev + 1)
        }
    }

    function DecrementRegistration() {
        if (registrationStep > 0 || registrationStep < 0) {
            setRegistrationStep(prev => prev - 1)
        }
    }

    function StoreData(data = "") {
        switch (registrationStep) {
            case 0:
                setBlogTitleData(data)
                break
            case 1:
                setUsername(data)
                break
            case 2:
                setDisplayName(data)
                break
        }
        
    }
}