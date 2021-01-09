import React, { useState, useCallback } from 'react';

import { useFocusEffect } from '@react-navigation/native';

import { Container, TitleList, ListMetas, ItemMeta, TitleItem, DescriptionItem, LoadingArea } from './styles';

import { Alert, ActivityIndicator } from "react-native";

import api from '../../config/api'

export default function Meta() {

    const [metas, setMetas] = useState('');
    const [loading, setLoading] = useState(false);

    const getMetas = async () => {
        setLoading(true);

        try {
            const response = await api.get('/metas');
            setMetas(response.data.metas)
            setLoading(false);
        } catch (err) {
            Alert.alert("", "ERRO: Nenhuma meta encontrada, tente mais tarde!");
            setLoading(false);
        }

    }

    useFocusEffect(
        useCallback(() => {
            getMetas()
        }, [])
    );

    return (
        <Container>
            <TitleList>Lista minhas metas!</TitleList>

            {loading ?
            <LoadingArea>
                <ActivityIndicator size="large"color="#fff" />
            </LoadingArea> :

                <ListMetas
                    data={metas}
                    renderItem={({ item }) => (
                        <ItemMeta>
                            <TitleItem>{item.name} </TitleItem>
                            <DescriptionItem>{item.description} </DescriptionItem>
                            <DescriptionItem>{item.status} </DescriptionItem>
                        </ItemMeta>
                    )} keyExtractor={meta => String(meta._id)}

                />
            }
        </Container>
    )
}