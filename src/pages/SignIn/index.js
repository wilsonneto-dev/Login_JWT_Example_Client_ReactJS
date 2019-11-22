import React, { Component } from 'react';
import clsx from 'clsx';

import api from '../../services/api';

import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Fab,
  Typography,
  CircularProgress
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import SnackMessage from '../../components/SnackMessage';

import IconLock from '@material-ui/icons/Lock';
import IconCheck from '@material-ui/icons/Check';

import { withStyles } from '@material-ui/core/styles';
import style from './style';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
      loading: false,
      success: false,
      message: '',
      messageType: ''
    };
  }

  async handleSubmit() {
    this.setState({
      loading: true
    });

    const { email, pass } = this.state;

    if (!pass || !email) {
      this.setState({
        loading: false,
        success: false,
        messageType: 'error',
        message: 'Insira seus dados de acesso'
      });
      return;
    }

    const response = await api.post('/auth/login', { email, pass });

    const { success, message } = response.data;
    const newState = {
      loading: false,
      success,
      messageType: success ? 'success' : 'error',
      message
    };

    this.setState(newState);

    if (success) {
      const { token, refreshToken } = response.data;
      console.log(response.data);
      /* const { history } = this.props;
      const nextPage = {
        pathname: '/singin',
        state: newState
      };
      history.push(nextPage); */
    }
  }

  render() {
    const { classes } = this.props;
    const { loading, success, message, messageType } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.fabProgressWrapper}>
            <Fab
              aria-label="save"
              color="primary"
              className={clsx(success && classes.green)}
            >
              {success ? <IconCheck /> : <IconLock />}
            </Fab>
            {loading && (
              <CircularProgress size={68} className={classes.fabProgress} />
            )}
          </div>

          {message && (
            <>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                open={true}
                autoHideDuration={2000}
                onClose={() => {}}
              >
                <SnackMessage
                  onClose={() => {
                    this.setState({ messageType: '', message: '' });
                  }}
                  variant={messageType}
                  message={message}
                  hidden={true}
                  style={{ marginTop: 25, marginBottom: 25 }}
                />
              </Snackbar>
            </>
          )}

          <Typography variant="h5">Acessar Conta</Typography>
          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="e-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Senha"
              type="password"
              id="pass"
              autoComplete="current-password"
              value={this.state.pass}
              onChange={e => this.setState({ pass: e.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading || success}
            >
              {loading ? (
                <CircularProgress size={20} color="primary" />
              ) : (
                'Acessar Conta'
              )}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  <Typography>Criar Conta</Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(style)(SignIn);
