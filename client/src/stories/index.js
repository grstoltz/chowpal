import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';
import Modal  from '../components/Modal/Modal.js';
import SelectButton from '../components/SelectButton/SelectButton.js';
import Form from '../components/Form/Form.js';
// import List from '../components/List/List.js';
import ChowCard from '../components/ChowCard/ChowCard.js';
// import ChowNav from '../components/ChowNav/ChowNav.js';
import Footer from '../components/Footer/Footer.js';
import MaterialCard from '../components/ChowCard/MaterialCard.jsx';
// import MaterialList from '../components/List/MaterialList.js';
import MaterialButton from '../components/SelectButton/MaterialButton.js';
import CardModal from '../components/Modal/CardModal.js';
import MaterialNav from '../components/MaterialNav/MaterialNav.js';

storiesOf('Modal', module).add('input modal', () => <Modal buttonLabel='Modal' modalHead='Receipt Upload' modalBody='Choose a file to upload by clicking the button below'/>);
storiesOf('CardModal', module).add('card modal', () => <CardModal buttonLabel='Modal' modalHead='Card Title'/>);
storiesOf('MaterialButton', module).add('Material Button component', () => <MaterialButton buttonColor='primary' buttonText='Hello'/>);
storiesOf('SelectButton', module).add('Standard Button component', () => <SelectButton />);
storiesOf('Form', module).add('MVP Form', () => <Form />);
// storiesOf('List', module).add('Early List Idea', () => <List />);
// storiesOf('MaterialList', module).add('List Using Material', () => <MaterialList />);
storiesOf('ChowCard', module).add('Basic Card', () => <ChowCard />);
storiesOf('MaterialCard', module).add('Card using Material', () => <MaterialCard />);
// storiesOf('ChowNav', module).add('Nav Bar', () => <ChowNav />);
storiesOf('Footer', module).add('Footsy', () => <Footer />);
storiesOf('MaterialNav', module).add('trying to add modal', () => <MaterialNav />);



