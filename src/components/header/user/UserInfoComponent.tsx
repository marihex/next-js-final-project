import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './user-info-style.css'

export const UserInfoComponent = () => {
    return (
        <div className='user__container'>
            <div className='notification'>
                <NotificationsNoneIcon/>
            </div>
            <div className='flex gap-1'>
                <img src="/avatar.png" alt="" width={30} height={30}
                     className='user__img'/>
                <div className='user__info'>
                    <span className='user__name'>UserName</span>
                    <span className='user__status'>Premium</span>
                </div>
            </div>
        </div>
    );
};