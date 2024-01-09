// * Modules * //
import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Divider, Image, Modal, Space } from 'antd';
import { CircleNotch } from '@phosphor-icons/react';
import axios, { AxiosResponse } from 'axios';
import { Input } from 'antd';
import { sendImage } from '@/app/api/users';


// * Exports * //
import DefaultPerfilImage from '@/assets/images/profile/OIG.jpeg';
import messageNotify from '../Message/notify';
import refreshPage from '@/functions/refreshPage';

// * Components * //
const { Search } = Input;
const countCards: number = 8;

export function ImageProfileModal() {
    const [modal, setModal] = useState(false);
    const [imageUrls, setImageUrls] = useState<string>("");

    useEffect(() => {

        setModal(true);
    }, []);

    useEffect(() => {
        searchURL()
    }, [imageUrls]);

    const searchURL = async () => {
        try {
            const response = await axios.get(imageUrls);
        } catch (error) {
            console.error('Erro ao buscar a URL da imagem:', error);
        }
    };

    const defineImage = async () => {
        const result: AxiosResponse<any, any> = await sendImage({ imageUrl: imageUrls });

        if (result.status == 200) {
            messageNotify({ func: 'success', content: "Imagem de perfil editada com sucesso." });
            setModal(false);
            setTimeout(() => {
                refreshPage();
            }, 2000);
        } else {
            messageNotify({ func: 'error', key: 'image_error', time: 2, content: "Ocorreu um erro ao editar a imagem." });
        }
    }
    const defineDefaultImage = async () => {
        const result: AxiosResponse<any, any> = await sendImage({ imageUrl: "---" });

        if (result.status == 200) {
            messageNotify({ func: 'success', content: "Imagem de perfil editada com sucesso." });
            setModal(false);
            setTimeout(() => {
                refreshPage();
            }, 2000);
        } else {
            messageNotify({ func: 'error', key: 'image_error', time: 2, content: "Ocorreu um erro ao editar a imagem." });
        }
    }

    return (
        <Modal
            title={<React.Fragment>
                <h4>Selecionar imagem de perfil</h4>
                <Divider dashed className='border-gray-300' style={{ marginTop: 14 }}></Divider>
            </React.Fragment>}
            open={modal}
            onCancel={() => setModal(false)}
            maskClosable={true}
            closeIcon={true}
            footer={<footer className='mt-8'>
                <Button onClick={defineDefaultImage}>Usar Padrão</Button>
                <Button type='primary' onClick={defineImage}>Salvar</Button>
            </footer>}
        >
            <div className='flex flex-wrap gap-4 mb-4'>
                <p>Coloque a url de alguma foto de perfil!</p>
            </div>
            <section>
                <div className="flex justify-center mb-4">
                    <Image
                        src={imageUrls ? imageUrls : DefaultPerfilImage}
                        preview={false}
                        width={100}
                        height={100}
                        fallback={DefaultPerfilImage}
                        className='rounded-full border border-2 border-gray-300' />

                </div>
                <Input placeholder="Coloque aqui o URL" value={imageUrls} onChange={(e: any) => setImageUrls(e.target.value)} />
            </section>
        </Modal>
    );
}