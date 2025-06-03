import { Text } from '../../theme/styledcomponents';
import './ProBanner.css'

const ProBanner = () => {
    return (
        <div className="pro-banner">
        <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/PremiumF(logo).webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvUHJlbWl1bUYobG9nbykud2VicCIsImlhdCI6MTc0Nzc1OTczOCwiZXhwIjoxNzc5Mjk1NzM4fQ.BaGpYWE1HyVGswLU9xQVQXAaGiWXcp-zPIXxeqC32M4" alt="" />
        <Text variant='bodyRegular' className="inline" color='white'>Etapa III</Text>
        </div>
    );
}

export default ProBanner;