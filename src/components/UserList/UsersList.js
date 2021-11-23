import { Fragment } from "react";  
import { Link } from "react-router-dom";


const UsersList = ({usersList}) => {
    return (
       <Fragment>
            <div>
                {
                    usersList?.map((user)=>{
                        const {first,last}= user.name
                        return(
                            <h1>{first}{last}</h1>
                        )
                    })
                }
            </div>
       </Fragment>
    );
}

export default UsersList;
