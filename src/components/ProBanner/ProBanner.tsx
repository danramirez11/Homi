import { Text } from '../../theme/styledcomponents';
import './ProBanner.css'

const ProBanner = () => {
    return (
        <div className="pro-banner">
        <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp" alt="" />
        <Text variant='bodyRegular' className="inline" color='white'>Etapa III</Text>
        </div>
    );
}

export default ProBanner;