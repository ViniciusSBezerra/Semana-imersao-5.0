import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 15px;
    justify-content: flex-start;
    background-color: #fff;
`;

export const TitleInput = styled.Text`
    padding-top: 1px;
    color: #111;
    font-size: 18px;
`;

export const InputForm = styled.TextInput`
    background-color: #fff
    width: 100%;
    margin-bottom: 15px;

    font-size: 18px;
    color: #222;

    padding: 10px;
    border-radius: 7px;


    border-color: #171941;
    border-width: 1px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
    background-color: #171941;
    width: 100%;
    height: 45px;
    border-radius: 7px;

    alignItems: center;
    justify-content: center;

`;

export const TxtSubmitForm = styled.Text`
    color: #fff;
    font-size: 22px;
`;

export const TitleRequired = styled.Text`
    padding-top: 1px;
    padding-bottom: 5px;
    color: #111;
    font-size: 12px;
`;
