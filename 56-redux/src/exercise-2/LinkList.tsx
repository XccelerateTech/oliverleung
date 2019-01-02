import * as React from "react";

interface ILinkListProps {
    links: Array<{
        title: string,
        url: string
    }>,
    addLink: () => void,
    clearLink: () => void
}

export const PureLinkList = (props: ILinkListProps) => {
    return (
        <div>
            <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear</button>
            {props.links.map(l => (
                <div>{l.title} - {l.url}</div>
            ))}
        </div>
    );
}