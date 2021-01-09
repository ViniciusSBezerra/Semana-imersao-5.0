import React, { useState } from "react";

import  {ScrollView}  from "react-native-gesture-handler";

import {Container, InputForm, TitleInput, BtnSubmitForm, TxtSubmitForm, TitleRequired } from './styles'
import { LoadingArea  } from '../Metas/styles';

import { ActivityIndicator, Alert } from "react-native";

import api from "../../config/api"


export default function AddMeta(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const[loading, setLoading] = useState(false);

    const addMeta = async () =>{

        setLoading(true);

        await api.post('/metas',{
            name,
            description,
            status
        }).then((response) => {
            Alert.alert("", response.data.message);
            setLoading(false);
        }).catch((err) =>{
            if(err.response){
                Alert.alert("", response.data.message);
            }else{
                Alert.alert("", "ERRO: Meta não cadastrada com sucesso, tente mais tarde");
            }
            setLoading(false);
        })
    }

    return(
        
        <ScrollView contentContainerStyle={{flexGrow: 1}} >
        <Container>
           <TitleInput>* Nome:</TitleInput>
           <InputForm
            placeholder="Nome da meta"
            onChangeText={text => setName(text)}
            editable={!loading}
            value={name}
            autoCorrect={false} />

           <TitleInput>* Descrição:</TitleInput>
           <InputForm 
           placeholder="Descrição da meta"
           onChangeText={text => setDescription(text)}
           value={description}
           editable={!loading}/> 

           <TitleInput>* Status:</TitleInput>
           <InputForm 
           placeholder="Status da meta" 
           onChangeText={text => setStatus(text)}
           value={status}
           editable={!loading}/>
           

            <TitleRequired>* Campo Obrigatorio</TitleRequired>

          <BtnSubmitForm disable={loading} onPress = {addMeta} >
              <TxtSubmitForm>Cadastrar</TxtSubmitForm>
          </BtnSubmitForm>

            {loading && <LoadingArea>
                <ActivityIndicator size="large" color="#fff"/>
                </LoadingArea>}
        </Container>
        </ScrollView>

        
        
    )
}