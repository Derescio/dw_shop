import loader from '@/assets/loader.gif';
import Image from 'next/image';
const loading = () => {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Image src={loader} alt='Loading....' width={150} height={150} priority={true} />
    </div>;
}

export default loading;