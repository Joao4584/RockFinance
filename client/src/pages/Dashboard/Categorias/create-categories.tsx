// * Modules * //
import React, { useEffect, useState } from 'react';
import { Button, ColorPicker, Divider, Modal, Input, Flex } from 'antd';

// * Exports * //
import { listIcons } from '@/functions/constants/list-icons';
import { Color } from 'antd/es/color-picker';
import IconCategoryLabel from '@/components/Ui/Icon/IconCategoryLabel';
import { AxiosResponse } from 'axios';
import { registerCategory } from '@/app/api/categories';

// * Components * //
const { TextArea } = Input;

interface ModalCreateProps {
    visible: boolean;
    setVisible: (type: boolean) => void;
    action: 'create' | 'edit';
}

export default function ModalCategory({ visible, setVisible, action }: ModalCreateProps) {
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const [hexColor, setHexColor] = useState<string>("#6a528a");
    const [loading, setLoading] = useState<boolean>(false);
    const [nameInput, setNameInput] = useState<string>("");

    const handleIconClick = (icon: string) => {
        if (selectedIcon === icon) {
            setSelectedIcon(null);
        } else {
            setSelectedIcon(icon);
        }
    };

    const createCategories = async () => {
        const result: AxiosResponse<any, any> = await registerCategory({
            name: nameInput,
            color: hexColor,
            icon: selectedIcon ? selectedIcon : ""
        });
    }

    return (
        <Modal
            title={
                <React.Fragment>
                    <h4>Cadastrar Nova Categoria</h4>
                    <Divider dashed className='border-gray-300 transition-all' style={{ marginTop: 14, marginBottom: 10 }}></Divider>
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
            <section className='mb-6'>
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
                <Flex wrap="wrap" justify='left' align='center' gap={40} >
                    <div className='w-64'>
                        <h3 className='text-sm py-4'>Categoria:</h3>
                        <Input showCount maxLength={25} className='h-10' onChange={(e) => setNameInput(e.target.value)} value={nameInput} />
                    </div>
                    <div>
                        <h3 className='text-sm py-4'>Cor:</h3>
                        <div className="flex gap-4 ">
                            <ColorPicker showText arrow={true} value={hexColor} onChange={(value: Color, hex: string) => setHexColor(hex)} className='p-2 py-5 w-40' />
                            <IconCategoryLabel iconName={selectedIcon} hex={hexColor} />
                        </div>
                    </div>
                    <div>
                        <Button
                            type="default"
                            className='h-10 top-6 w-44 ml-0 md:w-128'
                            loading={loading}
                            onClick={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                }, 3400);
                            }}
                        >
                            Cadastrar
                        </Button>
                    </div>
                </Flex>
            )}
        </Modal>
    )
}
