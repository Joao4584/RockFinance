// * Modules * //
import React, { useEffect, useState } from 'react';
import { Button, ColorPicker, Divider, Modal, Table } from 'antd';

// * Exports * //
import { listIcons } from '@/functions/constants/list-icons';
import { Color } from 'antd/es/color-picker';

// * Components * //
interface ModalCreateProps {
    visible: boolean;
    setVisible: (type: boolean) => void;
    action: 'create' | 'edit';
}

export default function ModalCategory({ visible, setVisible, action }: ModalCreateProps) {
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const [hexColor, setHexColor] = useState<string>("#FFF");

    const handleIconClick = (icon: string) => {
        if (selectedIcon === icon) {
            setSelectedIcon(null);
        } else {
            setSelectedIcon(icon);
        }
    };


    return (
        <Modal
            title={
                <React.Fragment>
                    <h4>Cadastrar Nova Categoria</h4>
                    <Divider dashed className='border-gray-300' style={{ marginTop: 14, marginBottom: 10 }}></Divider>
                </React.Fragment>
            }
            open={visible}
            onCancel={() => setVisible(false)}
            maskClosable={true}
            closeIcon={true}
            width={800}
            footer={<footer className='mt-8'>
            </footer>}
        >
            <section className=''>
                <h3 className='text-sm pb-4'>Selecione um icone:</h3>
                <div className="w-full h-36 overflow-y-scroll flex flex-wrap gap-2 justify-center">
                    {listIcons.map((element: string, i: number) => (
                        <i
                            key={i}
                            className={`ph ${element} text-2xl px-2 hover:bg-gray-100 py-2 rounded-md cursor-pointer transition-all ${selectedIcon === element ? 'text-blue-500 bg-slate-100 shadow-2xl' : ''}`}
                            onClick={() => handleIconClick(element)}
                        ></i>
                    ))}
                </div>
            </section>
            {selectedIcon !== null && (
                <>
                    <h3 className='text-sm py-4'>Cor:</h3>
                    <div className="flex gap-4 ">
                        <ColorPicker showText arrow={true} onChange={(value: Color, hex: string) => setHexColor(hex)} className='p-2 py-5' />
                        <div className="rounded-md border px-2 py-1" style={{ backgroundColor: hexColor }}>
                            <i
                                className={`ph ${selectedIcon} text-2xl text-white transition-all`}
                            ></i>
                        </div>

                    </div>
                </>
            )}
        </Modal>
    )
}
