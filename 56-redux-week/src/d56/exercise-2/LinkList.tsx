import * as React from "react";

interface ILinkListProps {
    links: Array<{
        id: number,
        title: string,
        url: string
    }>,
    addLink: () => void,
    clearLink: () => void,
    removeLink: (key:number) => void
}

export const PureLinkList = (props: ILinkListProps) => {
    return (
        <div>
            <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear</button>
            {props.links.map(l => (
                // here we set the key value as the id of each element
                <div key={l.id}>{l.title} - {l.url}
                {/* add the delete button for each link here */}
                {/* tslint:disable-next-line:jsx-no-lambda */}
                <button onClick={ () => props.removeLink(l.id) }>Remove</button>
                </div>
            ))}
        </div>
    );
}