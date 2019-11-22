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

import IconAccount from '@material-ui/icons/AccountBox';
import IconCheck from '@material-ui/icons/Check';

import { withStyles } from '@material-ui/core/styles';
import style from './style';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      pass: '',
      passConfirm: '',
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

    const { name, email, pass, passConfirm } = this.state;
    if (pass !== passConfirm) {
      this.setState({
        loading: false,
        success: false,
        messageType: 'error',
        message: 'A senha e a confirmação não são iguais'
      });
      return;
    }

    const response = await api.post('/users', { name, email, pass });

    const { success, message } = response.data;
    const newState = {
      loading: false,
      success,
      messageType: success ? 'success' : 'error',
      message
    };

    this.setState(newState);

    if (success) {
      const { history } = this.props;
      const nextPage = {
        pathname: '/signin',
        state: newState
      };
      history.push(nextPage);
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
              {success ? <IconCheck /> : <IconAccount />}
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

          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
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
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu e-mail"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passConfirm"
              label="Confirme a Senha"
              type="password"
              id="passConfirm"
              autoComplete="current-password"
              value={this.state.passConfirm}
              onChange={e => this.setState({ passConfirm: e.target.value })}
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
                'Me Cadastrar'
              )}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signin" variant="body2">
                  Já possui uma conta? Faça Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(style)(SignUp);
