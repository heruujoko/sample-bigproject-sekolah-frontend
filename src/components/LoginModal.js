import React, { useState } from 'react';
import clsx from 'clsx';

const LoginModal = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setShowModal(true)}>Login</button>

            <div className={clsx({'modal': true, 'is-active': showModal === true})}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button onClick={() => setShowModal(false)} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginModal;