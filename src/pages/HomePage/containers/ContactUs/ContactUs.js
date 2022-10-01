import { InfoBlock } from '../../../../components/InfoBlock';
import { Typography } from '../../../../components/Typography';
import { Highlighter } from '../../../../components//Highlighter';
import { useRef } from 'react';
import './ContactUs.scss';

export const ContactUs = () => {
  const contacts = useRef([
    {
      id: 1,
      icon: require('../../../../img/mail.png'),
      title: 'Drop a line',
      contactsType: 'Mail Us',
      item1: 'Support87@gmial.com',
      item2: 'ijkuiu874@gmial.com',
    },
    {
      id: 2,
      icon: require('../../../../img/phone-call.png'),
      title: '24/7 Service',
      contactsType: 'Call Us',
      item1: '+880 265 98745 ',
      item2: '+895 855 85589',
      add: '(Toll free)',
    },
    {
      id: 3,
      icon: require('../../../../img/map-pin.png'),
      title: 'Location',
      contactsType: 'Visit Us',
      item1: '158 ralegih sit, houston, yk 5896,uk',
    },
  ]).current;

  return (
    <section className='contactUs' id='contactUs'>
      <div className='sectionWrapper'>
        <InfoBlock
          title='Contact Us'
          heading='Feel Free to Contact With Us'
          highlight='Free to Contact'
          button='none'
        />
        <div className='cards'>
          {contacts.map(
            ({ id, icon, title, contactsType, item1, item2, add }) => (
              <div key={id} className='card'>
                <div className='card-top'>
                  <div className='icon'>
                    <img src={icon} alt='Oh...' />
                  </div>
                  <div className='title'>
                    <Typography
                      className='title-name'
                      component='h4'
                      variant='h4'
                      color='orange'
                    >
                      {title}
                    </Typography>
                    <Typography
                      className='title-contactsType'
                      component='h3'
                      variant='h3'
                    >
                      {contactsType}
                    </Typography>
                  </div>
                </div>
                <div className='card-bottom'>
                  <Typography
                    className='item1'
                    component='h5'
                    variant='h5'
                    color='gray'
                  >
                    {item1}
                    {add && (
                      <Typography className='add' variant='h5' color='orange'>
                        {add}
                      </Typography>
                    )}
                  </Typography>
                  {item2 && (
                    <Typography
                      className='item2'
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
        <div className='feedback'>
          <img
            className='feedback-img'
            src={require(`../../../../img/ContactUs.png`)}
            alt='Oh...'
          />
          <div className='feedbackForm'>
            <Highlighter
              heading='Feel Free to Contact With Us'
              highlight='Free to Contact'
              // className='feedback_form-title'
            />
            <form className='dataFields'>
              <input type='text' placeholder='Name' className='dataField' />
              <input type='email' placeholder='Email' className='dataField' />
              <input type='tel' placeholder='Mobile No' className='dataField' />
              <input
                type='text'
                placeholder='Subject'
                className='dataField subject'
              />
              <textarea
                type='text'
                placeholder='Send Massage'
                className='dataField massage'
              />
              <input type='submit' value='Send Massage' className='btn' />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
