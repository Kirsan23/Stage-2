import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { Typography } from '../../components/Typography';
import './ContactUs.scss';

export const ContactUs = () => {
  const { darkMode } = useContext(DarkModeContext);
  const contacts = [
    {
      id: 1,
      icon: 'icon-file-mail',
      title: 'Drop a line',
      contactsType: 'Mail Us',
      item1: 'Support87@gmial.com',
      item2: 'ijkuiu874@gmial.com',
    },
    {
      id: 2,
      icon: 'icon-file-phone-call',
      title: '24/7 Service',
      contactsType: 'Call Us',
      item1: '+880 265 98745 ',
      item2: '+895 855 85589',
      add: '(Toll free)',
    },
    {
      id: 3,
      icon: 'icon-file-map-pin',
      title: 'Location',
      contactsType: 'Visit Us',
      item1: '158 ralegih sit, houston, yk 5896,uk',
    },
  ];

  return (
    <section
      className={`contact-us ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      <div className='contact-us main-block'>
        <InfoBlock
          title='Clients Feedback'
          heading='Some Great Words From Our Clients'
          highlight='Great Words'
          button='none'
        />
        <div className='contacts'>
          {contacts.map(({ id, icon, title, contactsType, item1, item2, add }) => (
            <div key={id} className='contacts-card'>
              <div className='contacts-card-top'>
                <span className={`${icon}`} />
                <div>
                  <Typography>{title}</Typography>
                  <Typography>{contactsType}</Typography>
                </div>
              </div>
              <div className='contacts-bottom'>
                <Typography>
                  {item1}
                  {add && <Typography>{add}</Typography>}
                </Typography>
                {item2 && <Typography>{item2}</Typography>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
