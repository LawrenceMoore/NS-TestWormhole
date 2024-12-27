import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export const Colours = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    teriary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444',
}

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colours;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 40px;
    background-color: ${primary};
    padding-top: ${Constants.statusBarHeight + 10}px;
    `
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;    
`;

export const PageLogo = styled.Image`
    padding-top: 83px;
    width:50px;
    height:40px;
`;

export const PageTitle = styled.Text`
    font-size:30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding:10px;
`;
export const SubTitle = styled.Text`
    font-size: 15px;
    letter-spacing: 1px;
    font0weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: ${tertiary};
`;
export const StyledFormArea = styled.View`
    width: 90%;
`
export const StyledTextInput = styled.TextInput`
    background-color: ${primary};
    border: 1px;
    border-color: ${secondary};
    border-radius: 10px;
    padding-left: 40px;
    font-size: 16px;
    height: 45px;
    margin-vertical: 3px;
    margin-bottom: 10px;
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 25px;
    position: absolute;
    z-index:1;
`;
export const StyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 42px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

      ${(props) => props.google == true && `
        padding-left: 25px; 
        padding-right: 25px;
    `}
`;
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;
export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;   

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    font-size: 15px;
    letter-spacing: 1px;
    font0weight: bold;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;
export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;

`;
export const CircleContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;
    width: 140px;
    height: 140px;
    border: 1.5px;
    border-color: ${brand};
    align-items: center;
    borderRadius: 70px;
`;
export const ForgotLink = styled.Text`
    color: ${brand};
    font-size: 14px;
    text-align: right;
    margin-right: 10px;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 29px;
    position: absolute;
    z-index: 1;
`;