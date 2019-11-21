import React, { Component } from 'react';
import clsx from 'clsx';

import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Fab,
  Typography,
  CircularProgress
} from '@material-ui/core';

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
      message: ''
    };
  }

  handleSubmit() {
    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        success: false,
        message: 'erro askkassakjs'
      });
    }, 2000);
  }

  render() {
    const { classes } = this.props;
    const { loading, success, message } = this.state;

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
              <SnackMessage
                onClose={() => {}}
                variant="error"
                message={message}
                hidden={true}
                style={{ marginTop: 25, marginBottom: 25 }}
              />
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
                  onClose={() => {}}
                  variant="error"
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
              label={`Seu e-mail ${this.state.email}`}
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
                <CircularProgress size={20} color="white" />
              ) : (
                'Me Cadastrar'
              )}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="/sigin" variant="body2">
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
