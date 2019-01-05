import { connect } from 'react-redux';
import { IRootState } from './app'; // need to add curly brackets to the import function

import * as React from "react";

interface IUserListProps {
    users: Array<{
        user: string,
        // url: string
    }>
}

const PureUserList = (props: IUserListProps) => {
    return (
        <div>
            {props.users.map(l => (
                <div>User - {l.user}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: IRootState) => {
    return {
        users: state.users
    }
}

// link the component to the store
export const UserList = connect(mapStateToProps)(PureUserList)