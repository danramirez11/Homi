import { Input, Text } from "../../../../theme/styledcomponents"

const InputsSimul = ({label,id, type }: {label: string, id: string,type:string}) => {
    return(
        <>
        <Text variant='bodyRegular'>{label}</Text>
        <Input size={'large'}  placeholder='Ej: $1´000.000,00' type={type} name="" id={id} />
        </>
    )
}

export default InputsSimul