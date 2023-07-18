import React from "react";
import {routes} from "routes"

export class adminPage1 extends React.Component{
    render() {
        return(
            <div>
                Blog Admin Panel
                <button onClick={()=>this.props.handlePageChange(routes.landing.path)}>project admin panel</button>
            </div>
        )
    }
}