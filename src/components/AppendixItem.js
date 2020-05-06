import React from 'react';

const AppendixItem = (props) => {

    return (
        <div className="appendix-item">
            <h2>{props.title}</h2>
            {
                props.values.map(v => {
                    return (
                        <React.Fragment>
                            <a href={v.link}>{v.text}</a><br />
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}

export default AppendixItem;