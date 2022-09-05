import { InfoBlock } from '../../components/InfoBlock';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import { Typography } from '../../components/Typography';
import { Highlighter } from '../../components//Highlighter';
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
      <div className='main-block'>
        <InfoBlock
          title='Contact Us'
          heading='Feel Free to Contact With Us'
          highlight='Free to Contact'
          button='none'
        />
        <div className='contacts-cards'>
          {contacts.map(
            ({ id, icon, title, contactsType, item1, item2, add }) => (
              <div key={id} className='contacts-card'>
                <div className='card-top'>
                  <div className='card-top-icon'>
                    <span className={`${icon}`} />
                  </div>
                  <div className='card-title'>
                    <Typography
                      className='card-title'
                      component='h4'
                      variant='h4'
                      color='orange'
                    >
                      {title}
                    </Typography>
                    <Typography
                      className='card-contactsType'
                      component='h3'
                      variant='h3'
                    >
                      {contactsType}
                    </Typography>
                  </div>
                </div>
                <div className='card-bottom'>
                  <Typography
                    className='card-item1'
                    component='h5'
                    variant='h5'
                    color='gray'
                  >
                    {item1}
                    {add && (
                      <Typography
                        className='card-add'
                        variant='h5'
                        color='orange'
                      >
                        {add}
                      </Typography>
                    )}
                  </Typography>
                  {item2 && (
                    <Typography
                      className='card-item2'
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
        <div className='feedback_block'>
          <img
            className='feedback_block-img'
            src={require(`../../img/ContactUs.png`)}
            alt='Oh...'
          />
          <div className='feedback_form'>
            <Highlighter
              heading='Feel Free to Contact With Us'
              highlight='Free to Contact'
              className='feedback_form-title'
            />
            <form className='feedback_form-data_fields'>
              <input type='text' placeholder='Name' className='data_field name'></input>
              <input type='email' placeholder='Email' className='data_field email'></input>
              <input type='tel' placeholder='Mobile No' className='data_field tel'></input>
              <input type='text' placeholder='Subject' className='data_field subject'></input>
              <input type='text' placeholder='Send Massage' className='data_field massage'></input>
              <input type='submit' value='Send Massage' className='btn'></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
