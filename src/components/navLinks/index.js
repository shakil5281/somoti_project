import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4Icon from '@mui/icons-material/Person4';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Groups3Icon from '@mui/icons-material/Groups3';

export const MainSummary = [
    {
        id: '',
        title: 'Summary',
        icon: <DashboardIcon/>
    },
    {
        id: '/parson',
        title: 'Person',
        icon: <Person4Icon/>
    },
    {
        id: '/payment',
        title: 'Monthly Payment',
        icon: <PaymentIcon/>
    },
    {
        id: '/loan',
        title: 'Loan',
        icon: <AccountBalanceIcon/>
    },
    {
        id: '/emi',
        title: 'EMI',
        icon: <DateRangeIcon/>
    },
    {
        id: '/interest',
        title: 'Interest',
        icon: <AttachMoneyIcon/>
    },
    {
        id: 'history',
        title: 'Account',
        icon: <HistoryIcon/>
    },
]
