import "../../styles/topbar.css";

export default function Topbar(){

    return(

        <div className="topbar">

            <div>

                <h2>Fuel Station AI</h2>

            </div>

            <div className="topbar-user">

                <img
                src="https://i.pravatar.cc/100"
                alt=""
                />

                <div>

                    <h4>Administrator</h4>

                    <p>System Admin</p>

                </div>

            </div>

        </div>

    )

}