/* eslint max-len: 0, react/prefer-stateless-function: 0 */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from '../components/Modal/Modal';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import MaterialButton from '../components/SelectButton/MaterialButton';
import CardModal from '../components/Modal/CardModal';
import MaterialNav from '../components/MaterialNav/MaterialNav';

storiesOf('Modal', module).add('input modal', () => <Modal buttonLabel='Modal' modalHead='Receipt Upload' modalBody='Choose a file to upload by clicking the button below' />);
storiesOf('CardModal', module).add('card modal', () => <CardModal buttonLabel='Modal' modalHead='Card Title' />);
storiesOf('Form', module).add('MVP Form', () => <Form />);
storiesOf('Footer', module).add('Footsy', () => <Footer />);
storiesOf('MaterialNav', module).add('trying to add modal', () => <MaterialNav />);

