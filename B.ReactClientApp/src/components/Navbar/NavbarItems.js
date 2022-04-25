import PeopleIcon from '@mui/icons-material/People';
import HouseIcon from '@mui/icons-material/House';
import StoreIcon from '@mui/icons-material/Store';
import TimelineIcon from '@mui/icons-material/Timeline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <AutoGraphIcon />,
        label: 'Stocks',
        route: 'stocks',
    },
    {
        id: 1,
        icon: <TimelineIcon />,
        label: 'ETFs',
        route: 'etfs',
    },
    {
        id: 2,
        icon: <CurrencyBitcoinIcon />,
        label: 'Crypto',
        route: 'crypto',
    },
    {
        id: 3,
        icon: <HouseIcon />,
        label: 'RealEstate',
        route: 'real-estate',
    },
    {
        id: 4,
        icon: <StoreIcon />,
        label: 'Commodities',
        route: 'commodities',
    }
]