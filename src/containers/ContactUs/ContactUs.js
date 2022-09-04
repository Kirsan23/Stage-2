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
      icon: 'icon-mail',
      title: 'Drop a line',
      contactsType: 'Mail Us',
      item1: 'Support87@gmial.com',
      item2: 'ijkuiu874@gmial.com',
    },
    {
      id: 2,
      icon: 'icon-phone-call',
      title: '24/7 Service',
      contactsType: 'Call Us',
      item1: '+880 265 98745 ',
      item2: '+895 855 85589',
      add: '(Toll free)',
    },
    {
      id: 3,
      icon: 'icon-map-pin',
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
          {contacts.map(
            ({ id, icon, title, contactsType, item1, item2, add }) => (
              <div key={id} className='contacts-cards'>
                <div className='contacts-card-top'>
                  <div className='card-top-icon'>
                    <span className={`${icon}`} />
                  </div>
                  <div className='card-title'>
                    <Typography
                      className='contacts-card-title'
                      component='h4'
                      variant='h4'
                      color='orange'
                    >
                      {title}
                    </Typography>
                    <Typography
                      className='contacts-card-contactsType'
                      component='h3'
                      variant='h3'
                    >
                      {contactsType}
                    </Typography>
                  </div>
                </div>
                <div className='contacts-bottom'>
                  <Typography
                    className='contacts-card-item1'
                    component='h5'
                    variant='h5'
                    color='gray'
                  >
                    {item1}
                    {add && (
                      <Typography
                        className='contacts-card-add'

                        variant='h5'
                        color='orange'
                      >
                        {add}
                      </Typography>
                    )}
                  </Typography>
                  {item2 && (
                    <Typography
                      className='contacts-card-item2'
                      component='h5'
                      variant='h5'
                      color='gray'
                    >
                      {item2}
                    </Typography>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
