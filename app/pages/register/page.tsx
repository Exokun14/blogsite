'use client';

import { NavigationBar } from "@/app/components/navigationcomponents"
import Registration from "@/app/components/registrationlogic"
import { supabase } from "@/app/supabaseClient";


export default function RegisterPage() {
    return(
        <div>
            <NavigationBar />

            <div className="w-full h-[90vh] flex flex-col items-center">

                <Registration />
                <GoogleSignOn />
            </div>
        </div>
    );
}

function GoogleSignOn() {
    return (
        <div>
            <button
                onClick={async () => {
                    const { data, error } = await supabase.auth.signInWithOAuth({
                        provider: "google",
                        options: { redirectTo: window.location.origin },
                    });

                    if (error) {
                        console.error("Google login error:", error.message);
                    } else {
                        console.log("Redirecting to Google login...", data);
                    }
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
                Click me
            </button>
        </div>
    );
}
