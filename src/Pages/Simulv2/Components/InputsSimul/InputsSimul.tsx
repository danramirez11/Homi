import { Input, Text } from "../../../../theme/styledcomponents"

const InputsSimul = ({label,id }: {label: string, id: string}) => {
    return(
        <>
        <Text variant='bodyRegular'>{label}</Text>
        <Input size={'large'} placeholder='Ej: $1´000.000,00' type="number" name="" id={id} />
        </>
    )
}

export default InputsSimul