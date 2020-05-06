import React from 'react';
import AppendixItem from './AppendixItem';

const Appendix = () => {
    const menus = [
        { key: 'A', values: [{ link: "https://google.com", text: "Architecture" }, { link: "https://google.com", text: "Art" }] },
        { key: 'B', values: [{ link: "https://google.com", text: "Buildings" }] },
        { key: 'C', values: [{ link: "https://google.com", text: "Computer" }, { link: "https://google.com", text: "Comics" }] },
        { key: 'F', values: [{ link: "https://google.com", text: "Family" }, { link: "https://google.com", text: "Finance" }] },
        { key: 'L', values: [{ link: "https://google.com", text: "Law" }, { link: "https://google.com", text: "Lifestyle" }] },
    ]

    return (
        <div className="appendix-parent">
            {
                menus.map((m) => {
                    return <AppendixItem title={m.key} values={m.values} />
                })
            }
        </div>
    )
}

export default Appendix;