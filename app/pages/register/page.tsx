import { NavigationBar } from "@/app/components/navigationcomponents"
import Registration from "@/app/components/registrationlogic"

export default function RegisterPage() {
    return(
        <div>
            <NavigationBar />

            <div className="w-full h-[90vh] flex flex-col items-center">

                <Registration />
                
            </div>
        </div>
    );
}