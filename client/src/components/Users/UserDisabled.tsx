// * Modules * //
import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { Button, Divider, Modal, Space } from 'antd';
import { Input } from 'antd';


// * Exports * //

// * Components * //

export function UserDisabled() {
    const [modal, setModal] = useState(false);

    useEffect(() => {

        setModal(true);
    }, []);



    return (
        <Modal
            title={<React.Fragment>
                <h4>Conta desativada.</h4>
                <Divider dashed className='border-gray-300' style={{ marginTop: 14 }}></Divider>
            </React.Fragment>}
            open={modal}
            onCancel={() => setModal(false)}
            maskClosable={false}
            closeIcon={false}
            footer={<footer className='mt-8'>
            </footer>}
        >
            <section>
                Esta conta foi desativada.
            </section>
        </Modal>
    );
}