import IletisimBilgi from '@/components/iletisimbilgi';
import ConsultForm from '@/components/about/consultForm'; 
import Location from '@/components/konum';

export default function Iletisim() {
  return (
    <div>
      <IletisimBilgi />
      <Location />
      <ConsultForm />
    </div>
  );
}