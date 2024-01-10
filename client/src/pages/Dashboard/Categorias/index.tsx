// * Modules * //
import qs from 'qs';
import { Button, Divider, Modal, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// * Exports * //
import { CardTable } from "./categoria.styles";
import ModalCreateCategory from './create-categories';
import ModalCategory from './create-categories';
import { navVariants, staggerContainer } from '@/utils/motion';

// * Components * //

interface DataType {
    name: {
        first: string;
        last: string;
    };
    gender: string;
    email: string;
    login: {
        uuid: string;
    };
}

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

const getRandomuserParams = (params: TableParams) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});

export function CategoriasPage() {
    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 7,
        },
    });

    const fetchData = () => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                setData(results);
                setLoading(false);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: 200,
                    },
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, [JSON.stringify(tableParams)]);

    const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue>,
        sorter: SorterResult<DataType>,
    ) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
    };
    return (
        <section className="w-100 flex flex-wrap justify-center">
            <ModalCategory visible={modal} setVisible={setModal} action="create" />
            <motion.div
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className={` mx-auto  flex-col`}
            >

                <CardTable className="w-256 h-16 mt-9 flex justify-between items-center px-4">
                    <Button
                        type='dashed'
                        className='h-100'
                        onClick={() => setModal(true)}
                    >
                        Cadastrar
                    </Button>
                </CardTable>
                <CardTable className="w-256 p-3">
                    <Table
                        columns={columns}
                        className='rounded-3xl'
                        rowKey={(record) => record.login.uuid}
                        dataSource={data}
                        pagination={tableParams.pagination}
                        loading={loading}
                        onChange={handleTableChange}
                    />
                </CardTable>
            </motion.div>

        </section>
    )
}