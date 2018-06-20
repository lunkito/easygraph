import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';
import GraphList from './GraphList';
import { DataForm } from './DataForm';
import { Grid } from '@material-ui/core';

interface HomeProps {
  loginStore?: LoginStore;
}

@inject('loginStore')
@observer
export class Home extends React.Component<HomeProps> {
  render() {
    return <Grid container>
      {(this.props.loginStore.isLogged) ? <GraphList /> : <DataForm />}
    </Grid>;
  }
}