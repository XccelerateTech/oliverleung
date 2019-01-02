import { connect } from 'react-redux';
import { IRootState } from './app'; // need to add curly brackets to the import function

import * as React from "react";

interface ILinkListProps {
    links: Array<{
        title: string,
        url: string
    }>
}

const PureLinkList = (props: ILinkListProps) => {
    return (
        <div>
            {props.links.map(l => (
                <div>{l.title} - {l.url}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links
    }
}

// link the component to the store
export const LinkList = connect(mapStateToProps)(PureLinkList)