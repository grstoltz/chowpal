import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';
import  Modal  from '../components/Modal/Modal.js';
import SelectButton from '../components/SelectButton/SelectButton.js';
import Form from '../components/Form/Form.js';
// import List from '../components/List/List.js';
import ChowCard from '../components/ChowCard/ChowCard.js';
// import ChowNav from '../components/ChowNav/ChowNav.js';
import Footer from '../components/Footer/Footer.js';
import MaterialCard from '../components/ChowCard/MaterialCard.js';
// import MaterialList from '../components/List/MaterialList.js';
import MaterialButton from '../components/SelectButton/MaterialButton.js';
import CardModal from '../components/Modal/CardModal.js';

storiesOf('Modal', module).add('input modal', () => <Modal />);
storiesOf('CardModal', module).add('card modal', () => <CardModal />);
storiesOf('MaterialButton', module).add('Material Button component', () => <MaterialButton />);
storiesOf('SelectButton', module).add('Standard Button component', () => <SelectButton />);
storiesOf('Form', module).add('MVP Form', () => <Form />);
// storiesOf('List', module).add('Early List Idea', () => <List />);
// storiesOf('MaterialList', module).add('List Using Material', () => <MaterialList />);
storiesOf('ChowCard', module).add('Basic Card', () => <ChowCard />);
storiesOf('MaterialCard', module).add('Card using Material', () => <MaterialCard />);
// storiesOf('ChowNav', module).add('Nav Bar', () => <ChowNav />);
storiesOf('Footer', module).add('Footsy', () => <Footer />);



