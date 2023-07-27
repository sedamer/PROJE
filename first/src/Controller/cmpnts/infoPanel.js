import React from "react";
import {routes} from "routes"
export class adminPage1 extends React.Component{
    render() {
        return(
            <div>
                Info Admin Panel(user)
                <button onClick={()=>this.props.handlePageChange(routes.landing.path)}>Kaydet</button>
            </div>
        )
    }
}