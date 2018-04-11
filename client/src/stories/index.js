import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';
import  Modal  from '../components/Modal/Modal.js';
import SelectButton from '../components/SelectButton/SelectButton.js';
import Form from '../components/Form/Form.js';
import List from '../components/List/List.js';
import ChowCard from '../components/ChowCard/ChowCard.js';
import ChowNav from '../components/ChowNav/ChowNav.js';

storiesOf('Modal', module).add('login modal', () => <Modal />);
storiesOf('SelectButton', module).add('Standard Button component', () => <SelectButton />);
storiesOf('Form', module).add('MVP Form', () => <Form />);
storiesOf('List', module).add('Early List Idea', () => <List />);
storiesOf('ChowCard', module).add('Basic Card', () => <ChowCard />);
storiesOf('ChowNav', module).add('Nav Bar', () => <ChowNav />);



