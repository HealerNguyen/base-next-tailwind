import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import KitGrid from '@/components/Kit/Grid';
import KitAlert from '@/components/Kit/Alert';
import KitBadge from '@/components/Kit/Badge';
import KitButton from '@/components/Kit/Button';
import KitDropdown from '@/components/Kit/Dropdown';
import KitImage from '@/components/Kit/Image';
import KitInput from '@/components/Kit/Input';
import KitMenu from '@/components/Kit/Menu';
import KitModal from '@/components/Kit/Modal';
import KitNavbar from '@/components/Kit/Navbar';
import KitPagination from '@/components/Kit/Pagination';
import KitProgressbar from '@/components/Kit/Progressbar';
import KitTab from '@/components/Kit/Tab';
import KitTooltip from '@/components/Kit/Tooltips';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js tailwind starter"
          description="Next js starter"
        />
      }
    >
      <KitGrid />
      <KitAlert />
      <KitDropdown />
      <KitBadge />
      <KitButton />
      <KitImage />
      <KitInput />
      <KitMenu />
      <KitModal />
      <KitNavbar />
      <KitPagination />
      <KitProgressbar />
      <KitTab />
      <KitTooltip />

    </Main>
  );
};

export default Index;
