import { Input as NativeBaseInput, IInputProps } from 'native-base';
//Colocar o as para não conflitar com o Input do react-native
export function Input({ ...rest }: IInputProps) {
    //O IInputProps é um objeto que contém todos os atributos do Input
    //O ...rest é um spread operator, que vai pegar todos os atributos do Input e colocar no rest 
    return (
        <NativeBaseInput
            bg="gray.700"
            h={14}
            size="md"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            //esse _ significa as pseudoprops
            _focus={{
                borderWidth: 1,
                borderColor: 'green.500',
                bg: "gray.700"
            }}
            {...rest}
        />

    );
}