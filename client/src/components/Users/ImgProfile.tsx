// * Modules * //
import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Divider, Modal, Space } from 'antd';
import { CircleNotch } from '@phosphor-icons/react';
import axios from 'axios';
import { Input } from 'antd';


// * Exports * //
import DefaultPerfilImage from '@/assets/images/profile/OIG.jpeg';

// * Components * //
const { Search } = Input;
const countCards: number = 8;

export function ImageProfileModal() {
    const [modal, setModal] = useState(false);
    const [imageUrls, setImageUrls] = useState<string>("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setModal(true);
    }, []);


    const searchURL = async () => {
        // Substitua 'sua-api-para-buscar-url-da-imagem' pela URL da sua API que retorna a URL da imagem
        try {
            const response = await axios.get(imageUrls);
            setImageUrls(response.data.url);
        } catch (error) {
            console.error('Erro ao buscar a URL da imagem:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setLoading(true);
        searchURL();
    };

    return (
        <Modal
            title={<React.Fragment>
                <h4>Selecionar imagem de perfil</h4>
                <Divider dashed className='border-gray-300' style={{ marginTop: 14 }}></Divider>
            </React.Fragment>}
            open={modal}
            onCancel={() => setModal(false)}
            maskClosable={false}
            closeIcon={false}
            footer={<footer className='mt-8'>
                <Button >Usar Padrão</Button>
                <Button type='primary' >Salvar</Button>
            </footer>}
        >
            <div className='flex flex-wrap gap-4 mb-4'>
                <p>Coloque a url de alguma foto de perfil!</p>
            </div>
            <section>
                <div className="flex justify-center mb-4">
                    <img src={imageUrls ? imageUrls : DefaultPerfilImage} className='w-16 h-16 rounded-full border border-2 border-gray-300' />

                </div>
                <Search placeholder="Coloque aqui o URL" loading={loading} value={imageUrls} onChange={(e: any) => setImageUrls(e.target.value)} enterButton onSearch={handleSearch} />
            </section>
        </Modal>
    );
}